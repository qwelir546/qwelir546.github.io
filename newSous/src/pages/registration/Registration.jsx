import React from 'react'
import { Link } from 'react-router-dom';
import left_arrow from '../../img/leftarrow.png'
import white_left_arrow from '../../img/white_leftarrow.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';
import galka from '../../img/галочка.png'
import upArrow from '../../img/стрелкаВверх.png'
import upArrowSity from '../../img/стрелкаВверхРотейт.png'

const Registration = () => {

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
          document.querySelectorAll('.Who').forEach((e) => {e.style.color = 'white'})
          document.querySelectorAll('.item-country').forEach((e) => {e.style.color = 'black'})
          document.querySelectorAll('.link__todo').forEach((e) => {e.style.color = 'black'})
          document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'white'}) 
          document.querySelector('.left-arrow-1').src = white_left_arrow
          document.querySelector('.entrance-button').style.color = 'white'
          document.querySelector('.sun-moon').src = sun_img
          sometime = false
      } else{
          document.querySelector('.sun-moon').src = sun_img;
          document.querySelector('body').style.background = 'white'
          document.querySelector('.Entrance').style.color = 'black' 
          document.querySelectorAll('.Who').forEach((e) => {e.style.color = 'black'})
          document.querySelectorAll('.black-white').forEach(e => {e.style.color = 'black'})
          document.querySelector('.left-arrow-1').src = left_arrow
          document.querySelector('.entrance-button').style.color = 'black'
          document.querySelector('.sun-moon').src = moon_img
          sometime = true  
      }
  }

  const rabClick = () => {
    document.querySelector('.rabform').style.display = 'block'
    document.querySelector('.specform').style.display = 'none'
  } 

  const specClick = () => {
    document.querySelector('.rabform').style.display = 'none'
    document.querySelector('.specform').style.display = 'block'
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

  const watchSity = () => {
    document.querySelector('.dropdown_sity').classList.toggle('show')
    const upArrow = document.querySelector('.upArrowSity')
    if(upArrow.classList.contains('disabledMenu')){
      upArrow.classList.remove('disabledMenu')
      upArrow.classList.add('activeMenu')
    } else{
      upArrow.classList.add('disabledMenu')
      upArrow.classList.remove('activeMenu')
    }
  }

  const clickFiltersGalka = (e) => {
    e.target.childNodes.forEach((e) => {
        e.classList.toggle('activeFilter')
    })
    console.log(e.target.childNodes)
  }

  const clickFiltersGalkaNow = (e) => {
   e.target.classList.toggle('activeFilter')
  }

  const clickGalka = (el) => {
    document.querySelectorAll('.galka').forEach((e) => {
        e.style.display = 'none'
    })
    el.target.nextElementSibling.style.display = 'block'
  }
  
  return (
    <>


      <div className='Entrance'>
      <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
        <div className="register-blank">
        <Link to='/entrance'><img className="left-arrow-1" src={left_arrow} alt=""/></Link>
            <h1>Регистрация</h1>
            <div className='row'>
            <button className="Who" onClick={rabClick}>Работодатель</button>
            <button className="Who Who1" onClick={specClick}>Специалист</button>
            </div>
            <div className="form specform">
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="выберите город" onClick={watchSity} className='cursorPointer'/>
                  <img src={upArrowSity} className='upArrowSity disabledMenu' onClick={watchSity} readOnly/>
                  <ul className='dropdown_sity' style={{display: 'none'}}>
                    <div className="item-country">
                      <span onClick={clickGalka}>Краснодар</span><img className='galka' src={galka} style={{display: 'block'}} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Нижний новгород</span><img className='galka' src={galka} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Москва</span><img className='galka' src={galka} alt=""/>
                    </div> 
                    <div className="item-country">
                      <span onClick={clickGalka}>Казань</span><img className='galka' src={galka} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Санкт-петербург</span><img className='galka' src={galka} alt=""/>
                    </div>           
                  </ul>
                <input type="text" placeholder="Гражданство"/>
                <input type="text" placeholder="Выберите специальность(и)" className='cursorPointer' onClick={watchSpec}  readOnly/>
                <img src={upArrow} className='upArrow disabledMenu' onClick={watchSpec}/>
                  <ul className='dropdown_specialnost' style={{display: 'none'}}>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автослесарь</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автомеханик</li>
                    </div>
                    <div className="item">
                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                        <li className="link__todo">парковщик</li>
                    </div>
                    <div className="item">
                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                        <li className="link__todo">автодиагност</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автожестянщик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автомаляр</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автоэлектрик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">арматурщик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">администратор</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">мастер приемщик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">инженер по гарантии</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автослесарь-универсал</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">сервисный инженер</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                       <li className="link__todo">механик-моторист</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                       <li className="link__todo">механик по ремонту трансмиссии</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">механик по ремонту ходовой части</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">мастер кузовного цеха</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">шиномонтажник</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">автомойщик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">администратор автомойки</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">полировщик</li>
                    </div>
                    <div className="item">
                      <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka ' src={galka} alt=""/></div>&#8195;
                      <li className="link__todo">специалист детейлинга и химчистки</li>
                    </div>
                  </ul>
                <input type="text" placeholder="Почта"/>
                <input type="text" placeholder="Пароль"/>
                <input type="text" placeholder="Подтверждение пароля"/>
            </div>
            <div class="form rabform" style={{display: 'none'}}>
                  <input type="text" placeholder="Имя"/>
                  <input type="text" placeholder="выберите город" onClick={watchSity}  className='cursorPointer'/>
                  <img src={upArrowSity} className='upArrowSity disabledMenu' onClick={watchSity} readOnly/>
                  <ul className='dropdown_sity' style={{display: 'none'}}>
                    <div className="item-country">
                      <span onClick={clickGalka}>Краснодар</span><img className='galka' src={galka} style={{display: 'block'}} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Нижний новгород</span><img className='galka' src={galka} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Москва</span><img className='galka' src={galka} alt=""/>
                    </div> 
                    <div className="item-country">
                      <span onClick={clickGalka}>Казань</span><img className='galka' src={galka} alt=""/>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Санкт-петербург</span><img className='galka' src={galka} alt=""/>
                    </div>           
                  </ul>
                  <input type="text" placeholder="Адрес основного объекта"/>
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

export default Registration;