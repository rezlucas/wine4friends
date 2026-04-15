import styles from './CTA.module.scss';
import logo from '../../assets/logos/wine4friends-logo-negativa.png';

const LIST_ITEMS = [
  'Sem custo para entrar, zero investimento inicial',
  'Comissões em dinheiro via PIX ou transferência',
  'Vitrine digital personalizada e pronta para usar',
  'Suporte de sommeliers para fechar mais vendas',
  'Acesso antecipado ao catálogo exclusivo',
  'Logística especializada em todo o Brasil',
];

export default function CTA() {
  return (
    <section className={styles.cta} id="contato">

      {/* Banner de citação com imagem de fundo */}
      <div className={styles.cta__quoteBanner}>
        <div className={styles.cta__quoteBg} aria-hidden="true" />
        <div className={styles.cta__quoteOverlay} aria-hidden="true" />
        <div className={styles.cta__quoteContent}>
          <img
            src={logo}
            alt="Wine4Friends"
            className={styles.cta__quoteLogo}
          />
          <blockquote className={styles.cta__quoteText}>
            "Transforme momentos entre amigos<br />em uma fonte de renda."
          </blockquote>
        </div>
      </div>

      {/* Seção do formulário */}
      <div className={styles.cta__formSection}>
        <div className="container">
          <div className={styles.cta__grid}>

            {/* Lado esquerdo — texto e lista */}
            <div className={styles.cta__left}>
              <span className="eyebrow">Pré-Lançamento Exclusivo</span>

              <h2 className={styles.cta__title}>
                Vamos brindar<br />
                ao seu <em>novo negócio?</em>
              </h2>

              <p className={styles.cta__desc}>
                Cadastre-se como Friend e inicie sua jornada.
                As vagas do pré-lançamento são limitadas,
                os primeiros Friends terão condições especiais.
              </p>

              <ul className={styles.cta__list}>
                {LIST_ITEMS.map((item) => (
                  <li key={item} className={styles.cta__listItem}>
                    <span className={styles.cta__listDot} aria-hidden="true">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lado direito — formulário */}
            <div className={styles.cta__formPanel}>
              <div className={styles.cta__formHeader}>
                <span className={styles.cta__formTitle}>Quero ser um Friend</span>
                <span className={styles.cta__formSubtitle}>Pré-Cadastro Exclusivo</span>
              </div>

              <form className={styles.cta__form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.cta__field}>
                  <label className={styles.cta__label}>Nome Completo</label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className={styles.cta__input}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className={styles.cta__field}>
                  <label className={styles.cta__label}>Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="(27) 9 0000-0000"
                    className={styles.cta__input}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className={styles.cta__field}>
                  <label className={styles.cta__label}>E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com.br"
                    className={styles.cta__input}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className={styles.cta__field}>
                  <label className={styles.cta__label}>Cidade onde Reside</label>
                  <input
                    type="text"
                    placeholder="Ex: Vitória, ES"
                    className={styles.cta__input}
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <button type="submit" className={`btn btn--primary ${styles.cta__submit}`}>
                  Garantir Minha Vaga →
                </button>

                <p className={styles.cta__disclaimer}>
                  Ao se cadastrar você concorda com a política de privacidade.
                  Suas informações são tratadas com total sigilo.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
