---
name: website-design
description: Design polished websites and landing pages with strong visual judgment, responsive Arabic/English support, safe SEO foundations, and preservation of existing brand layouts. Use when building or improving a website, landing page, service page, portfolio, company site, multilingual page, or SEO-ready frontend without breaking the visual design.
---

# Website Design Intelligence Skill

استخدم هذا السكيل عندما يطلب المستخدم تصميم موقع، صفحة هبوط، صفحة خدمة، Portfolio، موقع شركة، أو أي واجهة ويب تحتاج قرار بصري ذكي وسريع.

هدف السكيل: لا تنسخ هوية موقع موجود. افهم كيف تُبنى الهوية، ثم صمّم هوية مناسبة للعميل من الصفر بناءً على المجال والجمهور والهدف.

## الفكرة الأساسية

الموقع الممتاز لا يبدأ بالألوان. يبدأ بفهم:

- من هو العميل؟
- ما المجال؟
- من الجمهور؟
- ما الإحساس المطلوب؟
- ما الفعل الذي نريد من الزائر عمله؟
- ما مستوى الثقة المطلوب؟
- هل الموقع تسويقي، تشغيلي، فاخر، تقني، رسمي، شخصي، طبي، تعليمي، أو متجر؟

بعد ذلك تُبنى الهوية من العلاقات بين العناصر:

- لون أساسي + لون فعل + لون هدوء + لون تحذير/نجاح
- خط للعناوين + خط للنصوص + وزن واضح لكل طبقة
- تباعد ثابت + radius مناسب + shadow محسوب
- Hero واضح + أقسام متدرجة + CTA منطقي
- Responsive مبني للقراءة وليس فقط للتصغير

## ممنوعات مهمة

- لا تنسخ ألوان موقع Mutaz AI Studio إلا إذا طلب المستخدم نفس الهوية صراحة.
- لا تبدأ بصفحة تسويقية عامة إذا طلب المستخدم أداة أو تجربة قابلة للاستخدام.
- لا تستخدم لوناً واحداً بدرجاته فقط.
- لا تستخدم gradients زخرفية بلا سبب.
- لا تستخدم بطاقات كثيرة إذا كان المجال يحتاج جدية وكثافة معلومات.
- لا تجعل الصفحة كلها “كروت داخل كروت”.
- لا تستخدم نصوص شرح داخل الواجهة عن كيف تعمل الواجهة.
- لا تعتمد على ذوق عام مثل “modern and clean” فقط. اربطه بالمجال.

## طريقة التفكير السريعة

قبل التصميم، صنف المشروع في واحدة من هذه الشخصيات:

| نوع العميل | الإحساس | التصميم المناسب |
|---|---|---|
| SaaS / B2B | ثقة، وضوح، كفاءة | واجهة هادئة، معلومات منظمة، أزرار واضحة، ألوان محدودة |
| AI / Tech | ذكاء، سرعة، ابتكار | تباين قوي، حركة بسيطة، أشكال هندسية، accent جريء |
| Luxury | رقي، ندرة، هدوء | مساحات واسعة، ألوان عميقة أو فاتحة ناعمة، خط أنيق، صور قوية |
| Healthcare | أمان، طمأنينة، وضوح | ألوان نظيفة، تباين مقروء، صور بشرية، CTA مطمئن |
| Legal / Finance | رسمية، ثقة، تحفظ | خطوط قوية، ألوان محافظة، معلومات دقيقة، زحمة أقل |
| Restaurant / Venue | شهية، مكان، تجربة | صور حقيقية، ألوان مرتبطة بالمطبخ/المكان، CTA للحجز |
| Portfolio | شخصية، جودة، تذكر | visual signature واضح، مشاريع بارزة، نص قليل |
| Education | وضوح، تقدم، سهولة | hierarchy قوي، ألوان مساعدة، خطوات مفهومة |
| E-commerce | قرار سريع، مقارنة، تحويل | صور منتجات واضحة، فلترة، أسعار، CTA متكرر |
| Government / Official | ثقة، نظام، وصول | بساطة، تباين عال، لغة مباشرة، قيود وصول |

## بناء لوحة الألوان بذكاء

لا تختار ألوان عشوائية. ابنِ النظام بهذه الطريقة:

1. **Base**: خلفية أو سطح رئيسي يناسب المجال.
2. **Text**: لون قراءة عالي التباين.
3. **Muted**: لون نص ثانوي لا ينافس العنوان.
4. **Primary**: لون الهوية أو اللون الأقوى.
5. **Action**: لون الزر الرئيسي. قد يكون نفس primary أو أكثر وضوحاً.
6. **Surface**: لون البطاقات/الطبقات.
7. **Border**: لون يفصل بدون ضجيج.
8. **Success / Warning / Danger**: فقط إذا يوجد حالات.

### قواعد التركيب

- لو الخلفية داكنة: النص الأساسي قريب من الأبيض، والـ muted لا يقل عن وضوح القراءة.
- لو الخلفية فاتحة: لا تستخدم رمادي فاتح جداً للنصوص المهمة.
- لون الـ CTA يجب أن يكون أوضح شيء قابل للنقر.
- الـ accent لا يغطي أكثر من 10-15% من الشاشة غالباً.
- استخدم اللون الأقوى للقرارات، لا للزخرفة.
- خذ من الشعار أو المجال لوناً واحداً، ثم ابنِ حوله neutral palette.

### مثال Tokens عام

```css
:root {
  --color-bg: #0b0d10;
  --color-surface: #12161c;
  --color-surface-2: #181e26;
  --color-text: #f7f9fc;
  --color-muted: #a7b0bd;
  --color-primary: #4f8cff;
  --color-action: #7cf2b4;
  --color-border: rgba(255, 255, 255, 0.1);
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-danger: #ef4444;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.22);
  --container: 1180px;
}
```

غير القيم حسب العميل. لا تعتبر المثال هو الهوية الافتراضية.

## اختيار الخطوط

اختر الخط حسب شخصية العميل:

- Tech/SaaS: `Inter`, `Sora`, `Manrope`, `IBM Plex Sans`
- Arabic business: `Cairo`, `IBM Plex Sans Arabic`, `Tajawal`
- Luxury/editorial: `Playfair Display`, `Cormorant`, مع sans واضح للنص
- Government/official: خط واضح ومحافظ، لا تستخدم display مبالغ
- Youth/creative: ممكن خط أكثر شخصية لكن حافظ على القراءة

قواعد:

- لا تستخدم أكثر من خطين.
- اجعل العناوين بوزن 700-900.
- نصوص الفقرات غالباً 16-18px desktop و14-16px mobile.
- line-height للفقرات بين 1.55 و1.85.
- لا تستخدم letter-spacing سلبي إلا إذا كان واضحاً في العناوين الإنجليزية الكبيرة.
- العربية غالباً تحتاج line-height أعلى وletter-spacing صفر.

## نظام المساحات

استخدم scale ثابت:

```css
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
}
```

قواعد:

- Hero يحتاج أكبر مساحة.
- الأقسام الداخلية أقل من Hero.
- البطاقات لا تزيد padding إلا إذا كان المحتوى قليل وفاخر.
- في mobile قلل المسافات لكن لا تخنق النص.

## بناء الصفحة

### Hero

Hero الجيد يجاوب خلال 5 ثواني:

- من أنت؟
- ماذا تقدم؟
- لمن؟
- لماذا أصدقك؟
- ماذا أفعل الآن؟

قالب:

```html
<section class="hero">
  <div class="hero-copy">
    <p class="eyebrow">Category or proof point</p>
    <h1>Clear offer or brand promise</h1>
    <p class="lead">Specific outcome, audience, and value without vague hype.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#contact">Primary action</a>
      <a class="btn btn-secondary" href="#work">Secondary action</a>
    </div>
  </div>
  <div class="hero-media" aria-hidden="true"></div>
</section>
```

اختيار Hero media:

- منتج: صورة المنتج الحقيقي.
- مطعم/مكان: صورة المكان أو الطبق.
- SaaS: لقطة واجهة أو dashboard.
- خدمة تقنية: visualization بسيط أو mockup.
- شخص/Portfolio: صورة أو عمل حقيقي.

## البطاقات

البطاقة ليست زخرفة. استخدمها عندما تمثل عنصر مستقل:

- خدمة
- ميزة
- مشروع
- خطة سعرية
- اعتماد
- شهادة عميل

قالب مرن:

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: clamp(18px, 2vw, 28px);
  transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--color-primary) 42%, var(--color-border));
  box-shadow: var(--shadow-soft);
}
```

قواعد:

- Radius 8-16px لمعظم مواقع الأعمال.
- Luxury ممكن radius أقل أو أكثر حسب الهوية.
- لا تستخدم shadow ثقيل مع خلفية داكنة إلا للتركيز.
- hover يجب أن يكون خفيفاً ولا يغير التخطيط.

## Grid and Responsive

Breakpoints الافتراضية الذكية:

```css
.container {
  width: min(var(--container), calc(100% - 40px));
  margin-inline: auto;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .container {
    width: min(100% - 24px, 420px);
  }

  .grid-3 {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
```

قواعد:

- Desktop: 3 أو 4 أعمدة حسب المحتوى.
- Tablet: غالباً 2 أعمدة.
- Mobile: عمود واحد.
- لا تجعل النص يلمس حواف الشاشة.
- اختبر أطول كلمة وأطول عنوان.

## Navigation

الـ nav يجب أن يعكس حجم الموقع:

- صفحة بسيطة: Logo + 3 روابط + CTA.
- موقع خدمات: Logo + Services + Work + About + Contact.
- SaaS: Product + Solutions + Pricing + Resources + CTA.
- متجر: Logo + Categories + Search + Cart.

Mobile:

- استخدم زر واضح للمنيو.
- عند فتح المنيو، امنع body scroll.
- أغلق المنيو عند الضغط على رابط.
- استخدم `aria-expanded` و`aria-hidden`.

## CSS Loading Order

امنع FOUC: لا تجعل المتصفح يرسم HTML قبل تحميل تنسيقاته الأساسية.

- ضع كل CSS الحرج داخل `<head>` قبل `</head>`، خصوصًا nav/header/mobile menu/footer/layout.
- ضع كل `<link rel="stylesheet">` في `<head>`، ولا تضع ملف CSS بعد عناصر `<body>`.
- لا تضع `<style>` كبيرًا وسط `<body>` إذا كان يؤثر على عناصر سبقته مثل navbar أو mobile menu.
- اجعل حالة القائمة الافتراضية مخفية بالـ CSS قبل أي JS: `.mobile-menu { display: none; }` أو `opacity: 0; pointer-events: none;`.
- عند استخدام static HTML مع صفحات فرعية، استخدم نفس ترتيب `<head>` في كل اللغات والنسخ.
- إذا كان هناك `cleanUrls` أو routing يحول `.html` إلى روابط نظيفة، استخدم الروابط النهائية مباشرة لتقليل التأخير.

قالب ترتيب صحيح:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="base.css">
  <link rel="stylesheet" href="nav.css">
  <style>
    /* critical page-specific CSS only */
  </style>
</head>
<body>
  <nav class="navbar">...</nav>
  <main>...</main>
  <script src="app.js"></script>
</body>
```

## Buttons

```css
.btn {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 999px;
  padding: 0 20px;
  font: inherit;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease;
}

.btn-primary {
  background: var(--color-action);
  color: #050505;
  border: 1px solid transparent;
}

.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.btn:hover {
  transform: translateY(-2px);
}
```

قواعد:

- CTA الرئيسي أعلى تباين.
- لا تجعل كل الأزرار بنفس القوة.
- الأزرار في mobile لا تقل عن 44px ارتفاع.

## الحركة والانتقالات

الحركة تخدم الفهم، لا الاستعراض.

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 650ms ease, transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

```js
function initReveal() {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}
```

## الصور والأصول البصرية

اختر الصورة حسب القرار الذي يحتاجه المستخدم:

- إذا يشتري منتج: أظهر المنتج بوضوح.
- إذا يختار مطعم أو مكان: أظهر المكان أو الطعام الحقيقي.
- إذا يثق في شخص: أظهر الشخص أو أعماله.
- إذا يستخدم تطبيق: أظهر الواجهة أو workflow.

لا تستخدم صوراً مظلمة أو ضبابية أو عامة عندما يحتاج المستخدم أن يرى الشيء الحقيقي.

## Arabic / English

عند وجود لغتين:

- `html lang="ar" dir="rtl"` للعربية.
- `html lang="en" dir="ltr"` للإنجليزية.
- لا تستخدم letter-spacing في العربية.
- راقب طول النص العربي لأنه غالباً أطول.
- عناوين mobile العربية تحتاج line-height أعلى.
- لا تخلط أرقام/أكواد داخل RTL بدون `dir="ltr"` عند الحاجة.

قالب:

```js
function applyLanguage(lang, copy) {
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.body.style.fontFamily = isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif";

  Object.entries(copy[lang]).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}
```

## SEO بدون تخريب التصميم

SEO القوي لا يعني تغيير شكل الموقع أو حشر كلمات داخل الواجهة. ابدأ دائماً بالطبقة الآمنة التي لا تغيّر التصميم:

- `title` مختلف وواضح لكل صفحة.
- `meta description` طبيعي ومخصص لكل صفحة.
- `canonical` للنسخة الرسمية.
- `hreflang` عند وجود لغتين.
- Open Graph و Twitter cards لتحسين مشاركة الروابط.
- JSON-LD للبراند والخدمات: `Organization`, `WebSite`, `Service`, `AboutPage` عند الحاجة.
- `sitemap.xml` و `robots.txt`.
- `alt` للصور المهمة فقط.

قواعد مهمة:

- لا تستخدم نصاً مخفياً للكلمات المفتاحية.
- لا تحشر كلمات بحث داخل الواجهة إذا كان يخرب الهوية أو القراءة.
- لا تغيّر hero أو layout أو CSS المرئي لأجل SEO إلا إذا طلب المستخدم ذلك صراحة.
- إذا كان الموقع له دومين مخصص غير معروف، ذكّر المستخدم أن `canonical` و `sitemap` يجب أن يستخدموا الدومين النهائي.
- لا تترك روابط معاينة أو استضافة مؤقتة مثل Vercel/Netlify/GitHub Pages داخل SEO إذا كان لدى المستخدم دومين رسمي.
- بعد النشر، ذكّر المستخدم بإضافة الموقع في Google Search Console وإرسال `sitemap.xml`.

## دومين الإنتاج قبل التسليم

قبل إنهاء أي موقع منشور، اسأل أو استنتج الدومين الرسمي. إذا كان المستخدم يستخدم دوميناً مثل `https://www.example.com/`، اجعل كل روابط SEO تستخدم هذا الدومين، وليس رابط الاستضافة التجريبي.

حدّث هذه الأماكن دائماً:

- `canonical`
- `hreflang`
- `sitemap.xml`
- `robots.txt`
- `og:url` و `og:image`
- `twitter:image`
- JSON-LD: `url`, `logo`, `@id`, `sameAs` عند الحاجة

بعد التحديث:

- ابحث عن روابط المعاينة القديمة مثل `vercel.app`, `netlify.app`, `github.io`.
- تأكد أن `sitemap.xml` XML صالح.
- تأكد أن JSON-LD صالح.
- أخبر المستخدم بالرابط النهائي الذي يجب إرساله في Search Console: `https://domain.com/sitemap.xml`.

## SEO للغات متعددة

دعم اللغة للمستخدم ليس كافياً دائماً لمحركات البحث. إذا كان المستخدم يريد الظهور في بحث عربي وإنجليزي، اجعل الصفحات المهمة موجودة كـ HTML فعلي لكل لغة، وليس فقط نصوص تتغير عبر JavaScript.

النمط المفضل للصفحة الرئيسية:

- الإنجليزية: `index.html` أو `/`
- العربية: `index-ar.html` أو `/ar`
- اربط الصفحتين بـ `hreflang`.
- أضف الصفحتين إلى `sitemap.xml`.
- اجعل النص العربي المهم موجوداً مباشرة في HTML العربي: مثل `وكالة حلول ذكاء اصطناعي` أو `تصميم مواقع` إذا كانت كلمات مستهدفة فعلاً.
- اجعل زر اللغة ينتقل بين الصفحتين ويحافظ على `hash` الحالي مثل `#services` أو `#contact`.
- اجعل URL هو مصدر الحقيقة للغة الصفحة، ولا تجعل `localStorage` يجبر صفحة عربية أن تظهر إنجليزية أو العكس.

مثال تبديل لغة آمن:

```js
const path = window.location.pathname.replace(/\/$/, '');
const isArabicHome = /\/index-ar(?:\.html)?$/.test(path);
const isEnglishHome = path === '' || path === '/index' || /\/index(?:\.html)?$/.test(path);

langToggle.addEventListener('click', () => {
  const nextPage = isArabicHome ? 'index.html' : 'index-ar.html';
  window.location.href = `${nextPage}${window.location.search}${window.location.hash}`;
});
```

تأكد أن النسخة العربية تستخدم:

```html
<html lang="ar" dir="rtl">
```

وتأكد أن النسخة الإنجليزية تستخدم:

```html
<html lang="en" dir="ltr">
```

## تذكيرات SEO للعميل

إذا طلب المستخدم SEO قوي أو الظهور في Google، ذكّره بهذه النقاط عند التسليم:

- الظهور لا يكون فورياً؛ Google يحتاج فهرسة ووقت.
- أرسل `sitemap.xml` في Google Search Console.
- إذا كان الدومين الرسمي موجوداً، تأكد أن `sitemap.xml` المرسل يستخدم الدومين الرسمي وليس رابط Vercel أو أي رابط مؤقت.
- استخدم URL Inspection واطلب فهرسة الصفحة الرئيسية والصفحات المهمة.
- المنافسة على كلمات عامة مثل `حلول ذكاء اصطناعي` أو `تصميم مواقع` تحتاج صفحات خدمة قوية ومحتوى واضح وروابط خارجية مع الوقت.
- التعديلات التقنية وحدها تحسن الفهم والفهرسة، لكنها لا تضمن المركز الأول.

## Accessibility

قبل التسليم:

- كل زر له اسم واضح.
- الروابط ليست مجرد “اضغط هنا”.
- التباين مقروء.
- Focus state ظاهر.
- الصور لها alt إذا كانت مفيدة.
- لا تعتمد على اللون وحده للحالات.
- استخدم semantic HTML: `header`, `main`, `section`, `footer`.

## Performance

- لا تضف مكتبات ضخمة بلا سبب.
- استخدم صور مضغوطة وبأبعاد مناسبة.
- لا تستخدم فيديو hero ثقيل إلا إذا مهم جداً.
- استخدم CSS transitions بدل JS animation عندما يكفي.
- لا تبني canvas/3D إلا إذا يخدم الهوية فعلاً.

## Workflow عند استلام طلب عميل

1. اقرأ طلب العميل وحدد المجال والجمهور والهدف.
2. استخرج شخصية التصميم: رسمي، فاخر، تقني، ودود، طبي، شبابي، إلخ.
3. اختر لوحة ألوان مبنية على الوظيفة وليس الذوق.
4. اختر خطين كحد أقصى.
5. ابنِ structure الصفحة: Hero, proof, services/features, process, testimonials, CTA, footer.
6. صمم mobile مبكراً، وليس بعد انتهاء desktop.
7. راجع النصوص: هل كل عنوان يقول قيمة واضحة؟
8. اختبر أطوال النصوص، خاصة العربية.
9. تأكد أن CTA واضح ومتكرر في الأماكن المنطقية.
10. شغّل فحص بصري أو screenshot إذا كان المشروع frontend.

## أسئلة ذكية إذا كان الطلب ناقصاً

اسأل سؤالاً واحداً أو سؤالين فقط إذا كان القرار مؤثراً:

- ما مجال العميل والجمهور المستهدف؟
- هل المطلوب موقع تعريفي أم صفحة تحويل أم متجر أم أداة؟
- هل توجد ألوان أو شعار إلزامي؟

إذا لم يجب المستخدم، افترض افتراضاً محافظاً واذكره في التنفيذ.

## Checklist قبل التسليم

- الهوية تناسب المجال، وليست نسخة من مشروع آخر.
- إذا كان SEO مطلوباً: `title`, `description`, `canonical`, `hreflang`, Open Graph, JSON-LD, `sitemap.xml`, و `robots.txt` موجودة ومناسبة.
- إذا كان للموقع دومين رسمي: كل روابط SEO تستخدم الدومين الرسمي، ولا توجد روابط `vercel.app` أو `netlify.app` أو روابط معاينة داخل الملفات.
- إذا كان الموقع عربي/إنجليزي ويستهدف البحث في اللغتين: الصفحات المهمة لها HTML فعلي لكل لغة، وليست معتمدة فقط على تبديل JavaScript.
- زر اللغة يعمل دون تخريب التصميم ويحافظ على القسم الحالي عند الانتقال بين الصفحات.
- تذكير المستخدم بـ Google Search Console عند التسليم.
- لوحة الألوان فيها base/text/muted/primary/action/surface/border.
- CTA واضح وعالي التباين.
- Typography hierarchy واضح.
- Hero يشرح العرض بسرعة.
- كل section له دور.
- Cards مستخدمة فقط للعناصر المستقلة.
- Mobile لا يوجد فيه تداخل أو نص خارج الزر.
- RTL/LTR مضبوط عند وجود العربية.
- CSS الحرج وروابط stylesheets موجودة في `<head>` قبل أي عناصر مرئية في `<body>`، ولا يظهر navbar أو mobile menu بشكل خام أثناء التحميل.
- الصور أو visual assets مناسبة للمجال.
- التباين والقراءة جيدان.
- الحركة خفيفة وتحترم `prefers-reduced-motion`.
- الكود يستخدم tokens بدل ألوان عشوائية متناثرة.
- لا توجد زخرفة بلا وظيفة.
- الصفحة الأولى هي التجربة الفعلية، وليست كلاماً عاماً، إذا طلب المستخدم أداة أو تطبيق.
