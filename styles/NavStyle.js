import styled from "styled-components";


export const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    min-height: 60px;
    border-bottom: 1px solid #e6e6e6;
    @media (max-width: 768px) {
        padding: 0 1rem;
    }
    img {
        width: 100px;
        @media (max-width: 768px) {
            width: 80px;
        }
    }
    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 2rem;
        @media (max-width: 768px) {
            display: none;
        }
        h3 {
            margin-right: 1rem;
        }
        svg {
            font-size: 2rem;
            color: #333;
        }
    }
`;
