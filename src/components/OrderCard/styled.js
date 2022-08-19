import styled from "styled-components"

export const Card = styled.div`
    height: 120px;
    background-color: #e86e5a;
    display: flex;
    position: absolute;
    bottom: 224.5px;
    @media (max-width: 500px) {
        position: absolute;
        bottom: 58.5px;
    }
    img {
        width: 35px;
        height: 35px;
        padding-top: 45px;
        padding-left: 30px;
        padding-right: 20px;
    }
`

export const TextBox = styled.div`
    height: auto;
    background-color: #e86e5a;
`

export const Titulo = styled.p`
    margin: 0 0 7px 0;
    padding-top: 30px;
    padding-left: 15px;
    color: white;
`

export const Restaurante = styled.p`
    margin: 0 0 7px 0;
    padding-left: 15px;
`

export const SubTotal = styled.p`
    margin: 0 0 7px 0;
    padding-left: 15px;
    font-weight: 500;
`