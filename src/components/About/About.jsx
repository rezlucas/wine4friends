import styles from './About.module.scss';

const PILLARS = [
  { icon: '🍇', label: 'Importação Própria', desc: 'Controle total da origem à taça' },
  { icon: '🏆', label: 'Rótulos Premiados',  desc: 'Portfólio exclusivo e selecionado' },
  { icon: '📍', label: 'Espírito Santo',      desc: 'Nascidos e expandidos no ES' },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="sobre">
      <div className="container">
        <div className={styles.about__grid}>

          {/* Visual — foto de pessoas + badge */}
          <div className={styles.about__imageWrap}>
            {/*
             * 📸 IMAGEM ESPERADA: sobre-pessoas.jpg
             * Descrição: Grupo de amigos (3-4 pessoas) brindando com taças de vinho tinto,
             * ambiente íntimo e aconchegante — sala, varanda ou restaurante.
             * Tom de cor quente, luz suave. Rostos sorridentes, energia descontraída.
             * Referência: imagem 2 enviada (pessoas juntas, vibe lifestyle).
             * Orientação: retrato (vertical), proporção 4:5.
             * Salvar em: src/assets/images/sobre-pessoas.jpg
             */}
            <div
              className={styles.about__imgPlaceholder}
              data-label="📸 src/assets/images/sobre-pessoas.jpg — Amigos brindando com vinhos, ambiente aconchegante, luz quente"
            />

            <div className={styles.about__badge}>
              <strong>+20</strong>
              <span>Anos de<br />Excelência</span>
            </div>
          </div>

          {/* Texto */}
          <div className={styles.about__body}>
            <span className="eyebrow">Quem Somos</span>

            <h2 className={styles.about__title}>
              Uma nova marca para<br />
              <em>brindar à vida</em>
            </h2>

            <div className={styles.about__separator} aria-hidden="true" />

            <p className={styles.about__text}>
              A <strong>Wine4Friends</strong> é uma marca do <strong>Grupo Uaine</strong> — o maior grupo
              enogastronômico do Espírito Santo, com mais de duas décadas de atuação no mercado
              de vinhos e operação em vários estados do Brasil.
            </p>

            <p className={styles.about__text}>
              Nascemos para conectar pessoas ao universo do vinho com segurança, credibilidade e
              excelência. Nossa importação própria garante controle total de qualidade, do vinhedo
              à sua taça — com rótulos exclusivos que você não encontra no supermercado.
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
