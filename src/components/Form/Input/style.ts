import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import { InputProps }  from './index'

export const Input = styled(Form.Control)`
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid #999999;
    padding: 10px;
    width: ${(props: InputProps) => props.width};
    &:focus {
        outline: none;
        border: 2px solid #00C3A3;
        box-shadow: none;
    }
    
`