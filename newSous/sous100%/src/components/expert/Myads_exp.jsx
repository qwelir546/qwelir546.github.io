import React from 'react';
import Timer from '../Timer';
import krest from '../../img/крестик.png'

const Myads_exp = function(props) {

    
    const OnClickUp = (e) => {
       e.target.style.display = 'none';
       e.target.nextElementSibling.style.display = 'block';
       
    };

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
                <p>{props.myads.myName}</p>
                <p>{props.myads.mytext}</p>
            </div>

            <button onClick={OnClickUp} className="up">Поднять в поиске</button>
            <Timer/>
        </div>
  )
}

export default Myads_exp;