import styles from './Lifestyle.module.scss';

export default function Lifestyle() {
  return (
    <section className={styles.lifestyle} id="lifestyle">

      {/* Coluna esquerda — foto de pessoas */}
      <div className={styles.lifestyle__imageCol}>
        {/*
         * 📸 IMAGEM ESPERADA: lifestyle-pessoas.jpg
         * Descrição: Casal ou grupo de amigos (2-3 pessoas) em clima descontraído,
         * segurando taças de vinho tinto, sorrindo ou conversando animadamente.
         * Ambiente: mesa posta com velas, varanda ao entardecer, ou adega aconchegante.
         * Tom: luz quente dourada, cores profundas. Estilo lifestyle de luxo acessível.
         * Orientação: paisagem ou retrato — deve preencher metade da tela.
         * Salvar em: src/assets/images/lifestyle-pessoas.jpg
         */}
        <div
          className={styles.lifestyle__img}
          data-label="📸 src/assets/images/lifestyle-pessoas.jpg — Casal/amigos com taças de vinho, ambiente aconchegante, luz dourada"
        />
        <div className={styles.lifestyle__imgOverlay} aria-hidden="true" />
      </div>

      {/* Coluna direita — texto */}
      <div className={styles.lifestyle__body}>
        <span className="eyebrow">O Estilo de Vida Wine4Friends</span>

        <h2 className={styles.lifestyle__title}>
          Vinho é mais que uma bebida.<br />
          <em>É conexão.</em>
        </h2>

        <div className={styles.lifestyle__separator} aria-hidden="true" />

        <p className={styles.lifestyle__text}>
          Cada garrafa carregada pela Wine4Friends foi escolhida a dedo — de vinhedos
          premiados da Argentina, Portugal, Itália e além. Quando você se torna
          embaixador, não está apenas vendendo vinho: está compartilhando
          <strong> momentos únicos</strong> que ficam na memória.
        </p>

        <p className={styles.lifestyle__text}>
          Nosso portfólio exclusivo chega com <strong>fichas técnicas, sugestões de
          harmonização</strong> e todo o conhecimento de duas décadas do Grupo Uaine —
          para que você indique com confiança e seus clientes voltem sempre.
        </p>

        <ul className={styles.lifestyle__list}>
          <li className={styles.lifestyle__listItem}>
            <span className={styles.lifestyle__listDot} aria-hidden="true" />
            Rótulos premiados impossíveis de encontrar no supermercado
          </li>
          <li className={styles.lifestyle__listItem}>
            <span className={styles.lifestyle__listDot} aria-hidden="true" />
            Histórias de origem e certificados de qualidade para cada vinho
          </li>
          <li className={styles.lifestyle__listItem}>
            <span className={styles.lifestyle__listDot} aria-hidden="true" />
            Material de marketing pronto para suas redes sociais
          </li>
        </ul>
      </div>

    </section>
  );
}
