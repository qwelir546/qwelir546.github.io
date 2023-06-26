import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'

const Entrance = () => {


    let flag = true
    const swapFunc = (e) => {
        const form = e.target.nextElementSibling
        if(flag){
            form.style.display = 'block'
            console.log(flag)
            flag = false
        } else {
            form.style.display = 'none'
            flag = true
        }
    }


  return (
    <div>
        <div className='entrance block'>
            <div className="entrance-blank">
                <Link to='/'><img className="left-arrow-2" src={left_arrow} alt=""/></Link>
                <h1>Вход</h1>
                <div className="form">
                    <input type="text" placeholder="Почта"/>
                    <input type="text" placeholder="Пароль"/><br/>
                </div>
                <Link to='/profile_rab' className="registration">Войти</Link>
                <span>первый раз на сайте?</span><br/>
                <button className="to-entrance-button" onClick={swapFunc}>Зарегистрироваться</button>
                <div className="miniform">
                    <span>Регистрация как:</span><br/>
                    <Link to='/rabotodatel_reg'><button className="rabotnik">Работодатель</button></Link>
                    <Link to='/spec_reg'><button className="spec">Специалист</button></Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Entrance;
