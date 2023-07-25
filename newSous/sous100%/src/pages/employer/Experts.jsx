import React, { useState, useMemo } from 'react';
import filter_icon from '../../img/filters.png'
import galka from '../../img/галочка.png'
import Rabotniki from '../../components/employer/Rabotniki';
import EmpNavbar from '../../components/employer/EmpNavbar';
import EmpNavbarMobile from '../../components/employer/EmpNavbarMobile';
import geo from '../../img/geo.png'
import sun_img from '../../img/sun.png';
import moon_img from '../../img/moon.png';


const Experts = () => {

    const onClickFilters = (e) => {
        e.currentTarget.children[2].classList.toggle('show');
    }

    const [rabotniki, setRabotniki] = useState([
        {id: 1, spec: 'арматурщик', exp: '2 года', nat: 'Узбекистан'},
        {id: 2, spec: 'автослесарь', exp: '2 года', nat: 'Узбекистан'},
        {id: 3, spec: 'автомаляр', exp: '2 года', nat: 'Узбекистан'},
        {id: 4, spec: 'механик', exp: '2 года', nat: 'Узбекистан'},
        {id: 5, spec: 'шиномонтаж', exp: '2 года', nat: 'Узбекистан'},
        {id: 28, spec: 'автослесарь', exp: '2 года', nat: 'Узбекистан'},
        {id: 83, spec: 'автомаляр', exp: '2 года', nat: 'Узбекистан'},
        {id: 94, spec: 'механик', exp: '2 года', nat: 'Узбекистан'},
        {id: 75, spec: 'шиномонтаж', exp: '2 года', nat: 'Узбекистан'},
    ])

    const [bid, setBid] = useState([
        {id: 1, spec: 'автомойщик', address: 'ул.Воинская д.3', cost: '40-60т.р', phone: '8(999)-999-9999'},
        {id: 2, spec: 'инженер', address: 'ул.Воинская д.3', cost: '40-60т.р', phone: '8(999)-999-9999'},
        {id: 3, spec: 'администратор', address: 'ул.Воинская д.3', cost: '40-60т.р', phone: '8(999)-999-9999'},
    ])

    const [searchQuery, setSearhQuery] = useState('')
    const sortdedRabotniki = useMemo(() => {
        return rabotniki.filter(rabotnik => rabotnik.spec.includes(searchQuery));
    }, [searchQuery, setRabotniki]);
 
    const [isActive, setIsActive] = useState(false);

    let flag = true
    const bookmarksClick = (e) => {
        if(flag){
            document.querySelector('.experts').style.display = 'none'
            document.querySelector('.bookmarks').style.display = 'block'
            flag = false
            e.currentTarget.childNodes[0].innerHTML = 'Специалисты'
        } else {
            document.querySelector('.experts').style.display = 'block'
            document.querySelector('.bookmarks').style.display = 'none'
            flag = true
            e.currentTarget.childNodes[0].innerHTML = 'Закладки'
        }
    };

    const clickFiltersGalka = (e) => {
        e.target.childNodes.forEach((e) => {
            e.classList.toggle('activeFilter')
        })
        console.log(e.target.childNodes)
    }

    const clickFiltersGalkaNow = (e) => [
       e.target.classList.toggle('activeFilter')
    ]

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

    const clickGeo = (e) => {
        console.log(e)
        e.currentTarget.children[1].classList.toggle('show');
    }

    const clickGalka = (el) => {
        document.querySelectorAll('.galka').forEach((e) => {
            e.style.display = 'none'
        })
        console.log(el)
        el.target.nextElementSibling.style.display = 'block'
    }

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

    return (

        <div className='Experts'>


            <img className='sun-moon' src={moon_img} onClick={soonmoonFunc}/>
            <EmpNavbar/>
            <EmpNavbarMobile/>

            <h1>Специалисты</h1>


            <div className="container body">

                <div className="row alignment">

                    <div className='col-sm-4 col-12 button searchButton'>
                        <div className="search">
                            <input 
                                type="text" 
                                placeholder="Поиск по специальности"
                                value={searchQuery}
                                onChange={e => {setSearhQuery(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className='col-sm-3 col-3 button'>
                        <ul className="link" onClick={onClickFilters}>
                        <img src={filter_icon} alt="" class="filters" />&#8194;<span className='filtersSpan'>Фильтры</span>
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
                    <div className='col-sm-1 col-2 buttonGeo'>
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
                    <div className='col-sm-3 col-5 button'>
                        <div className='my-advertisement' onClick={bookmarksClick}>
                            <span className="advertisement__span">Закладки</span>
                        </div>
                    </div>
                    
                </div>

                <div className='experts'>
                <Rabotniki className='rabotniki' rabotniki={sortdedRabotniki}/> 
                </div>


                <div className='bookmarks'>

                </div>

            </div>
        </div>
    );

}

export default Experts;