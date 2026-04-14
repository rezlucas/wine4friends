import styles from './Products.module.scss';

const STEPS = [
  {
    id: '01',
    title: 'Cadastre-se',
    subtitle: 'Gratuito e sem burocracia',
    description:
      'Preencha o formulário e em poucos minutos você já é um Embaixador Wine4Friends. Sem taxa de adesão, sem estoque, sem risco.',
  },
  {
    id: '02',
    title: 'Receba sua Vitrine',
    subtitle: 'E-commerce pronto para vender',
    description:
      'Você recebe uma loja digital personalizada com seu nome, pronta para compartilhar com amigos e contatos nas redes sociais e WhatsApp.',
  },
  {
    id: '03',
    title: 'Indique e Venda',
    subtitle: 'Do jeito que você já faz',
    description:
      'Compartilhe sua vitrine para contatos que já confiam em você. A Wine4Friends cuida de todo o processo: estoque, pagamento e logística.',
  },
  {
    id: '04',
    title: 'Receba sua Comissão',
    subtitle: 'Em PIX ou transferência',
    description:
      'Comissões progressivas de 12% a 15% sobre cada venda confirmada. Quanto mais você vende, maior o percentual que você recebe.',
  },
];

export default function Products() {
  return (
    <section className={`section section--dark ${styles.products}`} id="como-funciona">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Simples do início ao fim</span>
          <h2 className="section__title">
            Como funciona o<br />Programa de Embaixadores
          </h2>
          <p className="section__subtitle">
            Quatro passos para transformar o boca a boca que você já faz
            em uma fonte de renda recorrente.
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

        <div className={styles.products__cta}>
          <a href="#contato" className="btn btn--primary">
            Começar Agora — É Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
