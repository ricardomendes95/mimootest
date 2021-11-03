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
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    
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
    
`
export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`