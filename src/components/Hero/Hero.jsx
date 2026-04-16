import styles from './Hero.module.scss';

const STATS = [
  { value: '+20',     label: 'Anos de Mercado' },
  { value: 'Até 15%', label: 'de Comissão' },
  { value: '50+',     label: 'Rótulos Disponíveis' },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Camadas de fundo */}
      <div className={styles.hero__bg} aria-hidden="true" />
      <div className={styles.hero__glow} aria-hidden="true" />

      {/* Texto gigante de fundo */}
      <span className={styles.hero__bgText} aria-hidden="true">WINE</span>

      {/* Grid principal */}
      <div className={`container ${styles.hero__container}`}>

        {/* Coluna esquerda — foto de vinho (blends into bg) */}
        <div className={styles.hero__imageCol}>
          <div className={styles.hero__imgPlaceholder} />
        </div>

        {/* Coluna direita — conteúdo */}
        <div className={styles.hero__content}>
          <div className={styles.hero__eyebrowWrap}>
            <span className={styles.hero__eyebrow}>Uma marca Uaine Group · Pré-Lançamento</span>
          </div>

          <h1 className={styles.hero__title}>
            Beber vinho sempre foi um prazer.<br />
            Agora também pode ser{' '}
            <em className={styles.hero__titleAccent}>seu negócio!</em>
          </h1>

          <p className={styles.hero__description}>
            O Wine4Friends transforma momentos entre amigos em uma fonte de renda.
            Seu bom gosto por vinhos agora vale dinheiro.
          </p>

          <div className={styles.hero__actions}>
            <a href="#contato" className="btn btn--primary">
              Quero Ser um Friend
            </a>
          </div>
        </div>
      </div>

      {/* Big numbers strip */}
      <div className={styles.hero__stats} aria-label="Números do programa">
        {STATS.map(({ value, label }, i) => (
          <div key={value} className={styles.hero__statGroup}>
            {i > 0 && <span className={styles.hero__statDivider} aria-hidden="true" />}
            <div className={styles.hero__statItem}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className={styles.hero__marqueeWrap} aria-hidden="true">
        <div className={styles.hero__marqueeTrack}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className={styles.hero__marqueeGroup}>
              <span>Wine4Friends</span>
              <span className={styles.hero__marqueeDot}>◆</span>
              <span>Programa de Embaixadores</span>
              <span className={styles.hero__marqueeDot}>◆</span>
              <span>Grupo Uaine</span>
              <span className={styles.hero__marqueeDot}>◆</span>
              <span>Importação Própria</span>
              <span className={styles.hero__marqueeDot}>◆</span>
              <span>+20 Anos de Excelência</span>
              <span className={styles.hero__marqueeDot}>◆</span>
              <span>Entrega em Todo Brasil</span>
              <span className={styles.hero__marqueeDot}>◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
