import { useState } from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";

export default function Main() {
    const [item, setItem] = useState([])
    return (
        <ContainerMain>
            <Produtos
                item={item}
                setItem={setItem}
            />
            <Carrinho
                item={item}
                setItem={setItem}
            />
        </ContainerMain>
    )
}

const ContainerMain = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;