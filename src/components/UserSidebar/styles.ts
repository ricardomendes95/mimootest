import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 20px;
    img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
    }
`

export const LogOut = styled(Link)`
img {
    width: 24px;
    height: 24px;
}
`