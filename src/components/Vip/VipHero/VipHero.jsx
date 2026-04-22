import styles from './VipHero.module.scss';
import logo from '../../../assets/logos/wine4friends-logo-negativa.png';

export default function VipHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__bg} aria-hidden="true" />
      <div className={styles.hero__overlay} aria-hidden="true" />

      <div className={`container ${styles.hero__inner}`}>
        <img src={logo} alt="Wine4Friends" className={styles.hero__logo} />

        <div className={styles.hero__badge}>
          <span>Acesso Exclusivo</span>
        </div>

        <h1 className={styles.hero__title}>
          Você foi convidado para o<br />
          <em>Clube VIP Wine4Friends</em>
        </h1>

        <p className={styles.hero__subtitle}>
          Promoções exclusivas, lançamentos antecipados e experiências
          únicas com os melhores vinhos importados do Brasil —
          disponíveis apenas para membros selecionados.
        </p>

        <a href="#entrar" className={`btn btn--primary ${styles.hero__cta}`}>
          Quero Fazer Parte →
        </a>

        <div className={styles.hero__stats}>
          <div className={styles.hero__stat}>
            <strong>+20</strong>
            <span>Anos de Excelência</span>
          </div>
          <div className={styles.hero__statDivider} />
          <div className={styles.hero__stat}>
            <strong>50+</strong>
            <span>Rótulos Exclusivos</span>
          </div>
          <div className={styles.hero__statDivider} />
          <div className={styles.hero__stat}>
            <strong>VIP</strong>
            <span>Acesso Antecipado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
