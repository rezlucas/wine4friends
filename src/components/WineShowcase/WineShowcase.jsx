import styles from './WineShowcase.module.scss';
import vitrine1 from '../../assets/images/vitrine-1.webp';
import vitrine2 from '../../assets/images/vitrine-2.webp';
import vitrine3 from '../../assets/images/vritrine-3.webp';

const WINES = [
  {
    id: 1,
    img: vitrine1,
    name: 'Tinto Reserva',
    origin: 'Argentina · Mendoza',
    badge: 'Mais Vendido',
  },
  {
    id: 2,
    img: vitrine2,
    name: 'Gran Reserva',
    origin: 'Portugal · Alentejo',
    badge: 'Exclusivo',
  },
  {
    id: 3,
    img: vitrine3,
    name: 'Branco Seco',
    origin: 'Itália · Toscana',
    badge: 'Novidade',
  },
];

export default function WineShowcase() {
  return (
    <section className={`section ${styles.showcase}`} id="vitrine">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Portfólio Exclusivo</span>
          <h2 className="section__title">
            Vinhos que seus clientes<br />vão querer de volta
          </h2>
          <p className="section__subtitle">
            Rótulos selecionados com importação própria do Grupo Uaine.
            Qualidade garantida do vinhedo à taça.
          </p>
        </div>

        <div className={styles.showcase__grid}>
          {WINES.map(({ id, img, name, origin, badge }) => (
            <div key={id} className={styles.showcase__card}>
              <div
                className={styles.showcase__cardImg}
                style={{ backgroundImage: `url(${img})` }}
              />
              <div className={styles.showcase__cardOverlay} aria-hidden="true" />

              <div className={styles.showcase__cardContent}>
                <span className={styles.showcase__cardBadge}>{badge}</span>
                <div className={styles.showcase__cardInfo}>
                  <strong className={styles.showcase__cardName}>{name}</strong>
                  <span className={styles.showcase__cardOrigin}>{origin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.showcase__footer}>
          <p className={styles.showcase__footerText}>
            +50 rótulos disponíveis no portfólio exclusivo Wine4Friends
          </p>
          <a href="#contato" className="btn btn--ghost">
            Ver Portfólio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
