import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta} id="contato">
      <div className={styles.cta__bg} aria-hidden="true" />
      <div className={styles.cta__overlay} aria-hidden="true" />

      <div className={`container ${styles.cta__container}`}>
        <span className="eyebrow">Comece Hoje — É Grátis</span>

        <h2 className={styles.cta__title}>
          Pronto para transformar seu<br />
          amor por vinhos em renda?
        </h2>

        <p className={styles.cta__subtitle}>
          Cadastre-se agora e faça parte do programa de embaixadores da Wine4Friends.
          Sem investimento, sem estoque — só você indicando e ganhando.
        </p>

        {/* Formulário de conversão */}
        <form className={styles.cta__form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.cta__formRow}>
            <input
              type="text"
              placeholder="Seu nome completo"
              className={styles.cta__input}
              autoComplete="name"
              required
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className={styles.cta__input}
              autoComplete="email"
              required
            />
            <input
              type="tel"
              placeholder="WhatsApp com DDD"
              className={styles.cta__input}
              autoComplete="tel"
              required
            />
          </div>
          <button type="submit" className={`btn btn--primary ${styles.cta__submit}`}>
            Quero Ser Embaixador Wine4Friends
          </button>
          <p className={styles.cta__disclaimer}>
            Sem spam. Seus dados estão seguros. Nossa equipe entrará em contato em até 24h.
          </p>
        </form>

        {/* Selos de confiança */}
        <div className={styles.cta__trust}>
          <span className={styles.cta__trustItem}>
            <span>✓</span> Sem investimento inicial
          </span>
          <span className={styles.cta__trustItem}>
            <span>✓</span> Suporte de especialistas
          </span>
          <span className={styles.cta__trustItem}>
            <span>✓</span> Pagamento via PIX
          </span>
        </div>
      </div>
    </section>
  );
}
