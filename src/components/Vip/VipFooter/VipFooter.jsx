import styles from './VipFooter.module.scss';
import logoNeg from '../../../assets/logos/wine4friends-logo-negativa.png';

export default function VipFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <img src={logoNeg} alt="Wine4Friends" className={styles.footer__logo} />
          <p className={styles.footer__tagline}>
            Uma empresa do <strong>Grupo Uaine</strong>, o maior grupo enogastronômico do Espírito Santo.
          </p>
          <p className={styles.footer__legal}>
            © {new Date().getFullYear()} Wine4Friends · Todos os direitos reservados.
            A venda e entrega de bebidas alcoólicas é proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
