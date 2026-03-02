تقرير عن منهجية التعامل مع أحجام الخطوط في الموقع
اعتمادًا على ملف app/[locale]/page.tsx، هذه الصفحة الرئيسية تقوم فقط بتجميع أقسام مثل Header, AboutSection, ServicesSection, … إلخ. أي أن منطق أحجام الخطوط لا يُدار هنا مباشرة، بل غالبًا داخل:
نظام التصميم / الـ Design System (مثل Typography component، أو Text, Title, …)
أو ملفات الـ CSS/SCSS / Tailwind config / Theme المشتركة
أو داخل كل سكشن على حدة (مثل AboutSection, ServicesSection…)
لذلك سأتحدث عن منهجية مثالية ومقترحة لإدارة أحجام الخطوط على مستوى الموقع بالكامل بحيث يمكنك تطبيقها أو مقارنتها بما هو موجود عندك.
1. المبدأ العام: مقياس موحّد لأحجام الخطوط
استخدم نظامًا موحّدًا للأحجام (Typographic Scale) بدل تعيين قيم عشوائية مثل 13px, 17px, إلخ.
اختر مقياسًا واضحًا مثل:
xs, sm, base, lg, xl, 2xl, 3xl, ...
أو caption, body, body-lg, subtitle, h6, h5, h4, h3, h2, h1
لكل مستوى تعيين قيمة رقمية ثابتة (مثلًا باستخدام rem):
body = 1rem (16px)
body-lg = 1.125rem (18px)
subtitle = 1.25rem (20px)
h6 = 1.125rem
h5 = 1.25rem
h4 = 1.5rem
h3 = 1.875rem
h2 = 2.25rem
h1 = 3rem
الهدف: أي نص في أي سكشن يُعرّف بحجم منطقي من هذا المقياس، وليس بقيمة جديدة خاصة به.
2. ضبط قاعدة الأساس في الـ HTML (Root Font Size)
عيّن حجم خط أساس في الـ html (مثلاً 16px) لتوحيد الحسابات:
  html {    font-size: 16px;  }  body {    font-size: 1rem; /* 16px */  }
ثم استخدم rem في كل مكان لأحجام الخطوط بدل px:
هذا يسهل عمل تصغير/تكبير عام للخطوط (Accessibility, Zoom).
ويحافظ على اتساق النِسَب بين النصوص.
3. تعريف نظام Typography مركزي (Global Typography System)
إن كنت تستخدم Tailwind (مثال شائع):
عرّف الـ scale في tailwind.config.js داخل theme.fontSize مثلًا:
fontSize: {  xs: ['0.75rem', { lineHeight: '1rem' }],  sm: ['0.875rem', { lineHeight: '1.25rem' }],  base: ['1rem', { lineHeight: '1.5rem' }],  lg: ['1.125rem', { lineHeight: '1.75rem' }],  xl: ['1.25rem', { lineHeight: '1.75rem' }],  '2xl': ['1.5rem', { lineHeight: '2rem' }],  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  '5xl': ['3rem', { lineHeight: '1' }],}
ثم تستعملها في كل السكاشن:
عنوان رئيسي: text-4xl md:text-5xl
عناوين سكشن: text-2xl md:text-3xl
نصوص الفقرات: text-base md:text-lg
نصوص مساعدة (caption): text-xs أو text-sm
إن كنت تستخدم CSS Modules / SCSS / styled-components:
أنشئ ملفًا مركزيًا مثل typography.css أو theme.ts يحتوي على:
متغيرات CSS لأحجام الخطوط:
    :root {      --font-size-body: 1rem;      --font-size-body-lg: 1.125rem;      --font-size-subtitle: 1.25rem;      --font-size-h6: 1.125rem;      --font-size-h5: 1.25rem;      --font-size-h4: 1.5rem;      --font-size-h3: 1.875rem;      --font-size-h2: 2.25rem;      --font-size-h1: 3rem;    }
أو كائن typography في theme.ts:
    export const typography = {      body: '1rem',      bodyLg: '1.125rem',      subtitle: '1.25rem',      h6: '1.125rem',      h5: '1.25rem',      h4: '1.5rem',      h3: '1.875rem',      h2: '2.25rem',      h1: '3rem',    };
كل component يستخدم هذه القيم بدل أرقام جديدة.
4. مكوّنTypography موحّد (اختياري لكن قوي)
أنشئ مكوّن عام مثل Typography أو عدة مكوّنات (Heading, Text) تكون هي الطبقة الوحيدة التي تتحكم في حجم الخط.
مثال بسيط:
type Variant =  | 'h1'  | 'h2'  | 'h3'  | 'h4'  | 'h5'  | 'h6'  | 'subtitle'  | 'body'  | 'body-sm'  | 'caption';interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {  as?: React.ElementType;  variant: Variant;}export function Typography({ as: Tag = 'p', variant, className, ...props }: TypographyProps) {  const baseClass = getClassNameForVariant(variant); // map variant -> classes  return <Tag className={`${baseClass} ${className ?? ''}`} {...props} />;}
بهذه الطريقة:
Header, AboutSection, ServicesSection وغيرها لا تضبط أرقامًا مباشرة.
بل تستخدم مثلًا:
    <Typography as="h1" variant="h1">...</Typography>    <Typography as="h2" variant="h2">...</Typography>    <Typography variant="body">...</Typography>
أي تغيير لاحق في أحجام الخطوط يتم مرة واحدة في Typography/theme بدل البحث في كل السكاشن.
5. التكيف مع الشاشات المختلفة (Responsive Typography)
أحجام الخطوط الكبيرة (مثل h1, h2) يجب أن تكون:
أصغر على الموبايل
أكبر على الديسكتوب
يمكن إدارة هذا عبر:
Tailwind breakpoints: مثل text-3xl md:text-5xl
أو Media Queries في CSS:
    h1 {      font-size: 2rem;    }    @media (min-width: 768px) {      h1 {        font-size: 3rem;      }    }
يفضّل توحيد المنهج:
مثال: كل h1 في الموقع يتّبع نفس البريك بوينت ونفس النسبة.
لا تجعل كل سكشن يبتكر قواعده الخاصة إلا لضرورة تصميمية واضحة.
6. دعم تعدد اللغات (خاصة العربية والإنجليزية)
بما أن المسار يعتمد على locale، غالبًا الموقع متعدد اللغات (مثلاً ar, en):
قاعدة مهمة: لا تغيّر أحجام الخطوط حسب اللغة إلا إذا كانت هناك ضرورة (مثلاً خط عربي يحتاج تكبير طفيف).
الأفضل:
نفس المقياس كقيم (1rem, 1.5rem…).
ما يتغير هو الـ font-family / line-height / letter-spacing.
إن احتجت تغييرات دقيقة للعربية مثل تكبير طفيف للنصوص:
استخدم كلاس على مستوى الـ body مثل dir-rtl أو locale-ar.
وعرّف تعديلات بسيطة:
    .locale-ar {      --font-size-body: 1.0625rem; /* +1px مثلاً */      --font-size-h1: 3.125rem;    }
المهم: تبقى النِسَب بين الأحجام متقاربة في جميع اللغات.
7. قواعد عملية لتوزيع أحجام الخطوط في كل صفحات الموقع
العناوين الرئيسية (Hero / أول سطر في الصفحة)
موبايل: ما بين 2rem و2.5rem
ديسكتوب: 3rem إلى 4rem
مثال Tailwind: text-3xl md:text-5xl
عناوين الأقسام (Section titles مثل "خدماتنا", "من نحن")
موبايل: 1.5rem – 1.875rem
ديسكتوب: 2rem – 2.5rem
مثال Tailwind: text-2xl md:text-3xl
العناوين الفرعية داخل الكروت/البوكسات
موبايل: 1.125rem – 1.25rem
ديسكتوب: 1.25rem – 1.5rem
مثال Tailwind: text-lg md:text-xl
نصوص الفقرات (Body text)
موبايل: 1rem – 1.0625rem
ديسكتوب: 1rem – 1.125rem
مثال Tailwind: text-base md:text-lg
نصوص ثانوية (Captions / Notes / Labels)
موبايل: 0.75rem – 0.875rem
ديسكتوب: 0.75rem – 0.875rem
مثال Tailwind: text-xs أو text-sm
8. طريقة التطبيق على مستوى المشروع كاملًا
باختصار، منهجية شاملة للتعامل مع أحجام الخطوط في مشروعك:
1. تعريف مقياس موحّد للأحجام في مكان مركزي (Tailwind config أو theme/typography).
2. استخدام rem بدل px قدر الإمكان لضمان قابلية التوسعة والـ accessibility.
3. منع تعيين أحجام خطوط مباشرة داخل السكاشن (style={{ fontSize: 17 }} أو className="text-[17px]") إلا لضرورات نادرة.
4. استخدام مكوّنات Typography موحدة (Typography, Heading, Text) بحيث كل النصوص تمر من خلالها.
5. ضبط أحجام الخطوط بشكل Responsive عبر breakpoints موحدة للعناوين والنصوص.
6. مراعاة اللغات (locale) عن طريق تغييرات بسيطة إن لزم، مع الحفاظ على ثبات المقياس الأساسي.
7. توثيق هذا النظام في مستند داخلي (مثلاً DESIGN_SYSTEM.md أو صفحة في Storybook) ليعرف كل الفريق الأحجام المتاحة ومتى تُستخدم.