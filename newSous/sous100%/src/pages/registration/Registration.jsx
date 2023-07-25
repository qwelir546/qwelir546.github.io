import React, { useState, useEffect } from 'react'
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
    document.querySelectorAll('input').forEach((e) => { e.value = '' })
  } 

  const specClick = () => {
    document.querySelector('.rabform').style.display = 'none'
    document.querySelector('.specform').style.display = 'block'
    document.querySelectorAll('input').forEach((e) => { e.value = '' })
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
    const upArrow = document.querySelector('.upArrowSity_rab')
    if(upArrow.classList.contains('disabledMenu')){
      upArrow.classList.remove('disabledMenu')
      upArrow.classList.add('activeMenu')
    } else{
      upArrow.classList.add('disabledMenu')
      upArrow.classList.remove('activeMenu')
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

  const [spec, setSpec] = useState([])

  useEffect(() => {
    const specArray = spec.length > 0 ? spec.join(', ') : '';
    document.querySelector('.specArray').value = specArray;
  }, [spec]);


  const clickFiltersGalka = (e) => {
    e.target.previousElementSibling.childNodes[0].classList.toggle('activeFilter')
    if(e.target.previousElementSibling.childNodes[0].classList.contains('activeFilter')){
      const newSpec = e.target.innerHTML;
      setSpec((prevSpec) => {
        const updatedSpec =  Array.isArray(prevSpec) ? prevSpec.concat(newSpec) : [newSpec];
        document.querySelector('.specArray').value = updatedSpec.join(',  ');
        return updatedSpec;
      })

    } else {
      setSpec(prevSpec => prevSpec.filter(item => item !== e.target.innerHTML));
    }
  }

  const clickGalka = (el) => {
    document.querySelector('.changeSity_spec').value = el.target.innerHTML
    document.querySelector('.changeSity').value = el.target.innerHTML
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
                <input type="text" placeholder="выберите город" className='changeSity_spec' readOnly/>
                  <img src={upArrowSity} className='upArrowSity disabledMenu' onClick={watchSitySpec}/>
                  <ul className='dropdown_sity__spec' style={{display: 'none'}}>
                    <div className="item-country">
                      <span onClick={clickGalka}>Краснодар</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Нижний новгород</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Москва</span>
                    </div> 
                    <div className="item-country">
                      <span onClick={clickGalka}>Казань</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Санкт-петербург</span>
                    </div>           
                  </ul>
                <input type="text" placeholder="Гражданство"/>
                <input type="text" placeholder="Выберите специальность(и)" className='specArray' readOnly/>
                <img src={upArrow} className='upArrow disabledMenu' onClick={watchSpec}/>
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
                <input type="text" placeholder="Почта"/>
                <input type="text" placeholder="Пароль"/>
                <input type="text" placeholder="Подтверждение пароля"/>
            </div>
            <div class="form rabform" style={{display: 'none'}}>
                  <input type="text" placeholder="Имя"/>
                  <input type="text" placeholder="выберите город" className='cursorPointer changeSity'/>
                  <img src={upArrowSity} className='upArrowSity_rab disabledMenu' onClick={watchSity} readOnly/>
                  <ul className='dropdown_sity' style={{display: 'none'}}>
                    <div className="item-country">
                      <span onClick={clickGalka}>Краснодар</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Нижний новгород</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Москва</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Казань</span>
                    </div>
                    <div className="item-country">
                      <span onClick={clickGalka}>Санкт-петербург</span>
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