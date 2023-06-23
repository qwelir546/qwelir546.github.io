import React from 'react';
import men_img from '../img/men1.jpg';



const MyBid = function(props) {



    return(
        <div className="rabotnik-my">
        <div className="rabotnik__info-my">
            <span className="rabotnik__work">Требуется:&#8194;{props.bid.spec}.</span><br/>
            <span className="rabotnik__name">Адрес:&#8194;{props.bid.address}</span><br/>
            <span className="rabotnik__country">Телефон:&#8194;{props.bid.phone}</span><br/>
            <button className="up">Поднять в поиске</button>
        </div>
    </div>
  )
}

export default MyBid;