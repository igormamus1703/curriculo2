import { useTranslation } from 'react-i18next';

const Experiencia = ({ experiencias }) => {
  const { t } = useTranslation();

  return (
    <section>
      <h3>{t('section.experience')}</h3>
      <ul>
        {experiencias.map((item, idx) => (
          <li key={idx}>
            <strong>{item.position}</strong> – {item.company} ({item.period})
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experiencia;