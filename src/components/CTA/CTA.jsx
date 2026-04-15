import { useState } from 'react';
import styles from './CTA.module.scss';
import logo from '../../assets/logos/wine4friends-logo-negativa.png';

// Cole aqui a URL gerada no Google Apps Script após a implantação
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrhMnfehuy_tnkJhHtu3pbObii52iQgg3oWYQunTVRE6sqfVvB92v1PnL3WDSGZ1Kv/exec';

const LIST_ITEMS = [
  'Sem custo para entrar, zero investimento inicial',
  'Comissões em dinheiro via PIX ou transferência',
  'Vitrine digital personalizada e pronta para usar',
  'Suporte de sommeliers para fechar mais vendas',
  'Acesso antecipado ao catálogo exclusivo',
  'Logística especializada em todo o Brasil',
];

const INITIAL = { nome: '', telefone: '', email: '', cidade: '' };

export default function CTA() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setStatus('success');
      setFields(INITIAL);
    } catch {
      setStatus('error');
    }
  };

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

            {/* Lado esquerdo */}
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

              {status === 'success' ? (
                <div className={styles.cta__success}>
                  <span className={styles.cta__successIcon}>✓</span>
                  <strong>Cadastro realizado!</strong>
                  <p>Entraremos em contato em breve pelo WhatsApp ou e-mail informado.</p>
                </div>
              ) : (
                <form className={styles.cta__form} onSubmit={handleSubmit}>
                  <div className={styles.cta__field}>
                    <label className={styles.cta__label}>Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={fields.nome}
                      onChange={handleChange}
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
                      name="telefone"
                      value={fields.telefone}
                      onChange={handleChange}
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
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
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
                      name="cidade"
                      value={fields.cidade}
                      onChange={handleChange}
                      placeholder="Ex: Vitória, ES"
                      className={styles.cta__input}
                      autoComplete="address-level2"
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.cta__errorMsg}>
                      Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                    </p>
                  )}

                  <button
                    type="submit"
                    className={`btn btn--primary ${styles.cta__submit}`}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Enviando...' : 'Garantir Minha Vaga →'}
                  </button>

                  <p className={styles.cta__disclaimer}>
                    Ao se cadastrar você concorda com a política de privacidade.
                    Suas informações são tratadas com total sigilo.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
