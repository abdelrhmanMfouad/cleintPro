import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section">
      <span className="hero-badge">نظام إدارة العملاء</span>

      <h1 className="hero-title">
        أدِر عملاءك <span>باحترافية</span>
      </h1>

      <p className="hero-desc">
        سجّل بيانات عملائك، تابعهم، واعرض تقاريرك بشكل فوري وأنيق.
      </p>

      <div className="hero-btns">
        <Link to="/clients" className="hero-btn-primary">ابدأ الآن ←</Link>
        <Link to="/about" className="hero-btn-secondary">عن النظام</Link>
      </div>
    </section>
  );
}