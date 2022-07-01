import styled from 'styled-components'

export const SearchWrapper = styled.div`
    .header-search{
        display: flex;
        flex: 1;
        width: 18.76rem;
        height: 2.2rem;
        align-items:center;
        justify-content:center;
        .icon {
            background: #f7f8fa;
            width: 1.65rem;
            height: 1.55rem;
            display:flex;
            align-items:center;
            justify-content:center;
            color: #b2b2b2;
        }
        .search-box{
            display: flex;
            flex: 1;
            width: 1.65rem;
            height: 1.55rem;
            align-items:center;
            background: #f7f8fa;
            .search-eara {
                width: 100%;
                background: #f7f8fa;
                input {
                    border: none;
                    background: #f7f8fa;
                }
            }
            .search-login {
                display: flex;
                width: 2.4rem;
                height: 100%;
                align-items:center;
                justify-content:center;
                background: white;
            }
        }
        
    }
    
`