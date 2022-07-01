import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    height: 2.75rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 0.35rem;
        &.active {/* &表示上一层 */
            color:#f94d30;
        }
        i {
            font-size: 1rem;
        }
        span {
            font-size: 0.75rem;
        }
    }
`