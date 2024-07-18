import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <div className={styles.produtos + " animeLeft"}>
      <Head title={`Ranek`} description={`Descrição do site ranek`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
