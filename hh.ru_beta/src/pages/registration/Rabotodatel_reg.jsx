import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'

const Rabotodatel = () => {

  const regFunc = regFunc => {
    if(regFunc){
      console.log('aaaa')
      let link = document.createElement("a")
      link.setAttribute('href', '/profile_rab')
      link.click()
    }
  }

  return (

    <div>
        <div class="register-blank">
        <Link to='/entrance'><img className="left-arrow-1" src={left_arrow} alt=""/></Link>
            <h1>Регистрация</h1>
            <div class="form">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Адрес основного объекта"/>
                <input type="text" placeholder="Город"/>
                <input type="text" placeholder="Почта"/>
                <input type="text" placeholder="Пароль"/>
                <input type="text" placeholder="Подтверждение пароля"/>
            </div>
            <button class="entrance-button-1" onClick={regFunc}>Зарегистрироваться</button>
        </div>
    </div>
  );
}

export default Rabotodatel;