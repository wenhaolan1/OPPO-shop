import styled from "styled-components";

export const SearchWrapper = styled.div`
    .header-search {
        display: flex;
        flex: 1;
        width: 18.76rem;
        height: 2.2rem;
        align-items:center;
        justify-content:center;
        .back-icon-contain {
            float: left;
            width: 2.45rem;
            height: 2.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
            img {
                width: 1.25rem;
                height: 1.25rem;
            }
        }
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
                    outline: none;
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
    .recommend {
        width: 17.55rem;
        height: 5.85rem;
        padding: 1.55rem 0.6rem 0;
        .hot-recommend {
            color: #999;
            font-weight: 400;
            font-size: 0.65rem;
        }
        .label-panel {
            margin-top: 0.9rem;
            overflow: hidden;
            .style {
            float: left;
            margin-right: 0.4rem;
            margin-bottom: 0.4rem;
            padding: 0.1rem 0.5rem;
            font-weight: 400;
            font-size: 0.65rem;
            line-height: 1.55rem;
            border-radius: 0.25rem;
            background: #f7f8fa;
            &:not(:first-child){
                background:#ff6843;
            }
            }
        }
        
    }
`