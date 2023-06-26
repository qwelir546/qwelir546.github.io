import { Link } from 'react-router-dom';
import men_img from '../../img/men1.jpg'

const Profile = () => {

    let flag = true
    const change = (e) => {
        console.log(e.target.previousSibling.firstElementChild.value)
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
                <li className="navbar__element"><Link to='/profile_rab'>Личный кабинет</Link></li>
                <li className="navbar__element"><Link to='/ads_rab'>Объявления</Link></li>
                <li className="navbar__element"><Link to='/fast_ads_rab'>Срочные заявки</Link></li>
                <li className="navbar__element"><Link to=''>Форум</Link></li>
                <li className="navbar__element"><Link to='/info'>Новости и информация</Link></li>
                <li className="navbar__element"><Link to='/'>Выход</Link></li>
            </ul>
        </div>


        <h1 className='profile_h1'>Личный кабинет</h1>
        <div className="container">
            <div className="row">
                <div className="col-4 img"><img src={men_img} alt=""/></div>
                <div className="col-8 main-info">
                    <div className="item-border">
                        <div className="name item col-10">Имя:&#8195;<input type="text" class="input_back input-name col-10" 
                        placeholder='ваше имя' readonly='true' defaultValue='anton'/></div>
                        <button className="transform-name transform-button" onClick={change}>изменить</button>
                    </div>
                    <div className="item-border">
                        <div className="mail item col-10">Почта:&#8195;<input type="text" class="input_back input-mail col-10" 
                        placeholder='ваша почта' readonly='true'/></div>
                        <button className="transform-mail transform-button" onClick={change}>изменить</button>
                    </div>
                    <div className="item-border">
                        <div className="password item col-10">Пароль:&#8195;<input type="text" class="input_back input-password col-10" 
                        placeholder='ваш пароль' readonly='true'/></div>
                        <button className="transform-password transform-button" onClick={change}>изменить</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="item-border1">
                        <div className="secondname item col-10">Фамилия:&#8195;<input type="text" class="input_back input-secondname col-9" 
                        placeholder='ваша фамилия' readonly='true'/></div>
                        <button className="transform-secondname transform-button" onClick={change}>изменить</button>
                    </div>
                    <div className="item-border">
                        <div className="sity1 item col-10">Город:&#8195;<input type="text" class="input_back input-sity col-9" 
                        placeholder='город объекта' readonly='true'/></div>
                        <button className="transform-sity transform-button" onClick={change}>изменить</button>
                    </div>
                    <div className="item-border">
                        <div className="field item col-10">Адрес основного объекта:&#8195;<input type="text" class="input_back nput-field col-8" 
                        placeholder='ул. ... , дом 00' readonly='true'/></div>
                        <button className="transform-field transform-button" onClick={change}>изменить</button>
                    </div>
                    <div className="item-border">
                        <div className="field item col-10">Все объекты:&#8195;<input type="text" class="input_back nput-field col-10" 
                        placeholder='прочие объекты вашей компании' readonly='true'/></div>
                        <button className="transform-field transform-button" onClick={change}>изменить</button>
                    </div>
                </div>
            </div>
        </div>




    </div>
  );
}

export default Profile;
