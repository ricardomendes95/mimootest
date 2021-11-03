import styled from 'styled-components'

export const Button = styled.button`
    width: 480px;
    height: 56px;
    border-radius: 8px;
    background-color: #00c3A3;
    color: white;
    border: none;
    font-size: 18px;
    box-shadow: 0px 10px 14px -7px #276873;

    &:active {
        position:relative;
	    top:1px;
    }
    :hover {
        opacity: 0.9;
    }

`