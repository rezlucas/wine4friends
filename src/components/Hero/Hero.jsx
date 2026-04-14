import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.hero__bg} aria-hidden="true" />
      <div className={styles.hero__overlay} aria-hidden="true" />

      <div className={`container ${styles.hero__container}`}>

        {/* Coluna esquerda — texto */}
        <div className={styles.hero__content}>
          <div className={styles.hero__eyebrowWrap}>
            <span className={styles.hero__eyebrowLine} aria-hidden="true" />
            <span className={styles.hero__eyebrow}>Programa de Embaixadores</span>
          </div>

          <h1 className={styles.hero__title}>
            Transforme seu amor<br />
            por vinhos em{' '}
            <em className={styles.hero__titleAccent}>renda real</em>
          </h1>

          <p className={styles.hero__description}>
            Você já indica vinhos para amigos. Agora pode ganhar por isso — com o portfólio
            importado e exclusivo da Wine4Friends, sustentado por mais de duas décadas de
            excelência enogastronômica do Grupo Uaine.
          </p>

          <div className={styles.hero__actions}>
            <a href="#contato" className="btn btn--primary">
              Quero Ser Embaixador
            </a>
            <a href="#como-funciona" className="btn btn--ghost">
              Como Funciona
            </a>
          </div>

          {/* Social proof */}
          <div className={styles.hero__proof}>
            <div className={styles.hero__proofItem}>
              <strong>+20</strong>
              <span>Anos no Mercado</span>
            </div>
            <div className={styles.hero__proofDivider} aria-hidden="true" />
            <div className={styles.hero__proofItem}>
              <strong>Até 15%</strong>
              <span>de Comissão</span>
            </div>
            <div className={styles.hero__proofDivider} aria-hidden="true" />
            <div className={styles.hero__proofItem}>
              <strong>Todo Brasil</strong>
              <span>Entrega Inclusa</span>
            </div>
          </div>
        </div>

        {/* Coluna direita — foto de vinho */}
        <div className={styles.hero__imageCol}>
          {/*
           * 📸 IMAGEM ESPERADA: hero-vinho.jpg
           * Descrição: Taça de vinho tinto sendo generosamente servida, close-up dramático.
           * Fundo muito escuro (quase preto). Reflexos avermelhados no líquido.
           * Orientação: retrato (vertical). Estilo: Editorial de luxo.
           * Referência: imagem 1 enviada (copo grande, dark background, red liquid splash).
           * Salvar em: src/assets/images/hero-vinho.jpg
           */}
          <div
            className={styles.hero__imgPlaceholder}
            data-label="📸 src/assets/images/hero-vinho.jpg — Taça de vinho tinto sendo servida, close-up dramático, fundo escuro"
          />

          {/* Badge flutuante */}
          <div className={styles.hero__imgBadge}>
            <span className={styles.hero__imgBadgeNum}>R$0</span>
            <span className={styles.hero__imgBadgeLabel}>para começar</span>
          </div>
        </div>
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

      {/* Scroll indicator */}
      <div className={styles.hero__scroll} aria-hidden="true">
        <div className={styles.hero__scrollLine} />
      </div>
    </section>
  );
}
