import { Gem, Crown, Sparkles, Trophy } from 'lucide-react';
import styles from './VipWhyJoin.module.scss';

const REASONS = [
  {
    icon: Gem,
    title: 'Vinhos que não chegam ao supermercado',
    desc: 'Acesso a rótulos importados exclusivos, curados pelos sommeliers do Grupo Uaine, vinhos que seus amigos nunca encontraram antes.',
  },
  {
    icon: Crown,
    title: 'Promoções apenas para membros VIP',
    desc: 'Descontos e condições especiais disponíveis somente para quem faz parte do grupo. Ofertas que não aparecem em nenhum outro canal.',
  },
  {
    icon: Sparkles,
    title: 'Lançamentos antes de todo mundo',
    desc: 'Seja o primeiro a conhecer novos rótulos e coleções sazonais. Pré-venda exclusiva antes de qualquer divulgação ao público geral.',
  },
  {
    icon: Trophy,
    title: 'Experiências e degustações exclusivas',
    desc: 'Convites para eventos, degustações presenciais e experiências enogastronômicas com acesso reservado aos membros do clube.',
  },
];

export default function VipWhyJoin() {
  return (
    <section className={`section ${styles.why}`} id="por-que">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Por que participar</span>
          <h2 className="section__title">
            Um universo de vinho<br />
            <em style={{ fontStyle: 'italic', color: 'inherit' }}>reservado para você</em>
          </h2>
          <p className="section__subtitle">
            O Clube VIP Wine4Friends foi criado para quem aprecia vinhos de verdade
            e merece acesso privilegiado ao melhor portfólio importado do Brasil.
          </p>
        </div>

        <div className={styles.why__grid}>
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.why__card}>
              <div className={styles.why__cardIcon}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className={styles.why__cardTitle}>{title}</h3>
              <p className={styles.why__cardDesc}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href="#entrar" className="btn btn--primary">
            Quero Fazer Parte →
          </a>
        </div>
      </div>
    </section>
  );
}
