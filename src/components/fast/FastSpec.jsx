import React from 'react';
import men_img from '../../img/men1.jpg';
import flag from '../../img/flag.png';
import flag_active from '../../img/flag_active.png';



const FastSpec = function(props) {

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
        <div className="spec">
        <img src={flag} alt="" className="flag" onClick={change_flag}/>
            <div className="spec__info">
                <span className="rabotnik__work">Требуется:&#8194;{props.fastspec.spec}.</span><br/>
                <span className="rabotnik__name">Адрес объекта:&#8194;{props.fastspec.address}.</span><br/>
                <span className="rabotnik__country">Телефон:&#8194;{props.fastspec.phone}.</span><br/>
            </div>
        </div>
  )
}

export default FastSpec;