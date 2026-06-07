const stats = [
  { value: '+500', label: 'عميل مسجّل' },
  { value: '99%',  label: 'رضا المستخدمين' },
  { value: '24/7', label: 'دعم فني' },
  { value: '1min', label: 'وقت الاستجابة' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}