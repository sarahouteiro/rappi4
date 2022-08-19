import styled from "styled-components"

export const CardContainer = styled.div`
    width: 328px;
    height: auto;
    margin-bottom: 20px;
    border: solid 1px #b8b8b8;
    border-radius: 10px;
    img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        width: 328px;
        height: 120px;
    }
`

export const Titulo = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #e86e5a;
    padding-left: 20px;
    margin: 10px 0 0 0;
`

export const Infos = styled.div`
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 328px;
    border-radius: 10px;
    padding-bottom: 15px;
`

export const Tempo = styled.p`
    padding-left: 20px;
    margin: 5px 0 0 0;
    font-size: 16px;
    font-weight: 300;
    color: #b8b8b8;
`

export const Frete = styled.p`
    padding-right: 20px;
    margin: 5px 0 0 0;
    font-size: 16px;
    font-weight: 300;
    color: #b8b8b8;
`