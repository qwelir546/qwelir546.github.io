import React from 'react';
import Timer from './Timer';


const MyBid = function(props) {

    
    const OnClickUp = (e) => {
       e.target.style.display = 'none';
       e.target.nextElementSibling.style.display = 'block';
       
    }

   

    return(
        <div className="rabotnik-my">
        <div className="rabotnik__info-my">
            <span className="rabotnik__work">Требуется:&#8194;{props.bid.spec}.</span><br/>
            <span className="rabotnik__name">Адрес:&#8194;{props.bid.address}</span><br/>
            <span className="rabotnik__country">Телефон:&#8194;{props.bid.phone}</span><br/>
            <button onClick={OnClickUp} className="up">Поднять в поиске</button>
            <Timer/>
        </div>
    </div>
  )
}

export default MyBid;