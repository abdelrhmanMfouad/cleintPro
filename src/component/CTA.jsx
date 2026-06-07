import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>جاهز تبدأ؟</h2>
        <p>سجّل أول عميل الآن واستمتع بتجربة إدارة احترافية.</p>
        <Link to="/clients" className="cta-btn">سجّل عميل جديد</Link>
      </div>
    </section>
  );
}