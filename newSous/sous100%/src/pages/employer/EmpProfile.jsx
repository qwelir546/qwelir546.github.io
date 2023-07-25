import men_img from '../../img/men1.jpg'
import EmpNavbar from '../../components/employer/EmpNavbar';
import EmpNavbarMobile from '../../components/employer/EmpNavbarMobile';
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';

const EmpProfile = () => {

    let sometime = true;
    const soonmoonFunc = () => {

        if(sometime){
            document.querySelector('body').style.background = 'black'
            document.querySelector('.navbar_menu').style.background = 'black'
            document.querySelectorAll('.input_back').forEach((e) => {e.style.color = 'white'})
            document.querySelector('.sun-moon').src = sun_img;
            sometime = false
        } else{
            document.querySelector('body').style.background = 'white'
            document.querySelector('.navbar_menu').style.background = 'white'
            document.querySelectorAll('.input_back').forEach((e) => {e.style.color = 'black'})
            document.querySelector('.sun-moon').src = moon_img;
            sometime = true
        }
    }

    let flag = true
    const changeProfileSettings = (e) => {
        e.target.classList.toggle('activeButton')
        if(flag){
            document.querySelectorAll('input').forEach((e) => {e.removeAttribute('readonly')}) 
            document.querySelector('textarea').removeAttribute('readonly')
            flag = false
        } else {
            document.querySelectorAll('input').forEach((e) => {e.setAttribute('readonly', '')}) 
            document.querySelector('textarea').setAttribute('readonly', '')
            flag = true
        }
    }
    


    return (
        <div className='EmpProfile'>

            <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>

            <EmpNavbar/>
            <EmpNavbarMobile/>

            <h1 className='profile_h1'>Личный кабинет</h1>
            
            <div className="container">
                <button onClick={changeProfileSettings}>Редактировать <br/> профиль</button>
                <div className="row">
                    <div className="col-xl-4 col-lg-5 col-sm-5 col-12 img"><img src={men_img} alt=""/></div>
                    <div className="col-xl-8 col-lg-7 col-sm-7 col-12 main-info">
                        <div className="item-border name">
                            <div className="name item col-12">Имя:&#8195;<input type="text" class="input_back input-name col-10" 
                            placeholder='ваше имя' readOnly='true' defaultValue='anton'/></div>
                        </div>
                        <div className="item-border mail_item">
                            <div className="mail item col-xl-12 col-lg-9 col-sm-8 col-9">Почта:&#8195;<input type="text" class="input_back input-mail col-xl-10 col-sm-10 col-11" 
                            placeholder='ваша почта' readOnly='true'/></div>
                        </div>
                        <div className="item-border password_item">
                            <div className="password item col-xl-12 col-lg-9 col-sm-8 col-9">Пароль:&#8195;<input type="text" class="input_back input-password col-xl-9 col-sm-8 col-11" 
                            placeholder='ваш пароль' readOnly='true'/></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="item-border nameMobile mar-top" style={{display: 'none'}}>
                            <div className="name item col-sm-12 col-9">Имя:&#8195;<input type="text" class="input_back input-name  col-sm-9 col-11" 
                            placeholder='ваше имя' readOnly='true' defaultValue='anton'/></div>
                        </div>
                        <div className="item-border mar-top">
                            <div className="sity1 item col-sm-12 col-9">Город:&#8195;<input type="text" class="input_back input-sity col-sm-9  col-11" 
                            placeholder='город объекта' readOnly='true'/></div>
                        </div>
                        <div className="item-border">
                            <div className="phone item col-sm-12 col-9">Телефон:&#8195;<input type="text" class="input_back input-phone col-sm-9 col-11" 
                            placeholder='телефон (необязательно)' readOnly='true'/></div>
                        </div>
                        <div className="item-border">
                            <div className="field item col-sm-12 col-9">Адрес основного объекта:&#8195;<input type="text" class="input_back input-field col-sm-7 col-11" 
                            placeholder='ул. ... , дом 00' readOnly='true'/></div>
                        </div>
                        <div className="item-border">
                            <div className="field item col-sm-12 col-9">Все объекты:&#8195;<input type="text" class="input_back input-field col-xl-8 col-sm-9 col-11" 
                            placeholder='прочие объекты компании' readOnly='true'/></div>
                        </div>
                        <div className="item-border no">
                            <textarea type="text" class="input_back input-field col-12" placeholder='Об организации' readOnly/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  );
}

export default EmpProfile;
