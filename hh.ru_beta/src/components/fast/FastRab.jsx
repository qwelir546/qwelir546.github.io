import React from 'react';
import men_img from '../../img/men1.jpg';
import flag from '../../img/flag.png';
import flag_active from '../../img/flag_active.png';



const FastRab = function(props) {

    let flag_counter = true
    const change_flag = (e) => {
        if(flag_counter){
            e.target.src = flag_active
            e.target.classList.add('active_flag')
            flag_counter = false
        } else {
            e.target.src = flag
            e.target.classList.remove('active_flag')
            flag_counter = true
        }
    }

    return(
        <div className="rabotnik">
        <img src={flag} alt="" className="flag" onClick={change_flag}/>
            <img src={men_img} alt="" className="men_img"/>
            <div className="rabotnik__info">
                <span className="rabotnik__work">Специальность:&#8194;{props.fastrabotnik.spec}.</span><br/>
                <span className="rabotnik__name">Имя:&#8194;{props.fastrabotnik.name}.</span><br/>
                <span className="rabotnik__country">Телефон:&#8194;{props.fastrabotnik.phone}.</span><br/>
            </div>
        </div>
  )
}

export default FastRab;