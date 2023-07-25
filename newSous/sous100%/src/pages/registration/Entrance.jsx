import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'
import white_left_arrow from '../../img/white_leftarrow.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';


const Entrance = () => {


    let sometime = true;
    const soonmoonFunc = () => {
        if(sometime){
            document.querySelector('.sun-moon').src = moon_img;
            document.querySelector('body').style.background = 'black'
            document.querySelector('.Entrance').style.color = 'white'
            document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'white'}) 
            document.querySelector('.left-arrow-2').src = white_left_arrow
            document.querySelector('.sun-moon').src = sun_img
            sometime = false
        } else{
            document.querySelector('.sun-moon').src = sun_img;
            document.querySelector('body').style.background = 'white'
            document.querySelector('.Entrance').style.color = 'black' 
            document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'black'})
            document.querySelector('.left-arrow-2').src = left_arrow
            sometime = true  
            document.querySelector('.sun-moon').src = moon_img
        }
    }




  return (
    <>  
    
        <div className='Entrance block'>
            
            <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
            <div className="entrance-blank">
                <Link to='/'><img className="left-arrow-2" src={left_arrow} alt=""/></Link>
                <h1>Вход</h1>
                <div className="form">
                    <input type="text" placeholder="Почта"/>
                    <input type="text" placeholder="Пароль"/><br/>
                </div>
                <Link to='/profile_rab' className="registration black-white">Войти</Link>
                <span>первый раз на сайте?</span><br/>
                <Link to='/registration'><button className="to-entrance-button black-white">Зарегистрироваться</button></Link>
            </div>
        </div>

    </>

  );

}

export default Entrance;
