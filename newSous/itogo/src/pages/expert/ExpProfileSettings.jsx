import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import men_img from '../../img/men1.jpg'
import EmpNavbar from '../../components/expert/ExpNavbar';
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';
import ExpNavbarMobile from '../../components/expert/ExpNavbarMobile';
import upArrowSity from '../../img/стрелкаВлевоРотейт.png'
import galka from '../../img/галочка.png'
import upArrow from '../../img/стрелкаВверх.png'
import left_arrow from '../../img/leftarrow.png'
import white_left_arrow from '../../img/white_leftarrow.png'

const ExpProfileSetting = () => {

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

    const clickFiltersGalka = (e) => {
        e.target.previousElementSibling.childNodes[0].classList.toggle('activeFilter')
        if(e.target.previousElementSibling.childNodes[0].classList.contains('activeFilter')){
          const newSpec = e.target.innerHTML;
          setSpec((prevSpec) => {
            const updatedSpec =  Array.isArray(prevSpec) ? prevSpec.concat(newSpec) : [newSpec];
            document.querySelector('.input-work').value = updatedSpec.join(',  ');
            return updatedSpec;
          })
    
        } else {
          setSpec(prevSpec => prevSpec.filter(item => item !== e.target.innerHTML));
        }
    }
    
    const watchSitySpec = () => {
        document.querySelector('.dropdown_sity__spec').classList.toggle('show')
        const upArrow = document.querySelector('.upArrowSity')
        if(upArrow.classList.contains('disabledMenu')){
          upArrow.classList.remove('disabledMenu')
          upArrow.classList.add('activeMenu')
        } else{
          upArrow.classList.add('disabledMenu')
          upArrow.classList.remove('activeMenu')
        }
    }

    const clickGalka = (el) => {
        document.querySelector('.input-sity').value = el.target.innerHTML
    }

    const watchSpec = () => {
        document.querySelector('.dropdown_specialnost').classList.toggle('show')
        const upArrow = document.querySelector('.upArrow')
        if(upArrow.classList.contains('disabledMenu')){
          upArrow.classList.remove('disabledMenu')
          upArrow.classList.add('activeMenu')
        } else{
          upArrow.classList.add('disabledMenu')
          upArrow.classList.remove('activeMenu')
        }
    }
    
    const [spec, setSpec] = useState([])
    
    useEffect(() => {
        const specArray = spec.length > 0 ? spec.join(', ') : '';
        document.querySelector('.input-work').value = specArray;
    }, [spec]);
        

  return (
    <div className='ExpProfile'>

        <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>


        <Link to='/profile_exp'><img className="left-arrow-2" src={left_arrow} alt=""/></Link>
        <button className='button save'>Cохранить</button>
        <h1 className='profile_h1'>Личный кабинет</h1>
        
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-sm-5 col-12 img"><img src={men_img} alt=""/></div>
                <div className="col-xl-8 col-sm-7 col-12 main-info">
                    <div className="item-border name">
                        <div className="name item col-12">Имя:&#8195;<input type="text" class="input_back input-name col-10" 
                        placeholder='ваше имя'  defaultValue='anton'/></div>
                    </div>
                    <div className="item-border mail_item">
                        <div className="mail item col-xl-12 col-lg-9 col-sm-8 col-9">Почта:&#8195;<input type="text" class="input_back input-mail col-xl-10 col-lg-8 col-sm-10 col-11" 
                        placeholder='ваша почта' /></div>
                    </div>
                    <div className="item-border password_item">
                        <div className="password item col-xl-12 col-lg-9 col-sm-8 col-8">Пароль:&#8195;<input type="text" class="input_back input-password col-xl-9 col-sm-8 col-11" 
                        placeholder='ваш пароль' /></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="item-border nameMobile mar-top" style={{display: 'none'}}>
                        <div className="name item col-sm-12 col-9">Имя:&#8195;<input type="text" class="input_back input-name  col-sm-10  col-11" 
                        placeholder='ваше имя'  defaultValue='anton'/></div>
                    </div>
                    <div class="item-border">
                        <div class="sity1 item col-sm-12 col-9">Город:&#8195;
                        <input type="text" class="input_back input-sity col-sm-9 col-11" placeholder='город' readOnly='true'/>
                        <img src={upArrowSity} className='upArrowSity disabledMenu' onClick={watchSitySpec} />
                        </div>
                        <ul className='dropdown_sity__spec' style={{display: 'none'}}>
                            <div className="item-country">
                                <span className='oneString' onClick={clickGalka}>Краснодар</span>
                            </div>
                            <div className="item-country">
                                <span onClick={clickGalka}>Нижний новгород</span>
                            </div>
                            <div className="item-country">
                                <span className='oneString' onClick={clickGalka}>Москва</span>
                            </div> 
                            <div className="item-country">
                                <span className='oneString' onClick={clickGalka}>Казань</span>
                            </div>
                            <div className="item-country">
                                <span onClick={clickGalka}>Санкт-петербург</span>
                            </div>           
                        </ul>
                    </div>
                    <div class="item-border mar-top">
                        <div class="citizenship item col-sm-12 col-9">Гражданство:&#8195;<input type="text" class="input_back input-citizenship  col-lg-9 col-sm-8 col-11" 
                        placeholder='ваше гражданство'/></div>
                    </div>
                    <div className="item-border">
                        <div className="phone item col-sm-12 col-9">Телефон:&#8195;<input type="text" class="input_back input-phone col-sm-10 col-11" 
                        placeholder='телефон (необязательно)'/></div>
                    </div>
                    <div class="item-border">
                        <div class="work item col-sm-12 col-9">Специальность:&#8195;
                        <input type="text" class="input_back input-work col-lg-10 col-sm-7 col-11" placeholder='профессия' readOnly='true' style={{paddingRight: '60px'}}/></div>
                        <img src={upArrow} className='upArrow disabledMenu' onClick={watchSpec} />
                        <ul className='dropdown_specialnost' style={{display: 'none'}}>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>автослесарь</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>автомеханик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>парковщик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>атвожестянщик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>автомаляр</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>автоэлектрик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>арматурщик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>администратор</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>мастер приемщик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>инженер по гарантии</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>сервисный инженер</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>механик-моторист</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>механик по ремонту трансмиссии</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>механик по ремонту ходовой части</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>мастер кузовного цеха</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>парковщик</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>шиномонтажник</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>автомойщик </li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>администратор автомойки</li>
                            </div>
                            <div className="item">
                            <div className="link__icon">
                                <img className='filetrsGalka' src={galka} alt=""/>
                            </div>&#8195;
                            <li className="link__todo" onClick={clickFiltersGalka}>специалист детейлинга и химчистки</li>
                            </div>
                            
                        </ul>
                    </div>
                    <div class="item-border">
                        <div class="experience item col-sm-12 col-9">Стаж:&#8195;<input type="text" class="input_back input-experience col-sm-9 col-11" 
                        placeholder='стаж работы (если есть)'/></div>
                    </div>
                    <div className="item-border no">
                        <textarea type="text" class="input_back input-field col-xl-12 col-lg-9 col-12" placeholder='Дополнительная информация' />
                    </div>
                </div>
            </div>
        </div>




    </div>
  );
}

export default ExpProfileSetting;
