import { Wine, Award, MapPin } from 'lucide-react';
import styles from './VipAbout.module.scss';

const PILLARS = [
  { icon: Wine,   label: 'Importação Própria',  desc: 'Controle total da origem à taça' },
  { icon: Award,  label: 'Rótulos Premiados',   desc: 'Portfólio exclusivo e selecionado' },
  { icon: MapPin, label: 'Espírito Santo',       desc: 'Nascidos e expandidos no ES' },
];

export default function VipAbout() {
  return (
    <section className={`section ${styles.about}`} id="sobre">
      <div className="container">
        <div className={styles.about__grid}>

          <div className={styles.about__imageWrap}>
            <div className={styles.about__img} />
            <div className={styles.about__badge}>
              <strong>+20</strong>
              <span>Anos de<br />Excelência</span>
            </div>
          </div>

          <div className={styles.about__body}>
            <span className="eyebrow">Sobre a Wine4Friends</span>

            <h2 className={styles.about__title}>
              O portfólio de vinhos mais<br />
              <em>exclusivo do Brasil</em>
            </h2>

            <p className={styles.about__text}>
              A <strong>Wine4Friends</strong> é uma marca do <strong>Grupo Uaine</strong>, o maior grupo
              enogastronômico do Espírito Santo, com mais de duas décadas de atuação e presença
              em vários estados do Brasil.
            </p>

            <p className={styles.about__text}>
              Nossa curadoria vai direto da origem: vinhedos premiados da Argentina, Portugal,
              Itália, Chile e além. Cada rótulo é selecionado por sommeliers especializados para
              que cada taça seja uma experiência memorável.
            </p>

            <div className={styles.about__pillars}>
              {PILLARS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className={styles.about__pillar}>
                  <span className={styles.about__pillarIcon}>
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <strong className={styles.about__pillarLabel}>{label}</strong>
                    <span className={styles.about__pillarDesc}>{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
