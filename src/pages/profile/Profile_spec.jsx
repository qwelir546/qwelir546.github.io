import React from 'react'
import { Link } from 'react-router-dom';
import men_img from '../../img/men1.jpg'

const Profile = () => {
    let flag = true
    const change = (e) => {
        console.log(e.target.previousSibling.firstElementChild)
        let input = e.target.previousSibling.firstElementChild;
            if(flag){
                e.target.innerHTML = 'сохранить'
                input.removeAttribute('readonly');
                flag = false
            } else {
                input.setAttribute('readonly', '')
                e.target.innerHTML = 'изменить'
                flag = true
            }
      }


  return (
    <div className='profile'>

        <div className="navbar">
            <ul className="navbar_menu">
                <li className="navbar__element"><Link to='/profile_spec'>Личный кабинет</Link></li>
                <li className="navbar__element"><Link to='/ads_spec'>Объявления</Link></li>
                <li className="navbar__element"><Link to='/fastadsspec'>Срочные заявки</Link></li>
                <li className="navbar__element"><Link to=''>Форум</Link></li>
                <li className="navbar__element"><Link to='/info'>Новости и информация</Link></li>
                <li className="navbar__element"><Link to='/'>Выход</Link></li>
            </ul>
        </div>


        <h1 className='profile_h1'>Личный кабинет</h1>
        <div class="container">
        <div class="row">
            <div class="col-4 img"><img src={men_img} alt=""/></div>
            <div class="col-8 main-info">
                <div class="item-border">
                    <div class="name item col-10">Имя:&#8195;<input type="text" class="input_back input-name col-10" 
                    placeholder='ваше имя' readonly='true' defaultValue='anton'/></div>
                    <button class="transform-name transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="mail item col-10">Почта:&#8195;<input type="text" class="input_back input-mail col-10" 
                    placeholder='ваша почта' readonly='true'/></div>
                    <button class="transform-mail transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="password item col-10">Пароль:&#8195;<input type="text" class="input_back input-password col-10" 
                    placeholder='ваш пароль' readonly='true'/></div>
                    <button class="transform-password transform-button" onClick={change}>изменить</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="item-border1">
                    <div class="secondname item col-10">Фамилия:&#8195;<input type="text" class="input_back input-secondname col-9" 
                    placeholder='ваше имя' readonly='true'/></div>
                    <button class="transform-secondname transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="citizenship item col-10">Гражданство:&#8195;<input type="text" class="input_back input-citizenship col-9" 
                    placeholder='ваше гражданство' readonly='true'/></div>
                    <button class="transform-citizenship transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="sity1 item col-10">Город:&#8195;<input type="text" class="input_back input-sity col-9" 
                    placeholder='город' readonly='true'/></div>
                    <button class="transform-sity transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">

                    <div class="field item col-10">Сфера детельности:&#8195;<input type="text" class="input_back nput-field col-9" 
                    placeholder='шиномонтаж/автомойка' readonly='true'/></div>
                    <button class="transform-field transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="work item col-10">Специальность:&#8195;<input type="text" class="input_back input-work col-9" 
                    placeholder='профессия' readonly='true'/></div>
                    <button class="transform-work transform-button" onClick={change}>изменить</button>
                </div>
                <div class="item-border">
                    <div class="experience item col-10">Стаж:&#8195;<input type="text" class="input_back input-experience col-9" 
                    placeholder='стаж работы' readonly='true'/></div>
                    <button class="transform-epirience transform-button" onClick={change}>изменить</button>
                </div>
            </div>
        </div>
    </div>




    </div>
  );
}

export default Profile;
