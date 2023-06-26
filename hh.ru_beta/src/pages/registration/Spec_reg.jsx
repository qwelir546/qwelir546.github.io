import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'

const Spec = () => {

  const regFunc = regFunc => {
    if(regFunc){
      console.log('aaaa')
      let link = document.createElement("a")
      link.setAttribute('href', '/profile_spec')
      link.click()
    }
  }

  return (
  
    <div>

        <div className="register-blank">
        <Link to='/entrance'><img className="left-arrow-1" src={left_arrow} alt=""/></Link>
            <h1>Регистрация</h1>
            <div className="form">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="text" placeholder="Город проживания"/>
                <input type="text" placeholder="Гражданство"/>
                <input type="text" placeholder="Почта"/>
                <input type="text" placeholder="Пароль"/>
                <input type="text" placeholder="Подтверждение пароля"/>
            </div>
            <button className="entrance-button" onClick={regFunc}>Зарегистрироваться</button>
        </div>

    </div>
    
  );
  
}

export default Spec;