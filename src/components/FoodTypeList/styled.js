import styled from "styled-components"

export const TypesContainer = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    height: 60px;
    width: 370px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
    p {
        font-size: 16px;
        margin-left: 25px;
        margin-right: 25px;
    }
`