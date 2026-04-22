import styles from './VipBenefits.module.scss';

const BENEFITS = [
  { num: '01', label: 'Descontos exclusivos', desc: 'Condições especiais em rótulos selecionados, disponíveis apenas no grupo VIP, com até 20% abaixo do preço de balcão.' },
  { num: '02', label: 'Curadoria semanal', desc: 'Toda semana uma seleção curada pelos nossos sommeliers chega em primeira mão para os membros do clube.' },
  { num: '03', label: 'Pré-venda de lançamentos', desc: 'Antes de qualquer anúncio público, os membros VIP recebem acesso prioritário às novas coleções e safras especiais.' },
  { num: '04', label: 'Harmonizações exclusivas', desc: 'Guias de harmonização, fichas técnicas e sugestões de experiências preparadas pelos especialistas do Grupo Uaine.' },
  { num: '05', label: 'Entregas com prioridade', desc: 'Pedidos de membros VIP têm despacho prioritário e embalagem premium. Seu vinho chega como merece.' },
  { num: '06', label: 'Convites para eventos', desc: 'Degustações, jantares harmonizados e experiências enogastronômicas com vagas reservadas para o clube.' },
];

export default function VipBenefits() {
  return (
    <section className={`section section--dark ${styles.benefits}`} id="beneficios">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Benefícios VIP</span>
          <h2 className="section__title">
            Tudo que um verdadeiro<br />
            <em style={{ fontStyle: 'italic' }}>apreciador merece</em>
          </h2>
        </div>

        <div className={styles.benefits__grid}>
          {BENEFITS.map(({ num, label, desc }) => (
            <div key={num} className={styles.benefits__item}>
              <span className={styles.benefits__num}>{num}</span>
              <div className={styles.benefits__content}>
                <strong className={styles.benefits__label}>{label}</strong>
                <p className={styles.benefits__desc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
