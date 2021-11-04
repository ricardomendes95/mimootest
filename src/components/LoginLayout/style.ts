import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Left =styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    background: #00C3A3;
    width: 100%;
    height: 100vh;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    h1 { 
        font-weight: 900;
        color: white;
        font-size:36px;
        max-width: 358px;
        margin-bottom: 10px;
    }
    p {
        font-weight: 400;
        color: white;
        font-size:24px;
        max-width: 358px;
    }
`

export const Image = styled.div`
    display: flex;
   align-self: flex-end;
   width: 100%;
    img {
        width: 95%;
    }
`
export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`