import styles from './Footer.module.scss';
import logoNeg from '../../assets/logos/wine4friends-logo-negativa.png';

const LINKS = {
  programa: [
    { label: 'Sobre a Wine4Friends', href: '#sobre' },
    { label: 'Como Funciona',        href: '#como-funciona' },
    { label: 'Benefícios',           href: '#beneficios' },
    { label: 'Depoimentos',          href: '#depoimentos' },
  ],
  suporte: [
    { label: 'Seja um Friend',           href: '#contato' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso',           href: '#' },
    { label: 'Fale Conosco',            href: '#contato' },
  ],
};

const SOCIALS = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'Facebook',  href: '#', icon: 'FB' },
  { label: 'WhatsApp',  href: '#', icon: 'WA' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__inner}`}>

        {/* Brand */}
        <div className={styles.footer__brand}>
          <a href="#" className={styles.footer__logo} aria-label="Wine4Friends — Início">
            <img src={logoNeg} alt="Wine4Friends" className={styles.footer__logoImg} />
          </a>
          <p className={styles.footer__tagline}>
            Uma nova marca para brindar à vida. Conectando pessoas ao universo do vinho
            com qualidade, credibilidade e renda real.
          </p>
          <p className={styles.footer__parent}>
            Uma empresa do <strong>Grupo Uaine</strong>, o maior grupo enogastronômico
            do Espírito Santo.
          </p>
          <div className={styles.footer__socials}>
            {SOCIALS.map(({ label, href, icon }) => (
              <a key={label} href={href} className={styles.footer__socialLink} aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className={styles.footer__col}>
          <h4 className={styles.footer__colTitle}>O Programa</h4>
          <ul className={styles.footer__colList}>
            {LINKS.programa.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.footer__colLink}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer__col}>
          <h4 className={styles.footer__colTitle}>Suporte</h4>
          <ul className={styles.footer__colList}>
            {LINKS.suporte.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className={styles.footer__colLink}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className="container">
          <p className={styles.footer__copy}>
            © {new Date().getFullYear()} Wine4Friends · Grupo Uaine. Todos os direitos reservados.
          </p>
          <p className={styles.footer__legal}>
            A venda e entrega de bebidas alcoólicas é proibida para menores de 18 anos.
          </p>
        </div>
      </div>
    </footer>
  );
}
