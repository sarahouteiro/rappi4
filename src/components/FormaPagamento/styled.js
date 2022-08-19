import styled from "styled-components"

export const Div = styled.div`
    height: auto;
    padding-left: 20px;
    p {
        margin-bottom: 0;
    }
`

export const Lista = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
    margin-top: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
`

export const Pagamento = styled.div`
    height: auto;
    margin-bottom: 5px;
    input {
        -webkit-appearance: none;
        background-color: white;
        border-radius: 50%;
        border: 1px solid black;
        width: 16px;
        height: 16px;
        margin-right: 5px;
        transition: all 0.2s ease-in-out;
        &:checked {
            background-color: black;
            outline: 2px solid white;
            outline-offset: -3px;
        }
    }
`

export const Button = styled.button`
    background-color: #e86e5a;
    border: none;
    border-radius: 2px;
    width: 328px;
    height: 42px;
    font-size: 16px;
    margin-bottom: 0;
    padding-bottom: 0;
`