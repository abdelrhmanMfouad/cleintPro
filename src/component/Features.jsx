const features = [
  { title: 'تسجيل العملاء',     desc: 'أضف بيانات عملائك بسهولة من خلال نموذج شامل.' },
  { title: 'جداول فورية',       desc: 'اعرض البيانات في جدول منظم وأنيق.' },
  { title: 'إدارة كاملة',       desc: 'عدّل واحذف البيانات في أي وقت.' },
  { title: 'سرعة في الأداء',    desc: 'تجربة سلسة مبنية على أحدث تقنيات React.' },
  { title: 'متجاوب مع الأجهزة', desc: 'يعمل بشكل مثالي على الحاسوب والجوال.' },
  { title: 'تحديث فوري',        desc: 'أي تغيير يظهر فوراً دون إعادة تحميل.' },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>لماذا <span>ClientPro</span>؟</h2>
        <p>كل الأدوات التي تحتاجها في مكان واحد.</p>
      </div>
      <div className="features-grid">
        {features.map(({ title, desc }) => (
          <div key={title} className="feature-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}