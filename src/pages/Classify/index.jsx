import React from 'react'
import Search from '../Home/Search'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getClassifyList } from './store/actionCreators'
import { Wrapper } from './style'

function Classify(props) {
  const { classifyList } = props
  console.log(props.classifyList,"111wwwwww222")
  const {
    getClassifyListDispatch
  } = props
  useEffect(() => {
    getClassifyListDispatch()
  },[])

  // 实现双联动效果
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName)
        if (anchorElement) {
            anchorElement.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            })
        }
    }
}

const renderInfo = () => {
  return classifyList.map(item => (
      <div className="left-data" key={item.id}>
          <a onClick={() => scrollToAnchor(item.id)}>
              <span>{item.title}</span>
          </a>
      </div>
  ))
}

const renderSaleSlide = () => {
  return classifyList.map(item => {
    return (
      <div className="menu-box-detail" key={item.id}>
          <div className="title-img-box">
            <img class="title-img-box_img" src={item.img} alt />
          </div>
        <div className="menu-top">
          <div className="top-title" id={item.id}>
            {item.name}
          </div>
          <span>{item.description}</span>
        </div>
        <div className="menu-box">
          { item.phone && item.phone.map(element => {
            return (
              <div key={element.id} className="menu-detail">
                <div className="menu-detail-box">
                  <div className="menu-item" key={element.id}>
                    <div className="img-bubble">
                      <div className="img-box">
                        <img className="sale-img" src={element.img} alt="" />
                      </div>
                    </div>
                    <section>
                      <p className="fooddetail-info">
                        <span>{element.name}</span>
                      </p>
                      <p className="fooddetail-sale">
                        <span>{element.introduce}</span>
                      </p>
                      <div className="fooddetails-space"></div>
                      <span className="sale_price">
                        <span>{element.price}</span>
                      </span>
                    </section>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};
  return (
    <Wrapper>
      <Search/>
        <div className="sale-box">
            <div className="sale-main">
                <div className="sale-left">
                    <ul>
                        {renderInfo()}
                    </ul>
                </div>
                <div className="sale-detail-box">
                    <div className="sale-detail">
                        {renderSaleSlide()}
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
  classifyList: state.classify.classifyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getClassifyListDispatch() {
      dispatch(getClassifyList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Classify))