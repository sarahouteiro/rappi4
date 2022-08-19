import styled from "styled-components"

export const Card = styled.div`
    height: auto;
    width: 340px;
    margin-top: 0;
    margin-left: 16px;
    margin-bottom: 5px;
    display: flex;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    img {
        width: 97px;
        height: 112.6px;
    }
`

export const CardText = styled.div`
    height: auto;
    border-radius: 8px;
`

export const CardHeader = styled.div`
    height: auto;
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-radius: 8px;
`

export const Num = styled.button`
    position: relative;
    height: 30px;
    padding: 7px 10px;
    background-color: white;
    border: solid 1px #e86e5a;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    color: #e86e5a;
`

export const Title = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #e86e5a;
    margin: 0 0 8px 16px;
    padding-top: 12px;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #b8b8b8;
    margin: 0 0 8px 16px;
`
export const CardBottom = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 30px;
`

export const Price = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 0px 16px;
`

export const Delete = styled.button`
    height: 30px;
    position: relative;
    padding: 7px 10px;
    background-color: white;
    border: solid 1px #e86e5a;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    color: #e86e5a;
    font-size: 12px;
    margin-top: 5px;
`