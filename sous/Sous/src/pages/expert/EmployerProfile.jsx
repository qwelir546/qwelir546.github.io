import React from 'react'
import { Link } from 'react-router-dom';
import men_img from '../../img/men1.jpg'
import left_arrow from '../../img/leftarrow.png'
import ExpNavbar from '../../components/expert/ExpNavbar';
import flag from '../../img/flag.png'
import flag_active from '../../img/flag_active.png'
import eye from '../../img/eye.png'
import stop from '../../img/stop.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';
import white_left_arrow from '../../img/white_leftarrow.png'


const EmployerProfile = () => {

    let flagcounter = false
    let stopcounter = false

    const ClickFlag = (e) => {
        if(!flagcounter){
            e.currentTarget.childNodes[0].src = flag_active
            e.currentTarget.childNodes[1].innerHTML = 'Убрать из закладок'
            flagcounter = true
        } else {
            e.currentTarget.childNodes[0].src = flag
            e.currentTarget.childNodes[1].innerHTML = 'В закладки'
            flagcounter = false
        }
    }
    const ClickStop = (e) => {
        if(!stopcounter){
            e.currentTarget.childNodes[0].src = eye
            e.currentTarget.childNodes[1].innerHTML = 'НЕ игнорировать'
            stopcounter = true
            console.log(e.currentTarget.childNodes[0])
            console.log(stopcounter)
        } else {
            e.currentTarget.childNodes[0].src = stop
            e.currentTarget.childNodes[1].innerHTML = 'Игнорировать'
            stopcounter = false
        }
    }

    let sometime = true;
    const soonmoonFunc = () => {

        if(sometime){
            document.querySelectorAll('.item').forEach(e => {e.style.color = 'white'})
            document.querySelectorAll('.input_back').forEach((e) => {e.style.color = 'white'})
            document.querySelectorAll('.itemOrange').forEach(e => {e.style.color = 'black'})
            document.querySelector('body').style.background = 'black'
            document.querySelector('.navbar_menu').style.background = 'black'
            document.querySelector('.sun-moon').src = sun_img;
            sometime = false
        } else{
            document.querySelectorAll('.item').forEach(e => {e.style.color = 'black'})
            document.querySelectorAll('.input_back').forEach((e) => {e.style.color = 'black'})
            document.querySelector('body').style.background = 'white'
            document.querySelector('.navbar_menu').style.background = 'white'
            document.querySelector('.sun-moon').src = moon_img;
            sometime = true
        }
    }

  return (
    <div className='EmployerProfile'>

        <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
        <ExpNavbar/>
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-5 img">
                    <img src={men_img} alt=""/>
                    <div class="item-border">
                            <div class="secondname item itemOrange col-12 phone_item">Имя:&#8195;
                            <input type="text" className="input_back itemOrange input-secondname col-12" defaultValue='Арсений' readonly='true'/></div>
                    </div>
                    <div class="item-border">
                            <div class="secondname item itemOrange col-12 phone_item">Город:&#8195;
                            <input type="text" className="input_back itemOrange input-secondname col-12" defaultValue='Москва' readonly='true'/></div>
                    </div>
                    <div class="item-border">
                            <div class="secondname item itemOrange col-12 phone_item">Адрес основного объекта:&#8195;
                            <input type="text" className="input_back itemOrange input-secondname col-12" defaultValue='....' readonly='true'/></div>
                    </div>
                    <div class="item-border">
                        <button>написать сообщение</button>
                    </div>
                    <div class="item-border">
                        <input type='text' className='col-12 input-phone' defaultValue='+7 (999) 520-20-08'/>
                    </div>
                    <div class="item-border bookmarks" onClick={ClickFlag}>
                        <img src={flag}/>
                        <span>В закладки</span>
                    </div>
                    <div class="item-border ignor" onClick={ClickStop}>
                        <img src={stop}/>
                        <span>Игнорировать</span>
                    </div>
                </div>
                <div className="col-xl-7 col-7 main-info">
                <h1 className='profile_h1'>Личный кабинет</h1>
                        <div className="item-border nameSname row objects">
                            <div className="item col-5">
                                <span>Все объекты:</span>
                            </div>
                            <textarea type="text" className="input_back input-name col-7" readonly='true' defaultValue='qwerty'/>
                        </div>
                        <div className="item-border row">
                            <div className="item col-5">
                                <span>Об организации:</span>
                            </div>
                            <textarea type="text" className="input_back input-info col-7" readonly='true' defaultValue='Владею наывками слесарных работ, умею оклеивать пленкой. Интересует график 2/2 день'/>
                        </div>
                </div>
            </div>
        </div>



    </div>
  );
}

export default EmployerProfile;
