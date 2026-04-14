import styles from './Testimonials.module.scss';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ana Paula S.',
    role: 'Embaixadora há 1 ano · Vitória – ES',
    initials: 'AP',
    rating: 5,
    text: 'Comecei sem saber nada de vendas. Em três meses já estava ganhando uma renda extra que faz diferença real no fim do mês. O suporte dos sommeliers é incrível — eles respondem na hora.',
  },
  {
    id: 2,
    name: 'Marcos R.',
    role: 'Embaixador há 8 meses · São Paulo – SP',
    initials: 'MR',
    rating: 5,
    text: 'Sempre amei vinho e indicava para todo mundo sem ganhar nada. Agora transformei isso em renda real sem largar meu emprego. Melhor decisão que tomei esse ano.',
  },
  {
    id: 3,
    name: 'Juliana M.',
    role: 'Embaixadora há 1 ano e meio · Belo Horizonte – MG',
    initials: 'JM',
    rating: 5,
    text: 'A vitrine digital é profissional demais. Meus clientes ficam impressionados com a qualidade dos rótulos. Já ultrapassei os 15% de comissão desde o terceiro mês.',
  },
];

const Stars = ({ count }) => (
  <div className={styles.testimonials__stars} aria-label={`${count} estrelas`}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < count ? styles['testimonials__star--filled'] : styles['testimonials__star--empty']}
      >
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className={`section section--alt ${styles.testimonials}`} id="depoimentos">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Embaixadores que já estão ganhando</span>
          <h2 className="section__title">
            Histórias reais de quem<br />já transformou indicação em renda
          </h2>
        </div>

        <div className={styles.testimonials__grid}>
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.id} className={styles.testimonials__card}>
              <Stars count={item.rating} />

              <p className={styles.testimonials__text}>"{item.text}"</p>

              <footer className={styles.testimonials__author}>
                <div className={styles.testimonials__avatar} aria-hidden="true">
                  {item.initials}
                </div>
                <div>
                  <cite className={styles.testimonials__name}>{item.name}</cite>
                  <span className={styles.testimonials__role}>{item.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
