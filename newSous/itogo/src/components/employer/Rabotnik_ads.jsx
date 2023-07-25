import React from 'react';
import flag from '../../img/flag.png';
import flag_active from '../../img/flag_active.png';
import { Link } from 'react-router-dom';


const Rabotnik_ads = function(props) {

    let flag_counter = true
    const change_flag = async (e) => {
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
        <Link to='/exp_profile'>
            <div className='rabotnik__info'>
                <p>{props.ads.name}</p>
                <p>{props.ads.text}</p>
            </div>
        </Link>
        </div>
  )
}

export default Rabotnik_ads;