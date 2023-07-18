import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'
import white_left_arrow from '../../img/white_leftarrow.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';


const Entrance = () => {

    let flag = true
    const swapFunc = (e) => {
        const form = e.target.nextElementSibling;
        if(flag){
            form.style.display = 'block';
            flag = false;
        } else {
            form.style.display = 'none';
            flag = true;
        }
    }


    let sometime = true;
    const soonmoonFunc = () => {
        if(sometime){
            document.querySelector('.sun-moon').src = moon_img;
            document.querySelector('body').style.background = 'black'
            document.querySelector('.Entrance').style.color = 'white'
            document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'white'}) 
            document.querySelector('.left-arrow-2').src = white_left_arrow
            document.querySelector('.regBy').style.color = 'black'
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
                <button className="to-entrance-button black-white" onClick={swapFunc}>Зарегистрироваться</button>
                <div className="miniform">
                    <span className='regBy'>Регистрация как:</span><br/>
                    <Link to='/rabotodatel_reg'><button className="rabotnik">Работодатель</button></Link>
                    <Link to='/spec_reg'><button className="spec">Специалист</button></Link>
                </div>
            </div>
        </div>

    </>

  );

}

export default Entrance;
