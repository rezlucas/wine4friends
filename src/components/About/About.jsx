import styles from './About.module.scss';

const PILLARS = [
  { icon: '🍇', label: 'Importação Própria',  desc: 'Controle total da origem à taça' },
  { icon: '🏆', label: 'Rótulos Premiados',   desc: 'Portfólio exclusivo e selecionado' },
  { icon: '📍', label: 'Espírito Santo',       desc: 'Nascidos e expandidos no ES' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="sobre">
      <div className="container">
        <div className={styles.about__grid}>

          {/* Visual — foto de pessoas + badge */}
          <div className={styles.about__imageWrap}>
            <div className={styles.about__imgPlaceholder} />

            <div className={styles.about__badge}>
              <strong>+20</strong>
              <span>Anos de<br />Excelência</span>
            </div>
          </div>

          {/* Texto */}
          <div className={styles.about__body}>
            <span className="eyebrow">Quem Somos</span>

            <h2 className={styles.about__title}>
              Aqui você não recomenda<br />
              vinho de supermercado.<br />
              <em>Você apresenta a exclusividade!</em>
            </h2>

            <div className={styles.about__separator} aria-hidden="true" />

            <p className={styles.about__text}>
              A sua influência já define escolhas de vinhos que seus amigos compram.
              Transformamos essa autoridade que você tem em dinheiro.
            </p>

            <p className={styles.about__text}>
              A <strong>Wine4Friends</strong> é uma marca do <strong>Grupo Uaine</strong> — o maior grupo
              enogastronômico do Espírito Santo, com mais de duas décadas de atuação e operação
              em vários estados do Brasil. Acesso direto a um portfólio importado e premiado,
              curado por quem entende do assunto.
            </p>

            {/* Pilares */}
            <div className={styles.about__pillars}>
              {PILLARS.map(({ icon, label, desc }) => (
                <div key={label} className={styles.about__pillar}>
                  <span className={styles.about__pillarIcon}>{icon}</span>
                  <div>
                    <strong className={styles.about__pillarLabel}>{label}</strong>
                    <span className={styles.about__pillarDesc}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn btn--primary">
              Quero Ser Embaixador
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
