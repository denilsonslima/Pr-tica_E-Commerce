import styled from "styled-components";
import PRODUTOS from "../listaProdutos";

export default function Produtos({ item, setItem }) {
    return (
        <ContainerLista>
            {PRODUTOS.map((prod) =>
                <Produto
                    key={prod.id}
                    produto={prod}
                    item={item}
                    setItem={setItem}
                />
            )}

        </ContainerLista>
    )
}

function Produto(props) {
    const { item, setItem, produto } = props
    const { imagem, nome, preco } = produto

    function add(produto) {
        const prod = item.some((p) => p.id === produto.id)
        if (!prod) {
            setItem([...item, produto])
        }
    }

    return (
        <ItemProduto>
            <img src={imagem} alt="" />
            <div>
                <span>{nome}</span>
                <span>{preco}</span>
            </div>
            <button onClick={() => {
                add(produto)
            }}>Comprar</button>
        </ItemProduto>
    )
}

const ContainerLista = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ItemProduto = styled.div`
  border: 1px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;

  img {
    width: 200px;
    height: 200px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;