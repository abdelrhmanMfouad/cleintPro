import { useState } from 'react';

const INITIAL_FORM = {
  fullName:   '',
  email:      '',
  phone:      '',
  city:       '',
  company:    '',
  jobTitle:   '',
  clientType: 'individual',
  notes:      '',
};

const COLUMNS = [
  { key: 'fullName',   label: 'الاسم الكامل' },
  { key: 'email',      label: 'البريد' },
  { key: 'phone',      label: 'الهاتف' },
  { key: 'city',       label: 'المدينة' },
  { key: 'company',    label: 'الشركة' },
  { key: 'jobTitle',   label: 'المسمى الوظيفي' },
  { key: 'clientType', label: 'النوع' },
  { key: 'notes',      label: 'ملاحظات' },
];

const INPUT_FIELDS = [
  { name: 'fullName', label: 'الاسم الكامل',      type: 'text',  placeholder: 'مثال: أحمد محمد علي',    required: true  },
  { name: 'email',    label: 'البريد الإلكتروني', type: 'email', placeholder: 'example@email.com',      required: true  },
  { name: 'phone',    label: 'رقم الهاتف',         type: 'tel',   placeholder: '01xxxxxxxxx',            required: true  },
  { name: 'city',     label: 'المدينة',            type: 'text',  placeholder: 'مثال: القاهرة',          required: true  },
  { name: 'company',  label: 'اسم الشركة',         type: 'text',  placeholder: 'اسم الشركة أو المؤسسة', required: false },
  { name: 'jobTitle', label: 'المسمى الوظيفي',     type: 'text',  placeholder: 'مثال: مدير مبيعات',     required: false },
  { name: 'notes',    label: 'ملاحظات إضافية',     type: 'text',  placeholder: 'أي ملاحظات عن العميل',  required: false },
];

function FormInput({ field, value, onChange, error }) {
  return (
    <div className="field-wrap">
      <label className="field-label">
        {field.label}
        {field.required && <span className="field-required">*</span>}
      </label>
      <input
        type={field.type}
        name={field.name}
        value={value}
        onChange={onChange}
        placeholder={field.placeholder}
        required={field.required}
        className="field-input"
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}

export default function ClientForm() {
  const [form, setForm]           = useState(INITIAL_FORM);
  const [clients, setClients]     = useState([]);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'الاسم مطلوب';
    if (!form.email.trim())    newErrors.email    = 'البريد مطلوب';
    if (!form.phone.trim())    newErrors.phone    = 'الهاتف مطلوب';
    if (!form.city.trim())     newErrors.city     = 'المدينة مطلوبة';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setClients(prev => [...prev, { ...form, id: Date.now() }]);
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(true);
  }

  function handleDelete(id) {
    setClients(prev => prev.filter(c => c.id !== id));
  }

  return (
    <div className="form-page">

      <h1 className="form-title">تسجيل <span>عميل جديد</span></h1>
      <p className="form-subtitle">أدخل بيانات العميل ثم اضغط "إضافة" لإظهاره في الجدول.</p>

      {/*..........................................form*/}
      <div className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {INPUT_FIELDS.map(field => (
              <FormInput
                key={field.name}
                field={field}
                value={form[field.name]}
                onChange={handleChange}
                error={errors[field.name]}
              />
            ))}
            <div className="field-wrap">
              <label className="field-label">
                نوع العميل <span className="field-required">*</span>
              </label>
              <select name="clientType" value={form.clientType} onChange={handleChange} className="field-select">
                <option value="individual">فرد</option>
                <option value="company">شركة</option>
                <option value="government">جهة حكومية</option>
              </select>
            </div>
          </div>

          <div className="form-btns">
            <button type="submit" className="btn-primary">＋ إضافة عميل</button>
            <button type="button" className="btn-secondary"
              onClick={() => { setForm(INITIAL_FORM); setErrors({}); }}>
              مسح الحقول
            </button>
          </div>
        </form>
      </div>

      {/*...........................print table*/}
      {clients.length > 0 ? (
        <div>
          <h2 className="table-title">
            جدول العملاء
            <span className="table-badge">{clients.length} عميل</span>
          </h2>
          <div className="table-wrap">
            <table className="clients-table">
              <thead>
                <tr>
                  <th>#</th>
                  {COLUMNS.map(col => <th key={col.key}>{col.label}</th>)}
                  <th>إجراء</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client, idx) => (
                  <tr key={client.id}>
                    <td className="td-muted">{idx + 1}</td>
                    {COLUMNS.map(col => (
                      <td key={col.key}>
                        {col.key === 'clientType' ? (
                          <span className={`type-badge ${client.clientType}`}>
                            {client.clientType === 'individual' ? 'فرد' :
                             client.clientType === 'company'    ? 'شركة' : 'حكومي'}
                          </span>
                        ) : (
                          client[col.key] || <span className="td-muted">—</span>
                        )}
                      </td>
                    ))}
                    <td>
                      <button className="btn-delete" onClick={() => handleDelete(client.id)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : submitted ? (
        <div className="empty-box">
          <p>لا يوجد عملاء حالياً.</p>
        </div>
      ) : (
        <div className="empty-box">
          <p>الجدول سيظهر هنا بعد إضافة أول عميل.</p>
        </div>
      )}
    </div>
  );
}