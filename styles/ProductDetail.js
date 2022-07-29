import styled from "styled-components";


export const ProductDetail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    img{
        width: 40%;
    }
    `


export const ProductInfo = styled.div`
    width:  50%;
    button{
        font-size: 1rem;
        font-weight: medium;
        padding: .5rem;
        cursor: pointer;
    }
    h3{
        font-size: 2rem;
        color: var(--primary);
    }
`

export const Quantity = styled.div`
    display: flex;
    align-items:center;
    margin: 1rem 0;
    button{
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;

    }

    p{
        margin: 0 5px;
        width: 1rem;
        text-align: center;
    }
    span{
        margin-right: 10px;
        color: var(--secondary);
    }
    svg{
        color: #494949;
    }
    `

export const AddToCart = styled.button`
        background: var(--primary);
        color: white;
        font-size: 1.5rem;
        padding: .5rem;
        border: none;
        cursor: pointer; 
        font-weight: bold;
        margin: 1rem 0;
        width: 100%;
        `
