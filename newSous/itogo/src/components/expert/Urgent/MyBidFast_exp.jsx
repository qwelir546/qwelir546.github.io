import React from 'react';
import krest from '../../../img/крестик.png'

const MyBidFast_exp = function(props) {
   
    const Delete = (e) => {
        
        const result = window.confirm('удалить объявление?')
        if(result){
            e.target.parentElement.parentElement.remove()
        }
    }

    return(
        <div className="rabotnik-my">
            <div className='delete'><img src={krest} onClick={Delete}/></div>
            <div className='rabotnik__info-my'>
                <p>{props.bid.myName}</p>
                <p>{props.bid.mytext}</p>
            </div>
        </div>
  )
}

export default MyBidFast_exp;