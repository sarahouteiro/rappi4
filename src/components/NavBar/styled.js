import styled from "styled-components"

export const NavBarContainer = styled.div`
    width: 275px;
    display: flex;
    border-top: 1px solid #b8b8b8;
    position: fixed;
    bottom: 17vh;
    height: auto;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 15px;
    padding-top: 15px;
    justify-content: space-between;
    @media (max-width: 500px) {
        bottom: 0;
    }
    img {
        width: 27px;
        height: 27px;
    }
`