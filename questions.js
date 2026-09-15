const questions = [

/* =========================
🏛️ تاریخ
========================= */

{
id: 1,
category: "history",
difficulty: "easy",
question: "کوروش بزرگ بنیان‌گذار کدام شاهنشاهی بود؟",
options: [
"هخامنشیان",
"ساسانیان",
"اشکانیان",
"صفویان"
],
answer: 0
},

{
id: 2,
category: "history",
difficulty: "easy",
question: "پاسارگاد بیشتر با کدام شخصیت تاریخی ارتباط دارد؟",
options: [
"کوروش بزرگ",
"داریوش سوم",
"خشایارشا",
"اردشیر بابکان"
],
answer: 0
},

{
id: 3,
category: "history",
difficulty: "medium",
question: "تخت جمشید در دوره کدام دودمان ساخته و گسترش یافت؟",
options: [
"هخامنشیان",
"اشکانیان",
"ساسانیان",
"صفویان"
],
answer: 0
},

{
id: 4,
category: "history",
difficulty: "medium",
question: "داریوش بزرگ از پادشاهان کدام دودمان بود؟",
options: [
"هخامنشی",
"ساسانی",
"اشکانی",
"قاجار"
],
answer: 0
},

{
id: 5,
category: "history",
difficulty: "hard",
question: "پایتخت اداری مهم هخامنشیان که در کتیبه‌های تخت جمشید نیز اهمیت دارد کدام بود؟",
options: [
"شوش",
"رم",
"آتن",
"اسکندریه"
],
answer: 0
},

/* =========================
🌍 کشورها
========================= */

{
id: 6,
category: "countries",
difficulty: "easy",
question: "پایتخت ایران کدام شهر است؟",
options: [
"تهران",
"تبریز",
"اصفهان",
"شیراز"
],
answer: 0
},

{
id: 7,
category: "countries",
difficulty: "easy",
question: "پایتخت فرانسه کدام است؟",
options: [
"پاریس",
"رم",
"مادرید",
"برلین"
],
answer: 0
},

{
id: 8,
category: "countries",
difficulty: "easy",
question: "ژاپن در کدام قاره قرار دارد؟",
options: [
"آسیا",
"اروپا",
"آفریقا",
"آمریکای جنوبی"
],
answer: 0
},

{
id: 9,
category: "countries",
difficulty: "medium",
question: "پایتخت استرالیا کدام شهر است؟",
options: [
"کانبرا",
"سیدنی",
"ملبورن",
"پرت"
],
answer: 0
},

{
id: 10,
category: "countries",
difficulty: "medium",
question: "کدام کشور به شکل یک چکمه معروف است؟",
options: [
"ایتالیا",
"اسپانیا",
"یونان",
"پرتغال"
],
answer: 0
},

/* =========================
🏙️ شهرها
========================= */

{
id: 11,
category: "cities",
difficulty: "easy",
question: "برج ایفل در کدام شهر قرار دارد؟",
options: [
"پاریس",
"لندن",
"رم",
"برلین"
],
answer: 0
},

{
id: 12,
category: "cities",
difficulty: "easy",
question: "کدام شهر به عنوان پایتخت ایتالیا شناخته می‌شود؟",
options: [
"رم",
"میلان",
"ونیز",
"ناپل"
],
answer: 0
},

{
id: 13,
category: "cities",
difficulty: "medium",
question: "استانبول در کدام کشور قرار دارد؟",
options: [
"ترکیه",
"یونان",
"بلغارستان",
"گرجستان"
],
answer: 0
},

{
id: 14,
category: "cities",
difficulty: "medium",
question: "کدام شهر به «شهر کانال‌ها» مشهور است؟",
options: [
"ونیز",
"پاریس",
"لندن",
"مادرید"
],
answer: 0
},

{
id: 15,
category: "cities",
difficulty: "hard",
question: "کدام شهر بزرگ‌ترین شهر ژاپن و پایتخت آن است؟",
options: [
"توکیو",
"کیوتو",
"اوساکا",
"هیروشیما"
],
answer: 0
},

/* =========================
⚽ فوتبال
========================= */

{
id: 16,
category: "football",
difficulty: "easy",
question: "هر تیم فوتبال در شروع مسابقه چند بازیکن در زمین دارد؟",
options: [
"11",
"9",
"10",
"12"
],
answer: 0
},

{
id: 17,
category: "football",
difficulty: "easy",
question: "جام جهانی فوتبال توسط کدام سازمان برگزار می‌شود؟",
options: [
"FIFA",
"UEFA",
"AFC",
"IOC"
],
answer: 0
},

{
id: 18,
category: "football",
difficulty: "medium",
question: "فوتبال در کدام ورزشگاه برگزار نمی‌شود؟",
options: [
"زمین کریکت",
"استادیوم فوتبال",
"ورزشگاه",
"زمین فوتبال"
],
answer: 0
},

{
id: 19,
category: "football",
difficulty: "medium",
question: "کدام کارت باعث اخراج بازیکن می‌شود؟",
options: [
"قرمز",
"زرد",
"سبز",
"آبی"
],
answer: 0
},

{
id: 20,
category: "football",
difficulty: "hard",
question: "مدت زمان معمول یک مسابقه فوتبال بدون وقت اضافه چند دقیقه است؟",
options: [
"90 دقیقه",
"80 دقیقه",
"100 دقیقه",
"120 دقیقه"
],
answer: 0
},

/* =========================
🧪 علم
========================= */

{
id: 21,
category: "science",
difficulty: "easy",
question: "آب در شرایط استاندارد در چند درجه سانتی‌گراد یخ می‌زند؟",
options: [
"0",
"10",
"50",
"100"
],
answer: 0
},

{
id: 22,
category: "science",
difficulty: "easy",
question: "کدام سیاره به سیاره سرخ معروف است؟",
options: [
"مریخ",
"زهره",
"مشتری",
"عطارد"
],
answer: 0
},

{
id: 23,
category: "science",
difficulty: "medium",
question: "بزرگ‌ترین سیاره منظومه شمسی کدام است؟",
options: [
"مشتری",
"زحل",
"زمین",
"نپتون"
],
answer: 0
},

{
id: 24,
category: "science",
difficulty: "medium",
question: "گیاهان بیشتر برای فتوسنتز از کدام گاز استفاده می‌کنند؟",
options: [
"دی‌اکسید کربن",
"اکسیژن",
"هیدروژن",
"نیتروژن"
],
answer: 0
},

{
id: 25,
category: "science",
difficulty: "hard",
question: "واحد اندازه‌گیری نیروی فیزیکی چیست؟",
options: [
"نیوتن",
"وات",
"ژول",
"پاسکال"
],
answer: 0
},

/* =========================
💻 تکنولوژی
========================= */

{
id: 26,
category: "technology",
difficulty: "easy",
question: "CPU در کامپیوتر چه نقشی دارد؟",
options: [
"پردازش اطلاعات",
"پخش صدا",
"نمایش تصویر",
"ذخیره دائمی فایل‌ها"
],
answer: 0
},

{
id: 27,
category: "technology",
difficulty: "easy",
question: "HTML بیشتر برای چه کاری استفاده می‌شود؟",
options: [
"ساختار صفحات وب",
"ویرایش عکس",
"ساخت موسیقی",
"مدیریت فایل‌های صوتی"
],
answer: 0
},

{
id: 28,
category: "technology",
difficulty: "medium",
question: "کدام مورد یک سیستم‌عامل موبایل است؟",
options: [
"Android",
"HTML",
"CSS",
"JPEG"
],
answer: 0
},

{
id: 29,
category: "technology",
difficulty: "medium",
question: "JavaScript بیشتر در چه زمینه‌ای کاربرد دارد؟",
options: [
"برنامه‌نویسی و تعامل در وب",
"فقط ویرایش عکس",
"فقط طراحی سه‌بعدی",
"فقط ساخت موسیقی"
],
answer: 0
},

{
id: 30,
category: "technology",
difficulty: "hard",
question: "کدام گزینه یک زبان برنامه‌نویسی است؟",
options: [
"Python",
"HTML",
"JPEG",
"PNG"
],
answer: 0
},

/* =========================
🐾 حیوانات
========================= */

{
id: 31,
category: "animals",
difficulty: "easy",
question: "بزرگ‌ترین حیوان خشکی کدام است؟",
options: [
"فیل آفریقایی",
"زرافه",
"کرگدن",
"اسب"
],
answer: 0
},

{
id: 32,
category: "animals",
difficulty: "easy",
question: "کدام حیوان به سلطان جنگل معروف است؟",
options: [
"شیر",
"ببر",
"گرگ",
"پلنگ"
],
answer: 0
},

{
id: 33,
category: "animals",
difficulty: "medium",
question: "کدام پرنده نمی‌تواند پرواز کند؟",
options: [
"شترمرغ",
"عقاب",
"شاهین",
"کبوتر"
],
answer: 0
},

{
id: 34,
category: "animals",
difficulty: "medium",
question: "کدام جانور پستاندار دریایی است؟",
options: [
"دلفین",
"کوسه",
"اختاپوس",
"ماهی تن"
],
answer: 0
},

{
id: 35,
category: "animals",
difficulty: "hard",
question: "کدام جانور سریع‌ترین حیوان خشکی شناخته می‌شود؟",
options: [
"یوزپلنگ",
"شیر",
"اسب",
"گرگ"
],
answer: 0
},

/* =========================
🧠 هوش و منطق
========================= */

{
id: 36,
category: "logic",
difficulty: "easy",
question: "اگر 2 + 3 = 5 باشد، 5 + 5 چند می‌شود؟",
options: [
"10",
"8",
"12",
"15"
],
answer: 0
},

{
id: 37,
category: "logic",
difficulty: "easy",
question: "عدد بعدی چیست؟ 2، 4، 6، 8، ؟",
options: [
"10",
"9",
"11",
"12"
],
answer: 0
},

{
id: 38,
category: "logic",
difficulty: "medium",
question: "اگر همه گربه‌ها حیوان باشند، آیا همه حیوانات گربه هستند؟",
options: [
"خیر",
"بله",
"همیشه",
"فقط بعضی روزها"
],
answer: 0
},

{
id: 39,
category: "logic",
difficulty: "medium",
question: "عدد بعدی چیست؟ 1، 3، 5، 7، ؟",
options: [
"9",
"8",
"10",
"11"
],
answer: 0
},

{
id: 40,
category: "logic",
difficulty: "hard",
question: "اگر امروز دوشنبه باشد، سه روز بعد چه روزی است؟",
options: [
"پنجشنبه",
"جمعه",
"چهارشنبه",
"شنبه"
],
answer: 0
}

];
