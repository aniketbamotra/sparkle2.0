import React from 'react'
import Footer from '../../components/Footer/Footer'
import './History.css'

const History = () => {
  return (
    <div>
        <h1 className="page-title">Our Products</h1>
        <div className="his-part-container">
            <div className="his-para">
                <p className="history-text">India is considered the land of tradition and culture. Handicrafts form an integral part of India’s rich and unique customs. This inheritance or we say Indian handicraft's history of making unique and beautiful handicrafts has been passed from one generation to another. India has a unique variety of awestruck jewelry, hand-made paintings, and beautiful woodcraft. These pleasing items can only be found in India.</p>
            </div>
            <img className="img-1-his" src={require=("../../asserts/media/scatered-img (1).jpg")} alt="" />
        </div>
        <div className="his-part-container">
            <img className="img-2-his" src={require=("../../asserts/media/scatered-img (4).jpg")} alt="" />
            <div className="his-para">
                <p className="history-text">India has a vast species of trees. These different varieties of trees were used in the manufacturing of wooden handicrafts. Wooden handicrafts of India are known for their utility and beauty. These handicrafts embrace furniture, boxes, beads, finely engraved figures, accessories, etc. The art of decorating and carving the wood is considered one of the most notable forms.</p>
            </div>
        </div>
        <div className="his-imgs-container">
            <img src={require=("../../asserts/media/scatered-img (1).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (2).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (3).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (4).jpg")} alt="" />
        </div>
        <div className="his-imgs-container">
            <img src={require=("../../asserts/media/scatered-img (4).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (3).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (2).jpg")} alt="" />
            <img src={require=("../../asserts/media/scatered-img (1).jpg")} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default History