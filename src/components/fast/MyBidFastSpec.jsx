import React from 'react';
import men_img from '../../img/men1.jpg'


const MyBidFastSpec = function(props) {
   

    return(
        <div className="rabotnik-my">
        <img src={men_img} alt="" className="men_img"/>
        <div className="rabotnik__info-my">
        <span className="rabotnik__work">Специальность:&#8194;{props.bid.spec}.</span><br/>
            <span className="rabotnik__name">Имя:&#8194;{props.bid.name}.</span><br/>
            <span className="rabotnik__country">Гражданство:&#8194;{props.bid.nat}.</span><br/>
        </div>
    </div>
  )
}

export default MyBidFastSpec;