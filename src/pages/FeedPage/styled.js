import styled from "styled-components"

export const Container = styled.div`
    height: auto;
`
export const FeedContainer = styled.div`
    border-top: 1px solid #d0d0d0;
    margin-bottom: 0;
    height: 600px;
    padding-top: 50px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
    }
`