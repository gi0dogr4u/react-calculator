import styled from "styled-components";
import backgroundImage from "./assets/images/background.jpg"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative; // Adiciona posição relativa ao Container

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${backgroundImage}) center/cover;
        opacity: 0.7;
        z-index: -1;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 400px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
`