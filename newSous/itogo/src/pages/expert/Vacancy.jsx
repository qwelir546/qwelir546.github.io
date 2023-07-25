import React, {useState, useMemo} from "react";
import ExpNavbar from '../../components/expert/ExpNavbar';
import Experts_ads from '../../components/expert/exp_ads'
import ExpNavbarMobile from '../../components/expert/ExpNavbarMobile';
import MyBids_exp from '../../components/expert/MyBids_exp'
import geo from '../../img/geo.png'
import galka from '../../img/галочка.png'
import filter_icon from '../../img/filters.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';

function Vacancy() {

  const [ads, setAds] = useState([
    {id: 1, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 2, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 456, name: 'straura', text: 'aap aapapapap aapapapap aapapapap aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 254, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 14, name: 'straura', text: 'aapapapap aapapapapap aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 42, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 71, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 92, name: 'straura', text: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap aapapapap aapapapapaapapapap aapapapap aapapapap aapapapapaapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
  ])

  const [myadsSpec, setmyadsSpec] = useState([
    {id: 1, myName: 'straura', mytext: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 254, myName: 'straura', mytext: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
    {id: 2594, myName: 'straura', mytext: 'aapapapap aapapapapaapapapap aapapapap aapapapap aapapapap'},
  ])

  const [ActiveAds, setActiveAds] = useState(true);
  const [ActiveMyAds, setActiveMyAds] = useState(false);
  const [Bookmarks, setBookmarks] = useState(false);
  
  const handleClickAds = (e) => {
    setActiveMyAds(current => current = false);
    setBookmarks(current => current = false);
    setActiveAds(current => current = true);

    document.querySelector('.buttonBookmarks').classList.remove('menuAnimation')
    document.querySelector('.dopMenu').style.display = 'none'


    document.querySelectorAll('.button').forEach(e => {
      if(e.classList.contains('menuAnimation')) e.classList.remove('menuAnimation');
    })
    if(e.target.classList.contains('button')){
      e.target.classList.add('menuAnimation')
    } else {
      e.target.parentElement.classList.add('menuAnimation')
    }

  };

  const handleClickMyAds = (e) => {
    setActiveMyAds(current => current = true);
    setBookmarks(current => current = false);
    setActiveAds(current => current = false);

    document.querySelector('.buttonBookmarks').classList.remove('menuAnimation')
    document.querySelector('.dopMenu').style.display = 'block'

    document.querySelectorAll('.button').forEach(e => {
      if(e.classList.contains('menuAnimation')) e.classList.remove('menuAnimation');
    })
    if(e.target.classList.contains('button')){
      e.target.classList.add('menuAnimation')
    } else {
      e.target.parentElement.classList.add('menuAnimation')
    }
  };

  const handleClickBookmarks = (e) => {

    setActiveMyAds(current => current = false);
    setBookmarks(current => current = true);
    setActiveAds(current => current = false);

    document.querySelectorAll('.button').forEach(e => {
      if(e.classList.contains('menuAnimation')) e.classList.remove('menuAnimation');
    })
    if(e.target.classList.contains('buttonBookmarks')){
      e.target.classList.add('menuAnimation')
    } else {
      e.target.parentElement.classList.add('menuAnimation')
    }
  };

  const handleClicFilters = () => {
    setActiveMyAds(current => current = false);
    setBookmarks(current => current = false);
    setActiveAds(current => current = true);

    document.querySelectorAll('.button').forEach(e => {
      if(e.classList.contains('menuAnimation')) e.classList.remove('menuAnimation');
    })
    document.querySelectorAll('.button')[0].classList.add('menuAnimation');
    document.querySelectorAll('.button')[2].classList.add('menuAnimation');
    document.querySelector('.dopMenu').style.display = 'none';
  };
  
  const onClickFilters = (e) => {
  e.currentTarget.children[2].classList.toggle('show');
  }

  const addAds = () => {
    setActiveMyAds(current => current = true);
    setBookmarks(current => current = false);
    setActiveAds(current => current = false);

    document.querySelector('.buttonBookmarks').classList.remove('menuAnimation')
    document.querySelectorAll('.button').forEach(e => {
      if(e.classList.contains('menuAnimation')) e.classList.remove('menuAnimation');
    })
    document.querySelectorAll('.button')[1].classList.add('menuAnimation')
    document.querySelectorAll('.button')[3].classList.add('menuAnimation')

    document.querySelector('.adsForm').style.display = 'block'
    const forAddADs = document.createElement('div')
    forAddADs.classList.add('forAddADs')
    forAddADs.setAttribute('style', 'position:absolute; width:100%; height:200%; background:#000; z-index:1000000; opacity:0.5;')
    document.querySelector('html').prepend(forAddADs)
  }
  
  const addNewAds = () => {


    const textInput = document.querySelector('.text').value
    const name = document.querySelector('.name').value
    if(textInput !== '' && name !== ''){
        const newBid = {
            id: Date.now(), 
            myName: name,
            mytext: textInput,
        }
        setmyadsSpec([...myadsSpec, newBid])
        document.querySelector('.adsForm').style.display = 'none';
        document.querySelectorAll('.forAddADs').forEach((e) => {
            e.remove();
            document.querySelector('.text').value = '';
            document.querySelector('.name').value = '';
        })
    } else {
        alert('пожалуйста, заполните все необходимые поля')
    }


  }

  const removeForm = () => {
        document.querySelector('.text').value = ''
        document.querySelector('.adsForm').style.display = 'none';
        document.querySelectorAll('.forAddADs').forEach((e) => {
            e.remove();
        })
  }

  const clickGeo = (e) => {
    console.log(e)
    e.currentTarget.children[1].classList.toggle('show');
  }

  const clickGalka = (el) => {
    document.querySelectorAll('.galka').forEach((e) => {
        e.style.display = 'none'
    })
    el.target.nextElementSibling.style.display = 'block'
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

  const removeActiveGalka = () => {
  document.querySelectorAll('.filetrsGalka').forEach((e) => {
      e.classList.remove('activeFilter')
  })
  }

  const addActiveGalka = () => {
  document.querySelectorAll('.filetrsGalka').forEach((e) => {
      e.classList.add('activeFilter')
  })
  }

  let sometime = true;
  const soonmoonFunc = () => {
    if(sometime){
      document.querySelector('body').style.background = 'black'
      document.querySelector('.navbar_menu').style.background = 'black'
      document.querySelector('.sun-moon').src = sun_img;
      sometime = false
    } else{
      document.querySelector('body').style.background = 'white'
      document.querySelector('.navbar_menu').style.background = 'white'
      document.querySelector('.sun-moon').src = moon_img;
      sometime = true
    }
  } 

  return (

      <div className="Ads_exp">

        <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
        <ExpNavbar/>
        <ExpNavbarMobile/>

        <div className="container">
          <div className="row">

            <div className='backOpacity col-lg-2 col-4 button menuAnimation buttonNuN' onClick={handleClickAds}>
              <span>Вакансии</span>
            </div>
            <div className='col-lg-3 col-4 backOpacity buttonFilters buttonNuN' onClick={handleClicFilters}>
                        <ul className="link" onClick={onClickFilters}>
                        <img src={filter_icon} alt="" class="filters" />&#8194;<span>Фильтры</span>
                            <div className="dropdown-menu" style={{columns: '2'}} onClick={e => {e.stopPropagation()}}>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автослесарь</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автомеханик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">парковщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автодиагност</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автожестянщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автомаляр</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автоэлектрик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">арматурщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">администратор</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">мастер приемщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">инженер по гарантии</li>
                                </div>
                                <button className='filtersButton' onClick={removeActiveGalka}>Сбросить все</button>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автослесарь-универсал</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">сервисный инженер</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">механик-моторист</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">механик по ремонту трансмиссии</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">механик по ремонту ходовой части</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">мастер кузовного цеха</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">шиномонтажник</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">автомойщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">администратор автомойки</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">полировщик</li>
                                </div>
                                <div className="item">
                                    <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">специалист детейлинга и химчистки</li>
                                </div>
                                <button className='filtersButton' onClick={addActiveGalka}>Выбрать все</button>
                            </div>
                        </ul>
            </div>
            <div className='col-1 backOpacity buttonGeo buttonNuN'>
                <ul className="sity" onClick={clickGeo}><img src={geo} alt="" class="filters"/>
                  <div className="dropdown-menu-country">
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
                  </div>
                </ul>
            </div>
            <div className='col-lg-3 col-11 buttonMy backOpacity button buttonNuN' onClick={handleClickMyAds}>
              <span>Мои объявления</span>
            </div>

            <div className="mobileLitleMenu" style={{display: 'none'}}>
              <div className="row">
                <div className='col-5 buttonFilters' onClick={handleClicFilters}>
                  <ul className="link" onClick={onClickFilters}>
                            <img src={filter_icon} alt="" class="filters" />&#8194;<span className="filtersSpan">Фильтры</span>
                                <div className="dropdown-menu" style={{columns: '2'}} onClick={e => {e.stopPropagation()}}>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автослесарь</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автомеханик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">парковщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автодиагност</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автожестянщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автомаляр</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автоэлектрик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">арматурщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">администратор</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">мастер приемщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">инженер по гарантии</li>
                                    </div>
                                    <button className='filtersButton filtersButtonNone' onClick={removeActiveGalka}>Сбросить все</button>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автослесарь-универсал</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">сервисный инженер</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">механик-моторист</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">механик по ремонту трансмиссии</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">механик по ремонту ходовой части</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">мастер кузовного цеха</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">шиномонтажник</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">автомойщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">администратор автомойки</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">полировщик</li>
                                    </div>
                                    <div className="item">
                                        <div onClick={clickFiltersGalka} className="link__icon"><img onClick={clickFiltersGalkaNow} className='filetrsGalka activeFilter' src={galka} alt=""/></div>&#8195;
                                        <li className="link__todo">специалист детейлинга и химчистки</li>
                                    </div>
                                    <button className='filtersButton filtersButtonMobile' style={{display: 'none'}} onClick={removeActiveGalka}>Сбросить все</button>
                                    <button className='filtersButton' onClick={addActiveGalka}>Выбрать все</button>
                                </div>
                  </ul>
                </div>
                <div className="col-1"></div>
                <div className='col-5 buttonGeo'>
                    <ul className="sity" onClick={clickGeo}><img src={geo} alt="" class="filters"/>
                      <div className="dropdown-menu-country">
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
                      </div>
                    </ul>
                </div>
              </div>
              <div className= 'col-12 button menuAnimation' onClick={handleClickAds}>
                <span>Оъявления</span>
              </div>
              <div className= 'col-12 button buttonMy' onClick={handleClickMyAds}>
                <span>Мои объявления</span>
              </div>
            </div>

            <div className="dopMenu" style={{display: 'none'}}>
              <div className="row">
                <div className="col-3 NonInMobile"/>
                  <div className='col-lg-3 col-5 buttonAddAds' onClick={addAds}>
                    <span>Новое объявление</span>
                  </div>
                  <div className="col-1"/>
                  <div className="col-lg-3 col-5 buttonBookmarks" onClick={handleClickBookmarks}>
                    <span>Закладки</span>
                  </div>
                </div>
            </div>

            <div className='adsForm'>
                        <p>Новое объявление</p>
                        <input className="name" placeholder="Название объявления (тема)"/>
                        <textarea className='text' type='text' placeholder='Текст объявления:'/>
                        <button onClick={addNewAds}>Добавить объявление</button>
                        <button onClick={removeForm}>Отмена</button>
            </div>

            <div className={ActiveAds ? 'block' : 'none'}>
              <Experts_ads Ads_exp={ads}/>
            </div>
            <div className={ActiveMyAds ? 'block' : 'none'}>
              <MyBids_exp ads={myadsSpec}/>
            </div>
            <div className={Bookmarks ? 'block' : 'none'}>
              
            </div>

          </div>
        </div>

      </div>
    );
}
  
  export default Vacancy;