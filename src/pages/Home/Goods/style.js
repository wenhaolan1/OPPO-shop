import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    p {
        img {
            display: block;
            width: 2.75rem;
            height: 2.75rem;
        }
    }
    span{
        display: block;
        color: rgba(0,0,0,.6);
        font-weight: 400;
        font-size: 0.65rem;
        text-decoration: none;
        text-align: center;
        }
`