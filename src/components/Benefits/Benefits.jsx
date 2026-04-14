import styles from './Benefits.module.scss';

const BENEFITS = [
  {
    id: 1,
    icon: '🍷',
    title: 'Portfólio Importado e Exclusivo',
    description:
      'Vinhos premiados de todo o mundo, com importação própria do Grupo Uaine. Rótulos que você não encontra no supermercado.',
  },
  {
    id: 2,
    icon: '🖥️',
    title: 'Vitrine Digital Pronta',
    description:
      'E-commerce personalizado com seu nome, pronto para vender desde o primeiro dia. Sem precisar criar nada do zero.',
  },
  {
    id: 3,
    icon: '🎓',
    title: 'Suporte de Sommeliers',
    description:
      'Canal exclusivo com especialistas para apoiar cada venda. Fichas técnicas e dicas de harmonização prontas para compartilhar.',
  },
  {
    id: 4,
    icon: '🚚',
    title: 'Entrega em Todo o Brasil',
    description:
      'Logística especializada em temperatura controlada, com rastreamento e entrega segura para qualquer estado do país.',
  },
  {
    id: 5,
    icon: '💳',
    title: 'Parcelamento para o Cliente',
    description:
      'Seus clientes podem parcelar em até 4x sem juros. Você não se preocupa com cobranças — a Wine4Friends cuida de tudo.',
  },
  {
    id: 6,
    icon: '📍',
    title: 'Trabalho 100% Remoto',
    description:
      'Trabalhe de onde estiver, no seu ritmo. Sem horários fixos, sem chefe, sem investimento inicial. Só você e seu celular.',
  },
];

const COMMISSIONS = [
  { range: 'Até R$\u00a05.000', pct: '12%', featured: false },
  { range: 'R$\u00a05k – R$\u00a010k',  pct: '13%', featured: false },
  { range: 'R$\u00a010k – R$\u00a015k', pct: '14%', featured: false },
  { range: 'Acima de R$\u00a015k',  pct: '15%', featured: true  },
];

export default function Benefits() {
  return (
    <section className={`section ${styles.benefits}`} id="beneficios">
      <div className="container">
        <div className="section__header text-center">
          <span className="eyebrow">Por que ser Embaixador?</span>
          <h2 className="section__title">
            Tudo que você precisa<br />para transformar indicações em renda
          </h2>
          <p className="section__subtitle">
            A Wine4Friends cuida de toda a operação para que você foque no que
            realmente importa: indicar e ganhar.
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className={styles.benefits__grid}>
          {BENEFITS.map((item) => (
            <div key={item.id} className={styles.benefits__card}>
              <div className={styles.benefits__cardIcon} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className={styles.benefits__cardTitle}>{item.title}</h3>
              <p className={styles.benefits__cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Tabela de comissões */}
        <div className={styles.benefits__commissions}>
          <div className={styles.benefits__commissionsHeader}>
            <div>
              <span className="eyebrow">Comissões Progressivas</span>
              <h3 className={styles.benefits__commissionsTitle}>
                Quanto mais você vende,<br />mais você ganha
              </h3>
            </div>
            <p className={styles.benefits__commissionsNote}>
              Comissões calculadas sobre o valor das vendas mensais confirmadas.
              Pagamento via PIX ou transferência bancária.
            </p>
          </div>

          <div className={styles.benefits__commissionGrid}>
            {COMMISSIONS.map(({ range, pct, featured }) => (
              <div
                key={range}
                className={`${styles.benefits__commissionCard} ${featured ? styles['benefits__commissionCard--featured'] : ''}`}
              >
                {featured && (
                  <span className={styles.benefits__commissionTag}>Melhor Taxa</span>
                )}
                <span className={styles.benefits__commissionPct}>{pct}</span>
                <span className={styles.benefits__commissionDivider} aria-hidden="true" />
                <span className={styles.benefits__commissionRange}>{range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
