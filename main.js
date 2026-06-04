(function () {
  const config = window.EASTERN_FACADES_CONFIG || {};
  const phoneDisplay = config.phoneDisplay || "05XXXXXXXX";
  const phoneTel = config.phoneTel || "+9665XXXXXXXX";
  const phoneCopy = config.phoneCopy || "0554061861";
  const whatsappNumber = config.whatsappNumber || "9665XXXXXXXX";
  const businessHours = config.businessHours || "تحدد لاحقاً";
  const whatsappMessage =
    config.whatsappMessage ||
    "السلام عليكم، أرغب بالاستفسار عن خدمات الواجهات المشرقة للمقاولات والديكورات.";
  const projects = Array.isArray(config.projects) ? config.projects : [];
  const googleAdsConversionLabels = config.googleAdsConversionLabels || {};
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const googleAdsId = "AW-18214629470";
  const googleAdsEventTimeout = 500;
  const escapeHtml = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (char) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return entities[char];
    });

  const isPhoneDevice = () => {
    const userAgent = navigator.userAgent || "";
    const isIPad =
      /iPad/i.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isTablet =
      isIPad ||
      /Tablet|PlayBook|Silk/i.test(userAgent) ||
      (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent));
    const isPhoneUserAgent = /Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(userAgent);
    const isCompactTouch = window.matchMedia("(max-width: 767px) and (pointer: coarse)").matches;
    const isUserAgentMobile = navigator.userAgentData?.mobile === true;

    return !isTablet && (isUserAgentMobile || isPhoneUserAgent || isCompactTouch);
  };

  const trackGoogleAdsEvent = (eventName, conversionLabel, eventCallback) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      if (conversionLabel) {
        window.gtag("event", "conversion", {
          send_to: `${googleAdsId}/${conversionLabel}`,
          event_callback: eventCallback,
          event_timeout: googleAdsEventTimeout,
        });
      } else {
        window.gtag("event", eventName, {
          event_category: "engagement",
          event_label: eventName,
          event_callback: eventCallback,
          event_timeout: googleAdsEventTimeout,
        });
      }
    } else if (typeof eventCallback === "function") {
      eventCallback();
    }
  };

  const getTrackedLinkEvent = (href) => {
    const normalizedHref = href.toLowerCase();
    if (normalizedHref.startsWith("tel:")) return "phone_click";
    if (
      normalizedHref.includes("wa.me/") ||
      normalizedHref.includes("api.whatsapp.com/") ||
      normalizedHref.includes("whatsapp://")
    ) {
      return "whatsapp_click";
    }
    return "";
  };

  const getTrackedNavigation = (link, href) => {
    const target = link.getAttribute("target");
    const shouldOpenNewContext = target && target !== "_self";
    const pendingWindow = shouldOpenNewContext ? window.open("about:blank", target) : null;

    return () => {
      if (pendingWindow && !pendingWindow.closed) {
        pendingWindow.opener = null;
        pendingWindow.location.href = href;
        return;
      }

      if (shouldOpenNewContext) {
        window.open(href, target, "noopener");
        return;
      }

      window.location.href = href;
    };
  };

  const trackAndThen = (eventName, conversionLabel, callback) => {
    let callbackWasCalled = false;
    const done = () => {
      if (callbackWasCalled) return;
      callbackWasCalled = true;
      callback();
    };

    window.setTimeout(done, googleAdsEventTimeout);
    trackGoogleAdsEvent(eventName, conversionLabel, done);
  };

  const initGoogleAdsClickTracking = () => {
    document.addEventListener("click", (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const eventName = getTrackedLinkEvent(href);
      if (!eventName) return;

      const conversionLabel = googleAdsConversionLabels[eventName];
      const shouldDelayNavigation = eventName === "whatsapp_click" || (eventName === "phone_click" && isPhoneDevice());

      if (!shouldDelayNavigation) {
        trackGoogleAdsEvent(eventName, conversionLabel);
        return;
      }

      event.preventDefault();
      trackAndThen(eventName, conversionLabel, getTrackedNavigation(link, link.href || href));
    }, true);
  };

  const fallbackAttribute = (fallbackImage) =>
    fallbackImage ? ` data-fallback-image="${escapeHtml(fallbackImage)}"` : "";

  const attachImageFallbacks = (scope) => {
    scope.querySelectorAll("img[data-fallback-image]").forEach((image) => {
      const applyFallback = () => {
        const fallbackImage = image.getAttribute("data-fallback-image");
        if (!fallbackImage || image.dataset.fallbackApplied === "true") return;
        image.dataset.fallbackApplied = "true";
        image.src = fallbackImage;
      };

      image.addEventListener("error", applyFallback, { once: true });
      if (image.complete && image.naturalWidth === 0) applyFallback();
    });
  };

  const setContactLinks = () => {
    document.querySelectorAll("[data-phone-link]").forEach((link) => {
      link.setAttribute("href", `tel:${phoneTel}`);
      link.setAttribute("aria-label", `اتصل على ${phoneDisplay}`);
    });

    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      link.setAttribute("href", whatsappUrl);
      link.setAttribute("aria-label", "تواصل عبر واتساب مع الواجهات المشرقة");
    });

    document.querySelectorAll("[data-whatsapp-display]").forEach((node) => {
      node.textContent = whatsappNumber;
    });

    document.querySelectorAll("[data-phone-display]").forEach((node) => {
      node.textContent = phoneDisplay;
    });

    document.querySelectorAll("[data-business-hours]").forEach((node) => {
      node.textContent = businessHours;
    });
  };

  const initCallNotice = () => {
    const notice = document.querySelector("[data-call-notice]");
    const closeButtons = document.querySelectorAll("[data-call-notice-close]");
    const copyButton = document.querySelector("[data-call-copy]");
    const noticeNumber = document.querySelector("[data-call-notice-number]");
    let lastFocusedCallElement = null;
    let copyResetTimer = null;

    if (!notice) return;
    if (noticeNumber) noticeNumber.textContent = phoneDisplay;

    const resetCopyButton = () => {
      if (!copyButton) return;
      window.clearTimeout(copyResetTimer);
      copyButton.textContent = "نسخ الرقم";
    };

    const openNotice = () => {
      lastFocusedCallElement = document.activeElement;
      resetCopyButton();
      notice.setAttribute("aria-hidden", "false");
      document.body.classList.add("call-notice-open");
      window.requestAnimationFrame(() => {
        copyButton?.focus();
      });
    };

    const closeNotice = () => {
      resetCopyButton();
      notice.setAttribute("aria-hidden", "true");
      document.body.classList.remove("call-notice-open");
      if (lastFocusedCallElement && typeof lastFocusedCallElement.focus === "function") {
        lastFocusedCallElement.focus();
      }
    };

    const copyNumber = async () => {
      if (!copyButton) return;

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(phoneCopy);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = phoneCopy;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.append(textarea);
          textarea.select();
          document.execCommand("copy");
          textarea.remove();
        }

        copyButton.textContent = "تم النسخ";
        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(() => {
          copyButton.textContent = "نسخ الرقم";
        }, 2000);
      } catch (error) {
        copyButton.textContent = "تعذر النسخ";
        window.clearTimeout(copyResetTimer);
        copyResetTimer = window.setTimeout(() => {
          copyButton.textContent = "نسخ الرقم";
        }, 2000);
      }
    };

    document.querySelectorAll("[data-phone-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (isPhoneDevice()) return;
        event.preventDefault();
        openNotice();
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", closeNotice);
    });

    notice.addEventListener("click", (event) => {
      if (event.target === notice) closeNotice();
    });

    copyButton?.addEventListener("click", copyNumber);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && notice.getAttribute("aria-hidden") === "false") {
        closeNotice();
      }
    });
  };

  const initMobileMenu = () => {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-mobile-nav]");
    if (!toggle || !nav) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setOpen(false);
    });
  };

  const initAnchorScrolling = () => {
    const header = document.querySelector(".site-header");
    const getHeaderOffset = () => Math.ceil(header?.getBoundingClientRect().height || 0);

    const scrollToHash = (hash, updateHistory) => {
      const target = document.querySelector(hash);
      if (!target) return;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
      const scrollTop = Math.max(0, targetTop - getHeaderOffset());
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
      if (updateHistory) history.pushState(null, "", hash);
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const hash = link.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        scrollToHash(hash, true);
      });
    });

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash, false), 80);
    }
  };

  const projectTrack = document.querySelector("[data-project-track]");
  const projectPrevButton = document.querySelector("[data-project-prev]");
  const projectNextButton = document.querySelector("[data-project-next]");
  let activeProjectIndex = 0;

  const getCarouselOffset = () => {
    if (window.matchMedia("(max-width: 759px)").matches) {
      return Math.min(window.innerWidth * 0.58, 220);
    }
    if (window.matchMedia("(max-width: 979px)").matches) return 245;
    return 295;
  };

  const getProjectPosition = (index) => {
    if (projects.length <= 1) return 0;
    let position = index - activeProjectIndex;
    const half = projects.length / 2;
    if (position > half) position -= projects.length;
    if (position < -half) position += projects.length;
    return position;
  };

  const updateProjectControls = () => {
    const hasMultipleProjects = projects.length > 1;
    [projectPrevButton, projectNextButton].forEach((button) => {
      if (!button) return;
      button.disabled = !hasMultipleProjects;
      button.setAttribute("aria-disabled", String(!hasMultipleProjects));
    });
  };

  const updateProjectCards = () => {
    if (!projectTrack) return;
    const offset = getCarouselOffset();

    projectTrack.querySelectorAll("[data-project-card]").forEach((card) => {
      const index = Number(card.dataset.projectIndex);
      const position = getProjectPosition(index);
      const distance = Math.abs(position);
      const isActive = position === 0;
      const isVisible = distance <= 2;
      const yOffset = isActive ? -8 : position % 2 === 0 ? 18 : 24;
      const scale = isActive ? 1 : distance === 1 ? 0.9 : 0.78;
      const opacity = isActive ? 1 : distance === 1 ? 0.68 : 0.28;
      const rotation = isActive ? 0 : position > 0 ? -3.2 : 3.2;

      card.dataset.position = String(position);
      card.dataset.visible = String(isVisible);
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-current", String(isActive));
      card.setAttribute("aria-hidden", String(!isVisible));
      card.tabIndex = isVisible ? 0 : -1;
      card.style.setProperty("--project-x", `${position * -offset}px`);
      card.style.setProperty("--project-y", `${yOffset}px`);
      card.style.setProperty("--project-scale", String(scale));
      card.style.setProperty("--project-rotate", `${rotation}deg`);
      card.style.setProperty("--project-opacity", String(opacity));
      card.style.setProperty("--project-z", String(isActive ? 30 : 20 - distance));
    });

    updateProjectControls();
  };

  const setActiveProject = (index) => {
    if (!projects.length) return;
    activeProjectIndex = (index + projects.length) % projects.length;
    updateProjectCards();
  };

  const moveActiveProject = (steps) => {
    setActiveProject(activeProjectIndex + steps);
  };

  const createProjectCard = (project, index) => {
    const card = document.createElement("article");
    const hasProjectDetails =
      project.detailsPlaceholder === true ||
      (project.detailsAvailable !== false && Array.isArray(project.stages) && project.stages.length > 0);
    card.className = "project-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.dataset.projectCard = "";
    card.dataset.projectIndex = String(index);
    card.dataset.hasDetails = String(hasProjectDetails);
    card.setAttribute("aria-label", `اختيار عمل ${project.title}`);
    card.innerHTML = `
      <div class="project-card-body">
        <span class="project-type">${escapeHtml(project.type)}</span>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-card-footer">
          <button class="project-open" type="button" data-project-index="${index}" ${hasProjectDetails ? "" : 'aria-disabled="true"'}>عرض المشروع</button>
          <span class="project-number">#${index + 1}</span>
        </div>
      </div>
    `;

    card.querySelector("[data-project-index]").addEventListener("click", (event) => {
      event.stopPropagation();
      if (Number(card.dataset.position) !== 0) {
        setActiveProject(index);
        return;
      }

      if (hasProjectDetails) {
        openProject(index);
      }
    });

    card.addEventListener("click", () => {
      if (Number(card.dataset.position) !== 0) setActiveProject(index);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (Number(card.dataset.position) === 0) {
          if (hasProjectDetails) openProject(index);
        } else {
          setActiveProject(index);
        }
      }
    });

    return card;
  };

  const renderProjects = () => {
    if (!projectTrack) return;
    projectTrack.innerHTML = "";
    if (!projects.length) {
      projectTrack.innerHTML = '<p class="projects-empty">سيتم إضافة الأعمال قريباً.</p>';
      updateProjectControls();
      return;
    }

    projects.forEach((project, index) => {
      projectTrack.appendChild(createProjectCard(project, index));
    });

    attachImageFallbacks(projectTrack);
    updateProjectCards();
  };

  const initProjectsCarousel = () => {
    renderProjects();
    projectPrevButton?.addEventListener("click", () => moveActiveProject(-1));
    projectNextButton?.addEventListener("click", () => moveActiveProject(1));
    window.addEventListener("resize", updateProjectCards);
  };

  const modal = document.querySelector("[data-project-modal]");
  const modalBody = document.querySelector("[data-project-modal-body]");
  const modalTitle = document.querySelector("[data-project-modal-title]");
  const modalPanel = modal?.querySelector(".project-modal-panel");
  const imageLightbox = document.querySelector("[data-image-lightbox]");
  const imageLightboxImage = document.querySelector("[data-lightbox-image]");
  const imageLightboxClose = document.querySelector("[data-lightbox-close]");
  let lastFocusedElement = null;
  let lastFocusedImageTrigger = null;

  const openImageLightbox = (src, alt) => {
    if (!imageLightbox || !imageLightboxImage) return;
    lastFocusedImageTrigger = document.activeElement;
    imageLightboxImage.src = src;
    imageLightboxImage.alt = alt || "صورة المشروع";
    imageLightbox.setAttribute("aria-hidden", "false");
    imageLightboxClose?.focus();
  };

  const closeImageLightbox = () => {
    if (!imageLightbox || !imageLightboxImage) return;
    imageLightbox.setAttribute("aria-hidden", "true");
    imageLightboxImage.src = "";
    if (lastFocusedImageTrigger && typeof lastFocusedImageTrigger.focus === "function") {
      lastFocusedImageTrigger.focus();
    }
  };

  const bindStageImageLightbox = (scope) => {
    scope.querySelectorAll("[data-lightbox-trigger]").forEach((button) => {
      button.addEventListener("click", () => {
        const image = button.querySelector("img");
        if (!image) return;
        openImageLightbox(image.currentSrc || image.src, image.alt);
      });
    });
  };

  const getFactIcon = (label) => {
    const icons = {
      الموقع: '<img src="assets/project-facts/location.png" alt="" width="18" height="18" loading="lazy">',
      المساحة: '<img src="assets/project-facts/area.png" alt="" width="18" height="18" loading="lazy">',
      "مدة التنفيذ": '<img src="assets/project-facts/calendar.png" alt="" width="18" height="18" loading="lazy">',
    };
    return icons[label] || '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M5 8h14"/><path d="M7 16h10"/></svg>';
  };

  const fitOneLineTitles = (scope) => {
    scope.querySelectorAll("[data-fit-title]").forEach((title) => {
      title.style.fontSize = "";
      title.style.whiteSpace = "nowrap";
      title.style.transform = "";

      const availableWidth = title.clientWidth;
      if (!availableWidth) return;

      let size = Number.parseFloat(window.getComputedStyle(title).fontSize);
      const minSize = window.matchMedia("(max-width: 759px)").matches
        ? 10
        : window.matchMedia("(max-width: 1240px)").matches
          ? 12
          : 14;
      let low = minSize;
      let high = size;
      let best = size;

      for (let index = 0; index < 18; index += 1) {
        const mid = (low + high) / 2;
        title.style.fontSize = `${mid}px`;

        if (title.scrollWidth <= availableWidth + 1) {
          best = mid;
          low = mid;
        } else {
          high = mid;
        }
      }

      size = Math.max(minSize, best);
      title.style.fontSize = `${size}px`;

      while (title.scrollWidth > title.clientWidth + 1 && size > minSize) {
        size -= 0.5;
        title.style.fontSize = `${size}px`;
      }
    });
  };

  const initStageViewer = (scope) => {
    const viewer = scope.querySelector("[data-stage-viewer]");
    if (!viewer) return;

    const triggers = Array.from(viewer.querySelectorAll("[data-stage-trigger]"));
    const markers = Array.from(viewer.querySelectorAll("[data-stage-marker]"));
    const number = viewer.querySelector("[data-active-stage-number]");
    const title = viewer.querySelector("[data-active-stage-title]");
    const description = viewer.querySelector("[data-active-stage-description]");

    const setActiveStage = (index) => {
      const trigger = triggers[index];
      if (!trigger || !number || !title || !description) return;

      triggers.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
        item.setAttribute("aria-pressed", String(itemIndex === index));
      });

      markers.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
        item.setAttribute("aria-current", itemIndex === index ? "step" : "false");
      });

      number.textContent = String(index + 1).padStart(2, "0");
      title.textContent = trigger.dataset.stageTitle || "";
      description.textContent = trigger.dataset.stageDescription || "";
    };

    triggers.forEach((trigger, index) => {
      trigger.addEventListener("click", () => setActiveStage(index));
    });

    markers.forEach((marker, index) => {
      marker.addEventListener("click", () => setActiveStage(index));
    });

    setActiveStage(0);
  };

  const initFinalGallery = (scope) => {
    scope.querySelectorAll("[data-final-gallery]").forEach((gallery) => {
      const items = Array.from(gallery.querySelectorAll("[data-gallery-item]"));
      const prev = gallery.querySelector("[data-gallery-prev]");
      const next = gallery.querySelector("[data-gallery-next]");
      let startIndex = 0;

      const getVisibleCount = () => (window.matchMedia("(max-width: 759px)").matches ? 3 : Math.min(4, items.length));

      const updateGallery = () => {
        const visibleCount = getVisibleCount();
        const needsControls = items.length > visibleCount;
        gallery.dataset.hasControls = String(needsControls);

        items.forEach((item, index) => {
          const position = (index - startIndex + items.length) % items.length;
          item.classList.toggle("is-gallery-visible", position < visibleCount);
          item.style.order = String(position);
          item.tabIndex = position < visibleCount ? 0 : -1;
        });

        [prev, next].forEach((button) => {
          if (!button) return;
          button.hidden = !needsControls;
          button.disabled = !needsControls;
        });
      };

      prev?.addEventListener("click", () => {
        startIndex = (startIndex - 1 + items.length) % items.length;
        updateGallery();
      });

      next?.addEventListener("click", () => {
        startIndex = (startIndex + 1) % items.length;
        updateGallery();
      });

      window.addEventListener("resize", updateGallery);
      updateGallery();
    });
  };

  function openProject(index) {
    const project = projects[index];
    if (!project || !modal || !modalBody || !modalTitle) return;

    lastFocusedElement = document.activeElement;
    modalTitle.textContent = project.title;
    if (modalPanel) modalPanel.scrollTop = 0;

    const facts = Array.isArray(project.facts) ? project.facts : [];
    const stages = Array.isArray(project.stages) ? project.stages : [];
    const approvedStageLabels = [
      "المعاينة الأولية",
      "التكسير والإزالة",
      "التجهيز والتأسيس",
      "أعمال التشطيب",
      "ما قبل التسليم",
    ];
    const stageLabelAliases = new Map([
      ["المعاينة الأولية", "المعاينة الأولية"],
      ["أعمال التكسير والإزالة", "التكسير والإزالة"],
      ["إزالة التشطيبات القديمة", "التكسير والإزالة"],
      ["التكسير والإزالة", "التكسير والإزالة"],
      ["بداية التنفيذ والمعالجة", "التجهيز والتأسيس"],
      ["أعمال المعالجة والتأسيس", "التجهيز والتأسيس"],
      ["أعمال التأسيس والتجهيز", "التجهيز والتأسيس"],
      ["التجهيز والتأسيس", "التجهيز والتأسيس"],
      ["أعمال التشطيبات", "أعمال التشطيب"],
      ["أعمال التشطيب", "أعمال التشطيب"],
      ["تجهيز الأسقف والحوائط قبل الدهان", "أعمال التشطيب"],
      ["مرحلة ما قبل التسليم", "ما قبل التسليم"],
      ["ما قبل التسليم", "ما قبل التسليم"],
    ]);
    const normalizeStageLabel = (label) => stageLabelAliases.get(label) || "";
    const journeyStageContent = [
      {
        label: "المعاينة الأولية",
        description: "تقييم الموقع وتحديد احتياج العمل قبل بدء التنفيذ.",
      },
      {
        label: "التكسير والإزالة",
        description: "إزالة التشطيبات القديمة وتجهيز الموقع للمرحلة التالية.",
      },
      {
        label: "التجهيز والتأسيس",
        description: "معالجة الأسطح وتنظيم الأعمال التأسيسية قبل التشطيب.",
      },
      {
        label: "أعمال التشطيب",
        description: "تنفيذ أعمال الجبس والدهان والإضاءات حسب متطلبات المشروع.",
      },
      {
        label: "ما قبل التسليم",
        description: "مراجعة اللمسات النهائية وتجهيز المساحة للتسليم.",
      },
    ];
    const useProjectStageContent = project.useProjectStageContent === true;
    const normalizeProjectStages = (projectStages) =>
      projectStages
        .map((stage, originalIndex) => {
          const label = normalizeStageLabel(stage.label);
          return {
            ...stage,
            label,
            originalIndex,
            stageOrder: approvedStageLabels.indexOf(label),
          };
        })
        .filter((stage) => stage.label && stage.stageOrder >= 0 && stage.image)
        .sort((first, second) => first.stageOrder - second.stageOrder || first.originalIndex - second.originalIndex)
        .map(({ originalIndex, stageOrder, ...stage }) => stage);
    const journeyStages = useProjectStageContent
      ? normalizeProjectStages(stages)
      : stages.slice(0, journeyStageContent.length).map((stage, stageIndex) => ({
          ...stage,
          label: journeyStageContent[stageIndex].label,
          description: journeyStageContent[stageIndex].description,
        }));
    const finalGallery = Array.isArray(project.finalImages) && project.finalImages.length
      ? project.finalImages
      : stages.slice(-4);
    const isPlaceholderProject = project.detailsPlaceholder === true;
    const locationValue = isPlaceholderProject ? "" : facts.find((fact) => fact.label === "الموقع")?.value || "";
    const placeholderItems = Array.from({ length: 5 });
    const placeholderGalleryItems = Array.from({ length: 3 });
    const placeholderFacts = ["الموقع", "المساحة", "مدة التنفيذ"];
    const factsMarkup =
      !isPlaceholderProject && facts.length
        ? `<dl class="project-facts" data-fact-count="${facts.length}">
            ${facts
              .map(
                (fact) => `
                  <div>
                    <span class="project-fact-icon">${getFactIcon(fact.label)}</span>
                    <div class="project-fact-text">
                      <dt>${escapeHtml(fact.label)}</dt>
                      <dd>${escapeHtml(fact.value)}</dd>
                    </div>
                  </div>
                `
              )
              .join("")}
          </dl>`
        : isPlaceholderProject
          ? `<dl class="project-facts project-facts-placeholder" data-fact-count="${placeholderFacts.length}">
              ${placeholderFacts
                .map(
                  (label) => `
                    <div>
                      <span class="project-fact-icon">${getFactIcon(label)}</span>
                      <div class="project-fact-text">
                        <dt>${escapeHtml(label)}</dt>
                        <dd><span class="modal-placeholder-line modal-placeholder-line-short" aria-hidden="true"></span></dd>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </dl>`
          : "";
    const briefMarkup = isPlaceholderProject
      ? `<div class="modal-placeholder-copy" aria-hidden="true">
          <span class="modal-placeholder-line"></span>
          <span class="modal-placeholder-line"></span>
          <span class="modal-placeholder-line modal-placeholder-line-wide"></span>
        </div>`
      : `<p class="modal-description">${escapeHtml(project.summary || project.description)}</p>`;
    const galleryMarkup = isPlaceholderProject
      ? `<div class="modal-section-separator modal-section-separator-gallery" aria-hidden="true"></div>
        <section class="final-gallery final-gallery-placeholder" aria-label="الصور النهائية للمشروع" data-final-gallery data-gallery-count="${placeholderGalleryItems.length}">
          <h4 class="modal-section-title">الصور النهائية للمشروع</h4>
          <div class="final-gallery-shell">
            <button class="final-gallery-nav final-gallery-prev" type="button" aria-label="الصورة السابقة" data-gallery-prev>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <div class="final-gallery-grid">
              ${placeholderGalleryItems
                .map(
                  (_, galleryIndex) => `
                    <div class="final-gallery-item final-gallery-item-placeholder is-gallery-visible" data-gallery-item style="order:${galleryIndex}" aria-hidden="true"></div>
                  `
                )
                .join("")}
            </div>
            <button class="final-gallery-nav final-gallery-next" type="button" aria-label="الصورة التالية" data-gallery-next>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          </div>
        </section>`
      : finalGallery.length
        ? `<div class="modal-section-separator modal-section-separator-gallery" aria-hidden="true"></div>
          <section class="final-gallery" aria-label="الصور النهائية للمشروع" data-final-gallery data-gallery-count="${finalGallery.length}">
            <h4 class="modal-section-title">الصور النهائية للمشروع</h4>
            <div class="final-gallery-shell">
              <button class="final-gallery-nav final-gallery-prev" type="button" aria-label="الصورة السابقة" data-gallery-prev>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              <div class="final-gallery-grid">
              ${finalGallery
                .map(
                  (stage, galleryIndex) => `
                    <button class="final-gallery-item is-gallery-visible" type="button" aria-label="تكبير صورة ${escapeHtml(stage.label)}" data-gallery-item data-lightbox-trigger style="order:${galleryIndex}">
                      <img src="${escapeHtml(stage.image)}" width="420" height="300" alt="${escapeHtml(project.title)} - ${escapeHtml(stage.label)}"${fallbackAttribute(stage.fallbackImage)} loading="lazy">
                    </button>
                  `
                )
                .join("")}
              </div>
              <button class="final-gallery-nav final-gallery-next" type="button" aria-label="الصورة التالية" data-gallery-next>
                <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            </div>
          </section>`
        : "";
    const journeyMarkup = isPlaceholderProject
      ? placeholderItems
          .map(
            (_, stageIndex) => `
              <li class="project-journey-stage project-journey-stage-placeholder">
                <div class="journey-stage-media journey-stage-media-placeholder" aria-hidden="true"></div>
                <span class="journey-stage-number">${String(stageIndex + 1).padStart(2, "0")}</span>
                <div class="journey-stage-copy journey-stage-copy-placeholder">
                  <h3>${escapeHtml(journeyStageContent[stageIndex].label)}</h3>
                  <div class="modal-placeholder-copy modal-placeholder-copy-stage" aria-hidden="true">
                    <span class="modal-placeholder-line"></span>
                    <span class="modal-placeholder-line modal-placeholder-line-wide"></span>
                  </div>
                </div>
              </li>
            `
          )
          .join("")
      : journeyStages
          .map(
            (stage, stageIndex) => `
              <li class="project-journey-stage">
                <button class="journey-stage-media" type="button" aria-label="تكبير صورة ${escapeHtml(stage.label)}" data-lightbox-trigger>
                  <img src="${escapeHtml(stage.image)}" width="420" height="280" alt="${escapeHtml(project.title)} - ${escapeHtml(stage.label)}"${fallbackAttribute(stage.fallbackImage)} loading="lazy">
                </button>
                <span class="journey-stage-number">${String(stageIndex + 1).padStart(2, "0")}</span>
                <div class="journey-stage-copy">
                  <h3>${escapeHtml(stage.label)}</h3>
                  <p>${escapeHtml(stage.description)}</p>
                </div>
              </li>
            `
          )
          .join("");

    modalBody.innerHTML = `
      <div class="project-brochure" data-stage-count="${isPlaceholderProject ? placeholderItems.length : journeyStages.length}">
        <aside class="modal-side">
          <div class="modal-project-intro">
            <h3 class="modal-project-title" data-fit-title>${escapeHtml(project.title)}</h3>
            ${locationValue ? `<p class="modal-location">${escapeHtml(locationValue)}</p>` : ""}
            ${factsMarkup}
          </div>

          <div class="modal-section-separator modal-section-separator-brief" aria-hidden="true"></div>
          <div class="project-brief">
            <h4 class="modal-section-title">نبذة عن المشروع</h4>
            ${briefMarkup}
          </div>

          ${galleryMarkup}
        </aside>

        <section class="modal-journey" aria-label="رحلة المشروع">
          <h4 class="modal-section-title">رحلة المشروع</h4>
          <ol class="project-journey-list">
            ${journeyMarkup}
          </ol>
        </section>
      </div>
    `;

    attachImageFallbacks(modalBody);
    bindStageImageLightbox(modalBody);
    initFinalGallery(modalBody);
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    const refitTitles = () => fitOneLineTitles(modalBody);
    window.requestAnimationFrame(() => {
      refitTitles();
      window.requestAnimationFrame(refitTitles);
    });
    document.fonts?.ready.then(refitTitles).catch(() => {});
    modal.querySelector("[data-project-close]").focus();
  }

  const closeProject = () => {
    if (!modal) return;
    closeImageLightbox();
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  };

  window.addEventListener("resize", () => {
    if (modal?.getAttribute("aria-hidden") === "false" && modalBody) {
      window.requestAnimationFrame(() => fitOneLineTitles(modalBody));
    }
  });

  const initProjectModal = () => {
    if (!modal) return;
    modal.querySelectorAll("[data-project-close]").forEach((button) => {
      button.addEventListener("click", closeProject);
    });
  };

  const initImageLightbox = () => {
    if (!imageLightbox) return;
    imageLightboxClose?.addEventListener("click", closeImageLightbox);
    imageLightbox.addEventListener("click", (event) => {
      if (event.target === imageLightbox) closeImageLightbox();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && imageLightbox.getAttribute("aria-hidden") === "false") {
        closeImageLightbox();
      }
    });
  };

  setContactLinks();
  initGoogleAdsClickTracking();
  initCallNotice();
  initMobileMenu();
  initAnchorScrolling();
  initProjectsCarousel();
  initProjectModal();
  initImageLightbox();
})();
