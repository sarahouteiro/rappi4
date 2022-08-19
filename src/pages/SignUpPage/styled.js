import styled from "styled-components"

export const Back = styled.img`
    margin-top: 15px;
    margin-left: 16px;
    margin-bottom: 10px;
    width: 23px;
    height: auto;
`

export const SignUpContainer = styled.div`
    border-top: solid 1px #d0d0d0;
    text-align: center;
    img {
        margin-top: 20px;
        width: 104px;
        height: 58px;
    }
    p {
        margin-top: 30px;
    }
`

export const DivInput = styled.div`
    margin-bottom: 20px;
    height: auto;
`

export const Label = styled.label`
    color: #b8b8b8;
    font-size: 12px;
    background-color: white;
    padding: 2px;
    padding-right: 50px;
    margin-left: 12px;
    margin-top: -8px;
    position: absolute;
`

export const Input = styled.input`
    width: 328px;
    height: 56px;
    border: solid 1px #b8b8b8;
    border-radius: 2px;
    padding-left: 20px;
    font-size: 16px;
    color: #d0d0d0;
    ::placeholder {
        color: #d0d0d0;
    }
`

export const Button = styled.button`
    background-color: #e86e5a;
    border: none;
    border-radius: 2px;
    width: 350px;
    height: 42px;
    font-size: 16px;
    padding: 15px 0 30px 0;
`