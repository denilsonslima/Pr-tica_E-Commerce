import styled from "styled-components";

export default function Carrinho({item, setItem}) {
    return (
        <ContainerCarrinho>
            {item.map((prod) => 
                <ItensCarrinho
                    key={prod.id}
                    produto={prod}
                    setItem={setItem}
                    item={item}
                />
            )}
        </ContainerCarrinho>
    )
}

function ItensCarrinho(props) {
    const {setItem, produto, item} = props
    const { imagem, nome, preco } = produto


    function remove(prod){
        const novo = item.filter((p) => p.id !== prod.id)
        setItem(novo)
    }
    
    return (
        <ItemCarrinho>
            <img src={imagem} alt="" />
            <div>
                <strong>{nome}</strong>
                <span>{preco}</span>
            </div>
            <button onClick={() => {
                remove(produto)
            }}>X</button>
        </ItemCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;

const ItemCarrinho = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  strong {
    margin-bottom: 5px;
  }
`;