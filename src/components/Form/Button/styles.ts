import styled from 'styled-components'
import { ButtonProps } from './index'

export const Button = styled.button<ButtonProps>`
    width: ${(props: ButtonProps) => props.width};
    height: 56px;
    border-radius: 8px;
    background-color: #00c3A3;
    color: white;
    border: none;
    font-size: 18px;
    box-shadow: 0px 10px 14px -7px #276873;
    font-weight: 700;
    &:active {
        position:relative;
	    top:1px;
    }
    :hover {
        opacity: 0.9;
    }

`