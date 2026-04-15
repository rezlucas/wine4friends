import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import logoNeg from '../../assets/logos/wine4friends-logo-negativa.png';

const NAV_LINKS = [
  { label: 'Sobre',         href: '#sobre' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Benefícios',    href: '#beneficios' },
  { label: 'Depoimentos',   href: '#depoimentos' },
  { label: 'Contato',       href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}>
      <div className={`container ${styles.header__inner}`}>

        {/* Logo */}
        <a href="#" className={styles.header__logo} aria-label="Wine4Friends — Início">
          <img
            src={logoNeg}
            alt="Wine4Friends"
            className={styles.header__logoImg}
          />
        </a>

        {/* Nav desktop */}
        <nav className={styles.header__nav} aria-label="Menu principal">
          <ul className={styles.header__navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.header__navLink}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a href="#contato" className={`btn btn--primary ${styles.header__cta}`}>
          Seja um Friend
        </a>

        {/* Hamburger mobile */}
        <button
          className={`${styles.header__hamburger} ${menuOpen ? styles['header__hamburger--open'] : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        className={`${styles.header__drawer} ${menuOpen ? styles['header__drawer--open'] : ''}`}
        aria-label="Menu mobile"
      >
        <ul className={styles.header__drawerList}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.header__drawerLink} onClick={handleNavClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" className={`btn btn--primary ${styles.header__drawerCta}`} onClick={handleNavClick}>
              Seja um Friend
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
