import styled from "styled-components"

export const Container = styled.div`
    height: auto;
`

export const CartContainer = styled.div`
    border-top: 1px solid #d0d0d0;
    margin-bottom: 0;
    height: 500px;
    padding-top: 50px;
    padding-bottom: 60px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
`