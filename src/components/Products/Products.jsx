import styles from './Products.module.scss';

const STEPS = [
  {
    id: '01',
    title: 'Cadastre-se',
    subtitle: 'Rápido, sem burocracia',
    description:
      'Preencha o formulário e entre para a pré-lista do programa. Aprovação rápida, você já recebe sua vitrine digital personalizada e pronta para vender.',
  },
  {
    id: '02',
    title: 'Comece a Vender',
    subtitle: 'Do jeito que você já faz',
    description:
      'Use seu link exclusivo e compartilhe os rótulos com amigos, família e sua rede. Cada venda indicada por você é rastreada automaticamente.',
  },
  {
    id: '03',
    title: 'Receba em Dinheiro',
    subtitle: 'Quanto mais vende, mais ganha',
    description:
      'Comissões progressivas de 12% a 15% pagas em dinheiro real via PIX ou transferência. Quanto mais você vende, maior o percentual, e mais você ganha.',
  },
];

export default function Products() {
  return (
    <section className={`section section--dark ${styles.products}`} id="como-funciona">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Simples Assim</span>
          <h2 className="section__title">
            Nós operamos.<br />
            <em style={{ fontStyle: 'italic', color: 'inherit' }}>Você se relaciona.</em>
          </h2>
          <p className="section__subtitle">
            Você já indica vinhos para seus amigos. Agora ganhe por isso,
            sem estoque, sem burocracia, sem investimento inicial.
          </p>
        </div>

        <div className={styles.products__grid}>
          {STEPS.map((step) => (
            <article key={step.id} className={styles.products__card}>
              <span className={styles.products__cardNum}>{step.id}</span>
              <div className={styles.products__cardAccent} aria-hidden="true" />
              <h3 className={styles.products__cardTitle}>{step.title}</h3>
              <span className={styles.products__cardSubtitle}>{step.subtitle}</span>
              <p className={styles.products__cardDesc}>{step.description}</p>
            </article>
          ))}
        </div>

        <div className={styles.products__footer}>
          <p className={styles.products__footerNote}>
            Comissões em dinheiro real, não em crédito. Receba via PIX ou transferência bancária.
          </p>
          <a href="#contato" className="btn btn--primary">
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
}
