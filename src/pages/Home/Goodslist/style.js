import styled from "styled-components";

export const Wrapper = styled.article`
    background-color: #f7f8fa;
    .floor-panel-contain {
        width: 17.55rem;
        margin: 0 auto;
   
        li{
            display: inline-block;
            width: 8.55rem;
            &:nth-child(2n+1) {
                margin-right: 0.4rem;
            }
            img {
                width: 100%;
            }
        }
    }
    .other-contain {
        ul {
            margin-top: 0.4rem;
            display: flex;
            justify-content: space-around;
            margin-bottom: 2.75rem;
            li {
                width: 4rem;
                height: 5.35rem;
                
                img {
                    max-width: 100%;
                }
            }
        }
    }
`