import styled from "styled-components";


export const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    min-height: 60px;
    border-bottom: 1px solid #e6e6e6;
    
    img {
        width: 100px;
        cursor: pointer;
        @media (max-width: 768px) {
            width: 80px;
        }
    }
    div {
        display: flex;
        /* align-items: center; */
        justify-content: flex-end;
        position: relative;
       
        
        
        svg {
            font-size: 1.6rem;
            color: #333;
            cursor: pointer;
        }
        span{
            background: #ff2626;
            color: #fff;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.6rem;
            position: absolute;
            right: 50px;
            

        }
    }
`;
