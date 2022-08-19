import styled from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    text-align: center;
    padding-top: 10px;
    height: auto;
    img {
        width: 24px;
        height: 24px;
        position: relative;
        top: 16px;
        left: 40px;
    }
`

export const Input = styled.input`
    width: 260px;
    height: 56px;
    font-size: 16px;
    padding-left: 60px;
    color: #d0d0d0;
    border: solid 1px #d0d0d0;
    border-radius: 2px;
    ::placeholder {
        color: #d0d0d0;
    }
`