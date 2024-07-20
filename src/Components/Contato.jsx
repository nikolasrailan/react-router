import React from "react";
import styles from "./Contato.module.css";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft `}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>nikolas@email.com</li>
          <li>(41) 99988-7766</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
