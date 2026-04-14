import { useState } from 'react';
import styles from './Benefits.module.scss';
import lifestyleImg from '../../assets/images/lifestyle-pessoas.webp';

const BENEFITS = [
  {
    id: 1,
    num: '01',
    category: 'Autoridade',
    title: 'Importação Própria',
    description:
      'Portfólio premiado, curado por especialistas com mais de duas décadas no setor. Controle total da qualidade, da origem à taça.',
  },
  {
    id: 2,
    num: '02',
    category: 'Liberdade',
    title: 'Zero Investimento Inicial',
    description:
      'Comece hoje sem precisar investir. Sem estoque, sem risco financeiro. Você se relaciona — nós cuidamos de todo o resto.',
  },
  {
    id: 3,
    num: '03',
    category: 'Tecnologia',
    title: 'Plataforma Completa',
    description:
      'Dashboard para montar kits, gerar links personalizados, acompanhar vendas, comissões e indicações em tempo real.',
  },
  {
    id: 4,
    num: '04',
    category: 'Suporte',
    title: 'Sommeliers Dedicados',
    description:
      'Canal de apoio exclusivo. Fichas de harmonização, consultoria de venda e conteúdo técnico prontos para usar com seus clientes.',
  },
  {
    id: 5,
    num: '05',
    category: 'Exclusividade',
    title: 'Rótulos Selecionados',
    description:
      'Acesso a vinhos que não estão no supermercado. Fortaleça seu networking e seja reconhecido como referência no seu círculo.',
  },
  {
    id: 6,
    num: '06',
    category: 'Crescimento',
    title: 'Renda Recorrente',
    description:
      'Construa uma base de clientes fiéis. Cada pedido que se repete é comissão automática para você, sem esforço adicional.',
  },
];

const COMMISSIONS = [
  { range: 'Vendas até R$ 5.000',          pct: '12%', featured: false },
  { range: 'De R$ 5.000 a R$ 10.000',      pct: '13%', featured: false },
  { range: 'De R$ 10.000 a R$ 15.000',     pct: '14%', featured: false },
  { range: 'Acima de R$ 15.000',           pct: '15%', featured: true  },
];

const COMMISSION_BULLETS = [
  { icon: '◆', text: 'Parcelamento em até 4x para seus clientes' },
  { icon: '◆', text: 'Renda extra recorrente' },
  { icon: '◆', text: 'Trabalhe de onde estiver' },
];

export default function Benefits() {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className={`section ${styles.benefits}`} id="beneficios">
      <div className="container">

        {/* Header */}
        <div className="section__header text-center">
          <span className="eyebrow">Por que ser um Friend?</span>
          <h2 className="section__title">
            A força do maior grupo<br />
            <em style={{ fontStyle: 'italic' }}>enogastronômico do ES</em>
          </h2>
          <p className="section__subtitle">
            Você não está sozinho. Toda a estrutura do Grupo Uaine trabalha
            para que cada indicação sua vire uma venda confirmada.
          </p>
        </div>

        {/* Accordion com imagem lateral */}
        <div className={styles.benefits__accordion}>

          {/* Itens */}
          <div className={styles.benefits__accordionItems}>
            {BENEFITS.map((item, i) => (
              <div
                key={item.id}
                className={`${styles.benefits__accordionItem} ${openItem === i ? styles['benefits__accordionItem--open'] : ''}`}
              >
                <button
                  className={styles.benefits__accordionHeader}
                  onClick={() => setOpenItem(openItem === i ? -1 : i)}
                  aria-expanded={openItem === i}
                >
                  <span className={styles.benefits__accordionMeta}>
                    {item.num} — {item.category}
                  </span>
                  <span className={styles.benefits__accordionTitle}>{item.title}</span>
                  <span className={styles.benefits__accordionToggle} aria-hidden="true">
                    {openItem === i ? '−' : '+'}
                  </span>
                </button>

                <div className={styles.benefits__accordionBody}>
                  <div className={styles.benefits__accordionBodyInner}>
                    <p className={styles.benefits__accordionDesc}>{item.description}</p>
                    <a href="#contato" className={styles.benefits__accordionCta}>
                      Quero fazer parte →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Imagem lateral */}
          <div className={styles.benefits__accordionImage}>
            <img src={lifestyleImg} alt="Amigos brindando com vinho" />
          </div>
        </div>

        {/* Comissões progressivas */}
        <div className={styles.benefits__commissions}>
          <div className={styles.benefits__commissionsHeader}>
            <div>
              <span className="eyebrow">Ganhos Progressivos</span>
              <h3 className={styles.benefits__commissionsTitle}>
                Quanto mais você vende,<br />
                <em>mais você ganha.</em>
              </h3>
              <p className={styles.benefits__commissionsNote}>
                Comissões em dinheiro real, não em crédito.<br />
                Receba via PIX ou transferência bancária.
              </p>
            </div>
          </div>

          <div className={styles.benefits__commissionGrid}>
            {COMMISSIONS.map(({ range, pct, featured }) => (
              <div
                key={range}
                className={`${styles.benefits__commissionCard} ${featured ? styles['benefits__commissionCard--featured'] : ''}`}
              >
                {featured && (
                  <span className={styles.benefits__commissionTag}>Mais Popular</span>
                )}
                <span className={styles.benefits__commissionPct}>{pct}</span>
                <span className={styles.benefits__commissionDivider} aria-hidden="true" />
                <span className={styles.benefits__commissionRange}>{range}</span>
              </div>
            ))}
          </div>

          <div className={styles.benefits__commissionBullets}>
            {COMMISSION_BULLETS.map(({ icon, text }) => (
              <span key={text} className={styles.benefits__commissionBullet}>
                <span className={styles.benefits__commissionBulletIcon}>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
