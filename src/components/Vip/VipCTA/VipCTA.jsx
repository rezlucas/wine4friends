import { useState } from 'react';
import styles from './VipCTA.module.scss';
import logo from '../../../assets/logos/wine4friends-logo-negativa.png';
import CityAutocomplete from '../../ui/CityAutocomplete';

// Substitua pela URL do Apps Script do VIP (pode ser a mesma planilha em outra aba)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrhMnfehuy_tnkJhHtu3pbObii52iQgg3oWYQunTVRE6sqfVvB92v1PnL3WDSGZ1Kv/exec';
// Substitua pelo link do grupo VIP do WhatsApp
const WHATSAPP_VIP = 'COLE_O_LINK_DO_GRUPO_VIP';

const INITIAL = { nome: '', telefone: '', email: '', cidade: '' };

export default function VipCTA() {
  const [fields, setFields] = useState(INITIAL);
  const [status, setStatus]  = useState('idle');

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
        body: JSON.stringify({ ...fields, origem: 'VIP' }),
      });
      setStatus('success');
      setFields(INITIAL);
      setTimeout(() => {
        window.open(WHATSAPP_VIP, '_blank', 'noopener,noreferrer');
      }, 1500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className={styles.cta} id="entrar">

      {/* Banner */}
      <div className={styles.cta__banner}>
        <div className={styles.cta__bannerBg} aria-hidden="true" />
        <div className={styles.cta__bannerOverlay} aria-hidden="true" />
        <div className={styles.cta__bannerContent}>
          <img src={logo} alt="Wine4Friends" className={styles.cta__logo} />
          <blockquote className={styles.cta__quote}>
            "Feito para quem sabe apreciar<br />o que há de melhor."
          </blockquote>
        </div>
      </div>

      {/* Formulário */}
      <div className={styles.cta__section}>
        <div className="container">
          <div className={styles.cta__grid}>

            <div className={styles.cta__left}>
              <span className="eyebrow">Grupo VIP Exclusivo</span>

              <h2 className={styles.cta__title}>
                Reserve seu acesso<br />
                <em>ao clube VIP</em>
              </h2>

              <p className={styles.cta__desc}>
                Vagas limitadas. Ao entrar no grupo VIP você recebe
                promoções exclusivas, lançamentos antecipados e
                convites para experiências únicas com vinhos importados.
              </p>

              <ul className={styles.cta__list}>
                {[
                  'Promoções exclusivas para membros',
                  'Lançamentos antes do público geral',
                  'Curadoria semanal dos sommeliers',
                  'Convites para degustações e eventos',
                  'Entrega prioritária com embalagem premium',
                ].map((item) => (
                  <li key={item} className={styles.cta__listItem}>
                    <span className={styles.cta__listDot} aria-hidden="true">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cta__panel}>
              <div className={styles.cta__panelHeader}>
                <span className={styles.cta__panelTitle}>Quero entrar no grupo VIP</span>
                <span className={styles.cta__panelSub}>Acesso Exclusivo · Vagas Limitadas</span>
              </div>

              {status === 'success' ? (
                <div className={styles.cta__success}>
                  <span className={styles.cta__successIcon}>✓</span>
                  <strong>Bem-vindo ao clube!</strong>
                  <p>Redirecionando para o grupo VIP do WhatsApp...</p>
                  <a
                    href={WHATSAPP_VIP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn--primary ${styles.cta__whatsappBtn}`}
                  >
                    Entrar no Grupo VIP →
                  </a>
                </div>
              ) : (
                <form className={styles.cta__form} onSubmit={handleSubmit}>
                  <div className={styles.cta__field}>
                    <label className={styles.cta__label}>Nome Completo</label>
                    <input type="text" name="nome" value={fields.nome} onChange={handleChange}
                      placeholder="Seu nome" className={styles.cta__input} autoComplete="name" required />
                  </div>

                  <div className={styles.cta__field}>
                    <label className={styles.cta__label}>Telefone / WhatsApp</label>
                    <input type="tel" name="telefone" value={fields.telefone} onChange={handleChange}
                      placeholder="(27) 9 0000-0000" className={styles.cta__input} autoComplete="tel" required />
                  </div>

                  <div className={styles.cta__field}>
                    <label className={styles.cta__label}>E-mail</label>
                    <input type="email" name="email" value={fields.email} onChange={handleChange}
                      placeholder="seu@email.com.br" className={styles.cta__input} autoComplete="email" required />
                  </div>

                  <div className={styles.cta__field}>
                    <label className={styles.cta__label}>Cidade onde Reside</label>
                    <CityAutocomplete
                      value={fields.cidade}
                      onChange={(val) => setFields((prev) => ({ ...prev, cidade: val }))}
                      placeholder="Digite sua cidade..."
                      className={styles.cta__input}
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <p className={styles.cta__error}>
                      Erro ao enviar. Tente novamente.
                    </p>
                  )}

                  <button type="submit" className={`btn btn--primary ${styles.cta__submit}`}
                    disabled={status === 'loading'}>
                    {status === 'loading' ? 'Enviando...' : 'Garantir Meu Acesso VIP →'}
                  </button>

                  <p className={styles.cta__disclaimer}>
                    Suas informações são tratadas com total sigilo e privacidade.
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
