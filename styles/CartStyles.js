import styled from "styled-components";
const { motion } = require("framer-motion");


export const CartWrapper = styled(motion.div)`
    position: fixed;
    left: 0;
    /* right: 0; */
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 2;
    /* display: none; */
   

`;

export const CartStyle = styled(motion.div)`
    width: 40%;
    display: inline-block;
    background: #f1f1f1;
    padding: 2rem 4rem;
    overflow-y: scroll;
    position: relative;

`

export const Card = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    overflow: hidden;
    background: #ffff;
    padding: 1rem;
    margin: 2rem 0rem;

`

export const CardInfo = styled(motion.div)`
    width: 50%;
    /* display: flex;
    justify-content: space-between; */
`;

export const EmptyStyle = styled(motion.div)`
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

    `;

export const Quantity = styled(motion.div)`
    display: flex;
    align-items:center;
    margin: 1rem 0;
    svg{
        margin: 10px;
        color: var(--secondary);
        cursor: pointer;
    }
`;

export const Checkout = styled(motion.div)`
    button{
        background: var(--primary);
        color: white;
       
        padding: .5rem;
        border: none;
        cursor: pointer;
        
        margin: 1rem 0;
        width: 100%;

    }
`