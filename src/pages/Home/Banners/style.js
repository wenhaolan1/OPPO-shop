import styled from 'styled-components'  

export const BannersWrapper = styled.div`
    height: 10.4rem;
    /* margin-top:20px; */
    border: none;
.btn_banners{
    width:100%;
    height:50vw;
    background:#fff;
}     
.swiper-slide{
    display: flex;
    
}
.swiper-item{
    display:flex;
    width: 100%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    
} 

.swiper-item p{
    height:50vw;
    width:18.75rem;
    background: skyblue;
}

.swiper-item img{
    height:100%;
    width:100%
}
.swiper-pagination{
    height: 1.6rem;
    bottom: 0;
    
}
.swiper-pagination-bullet{
    width: 0.4rem;
    border-radius: 50%;
    height: 0.4rem;
    border: 1px solid #fff;
    background: transparent;
    &.swiper-pagination-bullet-active{
        background-color: white;
    }
}
`