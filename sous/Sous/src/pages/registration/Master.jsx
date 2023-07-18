import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'
import white_left_arrow from '../../img/white_leftarrow.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';


const Spec = () => {

  const regFunc = regFunc => {
    if(regFunc){
      console.log('aaaa')
      let link = document.createElement("a")
      link.setAttribute('href', '/profile_exp')
      link.click()
    }
  }

  let sometime = true;
  const soonmoonFunc = () => {
      if(sometime){
          document.querySelector('.sun-moon').src = moon_img;
          document.querySelector('body').style.background = 'black'
          document.querySelector('.Entrance').style.color = 'white'
          document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'white'}) 
          document.querySelector('.left-arrow-1').src = white_left_arrow
          document.querySelector('.entrance-button').style.color = 'white'
          document.querySelector('.sun-moon').src = sun_img
          sometime = false
      } else{
          document.querySelector('.sun-moon').src = sun_img;
          document.querySelector('body').style.background = 'white'
          document.querySelector('.Entrance').style.color = 'black' 
          document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'black'})
          document.querySelector('.left-arrow-1').src = left_arrow
          document.querySelector('.entrance-button').style.color = 'black'
          document.querySelector('.sun-moon').src = moon_img
          sometime = true  
      }
  }

  return (
    <>


      <div className='Entrance'>
      <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
        <div className="register-blank">
        <Link to='/entrance'><img className="left-arrow-1" src={left_arrow} alt=""/></Link>
            <h1>Регистрация</h1>
            <div className="form">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Город"/>
                <input type="text" placeholder="Гражданство"/>
                <input type="text" placeholder="Почта"/>
                <input type="text" placeholder="Пароль"/>
                <input type="text" placeholder="Подтверждение пароля"/>
            </div>
            <button className="entrance-button" onClick={regFunc}>Зарегистрироваться</button>
        </div>

    </div>

    </>
  );
  
}

export default Spec;