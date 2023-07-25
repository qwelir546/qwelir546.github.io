import React from 'react';
import flag from '../../../img/flag.png';
import flag_active from '../../../img/flag_active.png';
import { Link } from 'react-router-dom';

const FastExp = function(props) {

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
        <img src={flag} alt="" className="flag" onClick={change_flag} style={{zIndex: '15'}}/>
        <Link to='/emp_profile'>
            <div className='rabotnik__info'>
                <p>{props.fastrabotnik.name}</p>
                <p>{props.fastrabotnik.text}</p>
            </div>
        </Link>
        </div>
  )
}

export default FastExp;