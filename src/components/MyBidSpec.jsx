import React from 'react';
import Timer from './Timer';
import men_img from '../img/men1.jpg'

const MyBidSpec = function(props) {

    let timerflag = false
    const OnClickUp = (e) => {
       e.target.style.display = 'none';
       e.target.nextElementSibling.style.display = 'block';
       
    }

   

    return(
        <div className="rabotnik-my">
        <img src={men_img} alt="" className="men_img"/>
        <div className="rabotnik__info-my">
            <span className="rabotnik__work">Специальность:&#8194;{props.bid.spec}.</span><br/>
            <span className="rabotnik__name">Имя:&#8194;{props.bid.name}.</span><br/>
            <span className="rabotnik__country">Гражданство:&#8194;{props.bid.nat}.</span><br/>
            <button onClick={OnClickUp} className="up">Поднять в поиске</button>
            <Timer/>
        </div>
    </div>
  )
}

export default MyBidSpec;