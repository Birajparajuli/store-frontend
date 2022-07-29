import styled from "styled-components";

export const CartWrapper = styled.div`
    position: fixed;
    left: 0;
    /* right: 0; */
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
   

`;

export const CartStyle = styled.div`
    width: 40%;
    display: inline-block;
    background: #f1f1f1;
    padding: 2rem 4rem;
    overflow-y: scroll;
    position: relative;

`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    overflow: hidden;
    background: #ffff;
    padding: 1rem;
    margin: 2rem 0rem;

`

export const CardInfo = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

export const EmptyStyle = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    svg{
        font-size: 6rem;
        color: var(--secondary);
        margin-bottom: 1rem;

    }

    `