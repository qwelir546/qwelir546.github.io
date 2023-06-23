import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import filter_icon from '../../img/filters.png'
import geo from '../../img/geo.png'
import galka from '../../img/галочка.png'
import Rabotniki from '../../components/Rabotniki';
import MyBids from '../../components/MyBids';

const Ads = () => {

    const onClickFilters = (e) => {
        e.currentTarget.children[2].classList.toggle('show');
    }

    const onClickGeo = (e) => {
        e.currentTarget.children[1].classList.toggle('show');
    }

    const [rabotniki, setRabotniki] = useState([
        {id: 1, spec: 'арматурщик', name: 'Олег', nat: 'Узбекистан'},
        {id: 2, spec: 'автослесарь', name: 'Олег', nat: 'Узбекистан'},
        {id: 3, spec: 'автомаляр', name: 'Олег', nat: 'Узбекистан'},
        {id: 4, spec: 'механик', name: 'Олег', nat: 'Узбекистан'},
        {id: 5, spec: 'шиномонтаж', name: 'Олег', nat: 'Узбекистан'},
        {id: 6, spec: 'автомойщик', name: 'Олег', nat: 'Узбекистан'},
        {id: 7, spec: 'инженер', name: 'Олег', nat: 'Узбекистан'},
        {id: 8, spec: 'администратор', name: 'Олег', nat: 'Узбекистан'},
        {id: 9, spec: 'полировщик', name: 'Олег', nat: 'Узбекистан'},
      ])

      const [bid, setBids] = useState([
        {id: 1, spec: 'арматурщик', address: 'Олег', phone: 'Узбекистан'},
        {id: 2, spec: 'автослесарь', address: 'Олег', phone: 'Узбекистан'},
        {id: 3, spec: 'автомаляр', address: 'Олег', phone: 'Узбекистан'},
        {id: 4, spec: 'механик', address: 'Олег', phone: 'Узбекистан'},
        {id: 5, spec: 'шиномонтаж', address: 'Олег', phone: 'Узбекистан'},
      ])

      const [searchQuery, setSearhQuery] = useState('')
      const sortdedRabotniki = useMemo(() => {
        return rabotniki.filter(rabotnik => rabotnik.spec.includes(searchQuery));
      }, [searchQuery, setRabotniki]);


      const myAdvertisement = document.querySelector('.myAdvertisement');
      const rabotniki_class = document.querySelector('.rabotniki');
      const swapitems = document.querySelectorAll('.swapitem');
      const gridmenu = document.querySelector('.gridmenu');

      let flag = true
      const changeAd = function(e) {
        if(flag){
            myAdvertisement.e.style.display = 'block';
            rabotniki_class.style.display = 'none';
            swapitems.forEach(e => { e.style.display = 'none'; });
            gridmenu.style.display = 'block';
            e.target.innerHTML = 'Специалисты';
            flag = false;
        } else {
            myAdvertisement.style.display = 'none';
            rabotniki_class.e.style.display = 'block';
            swapitems.forEach(e => { e.style.display = 'block'; });
            gridmenu.style.display = 'none';
            e.target.innerHTML = 'Мои объявления';
            flag = true;
        }
      }

      const [isActive, setIsActive] = useState(false);

      const handleClick = event => {
        setIsActive(current => !current);
      };


    //   const specRabotniki = Array(document.querySelectorAll('.rabotnik'));
    
    //   console.log(Array.isArray(specRabotniki));
    //   console.log(specRabotniki);
    //   const sortedByflagsRabotniki = useMemo(() => {
    //     return specRabotniki.filter(e => e.children[0].className = "flag active_flag");
    //   }, [rabotniki, setRabotniki]);

    return (

        <div>

            <div className="navbar">
                <ul className="navbar_menu">
                <li className="navbar__element"><Link to='/profile_rab'>Личный кабинет</Link></li>
                <li className="navbar__element"><Link to='/ads_rab'>Объявления</Link></li>
                <li className="navbar__element"><Link to=''>Срочные заявки</Link></li>
                <li className="navbar__element"><Link to=''>Форум</Link></li>
                <li className="navbar__element"><Link to='/info'>Новости и информация</Link></li>
                <li className="navbar__element"><Link to='/'>Выход</Link></li>
                </ul>
            </div>
            <div className="container body">

                <div className="row alignment">

                    <div className={isActive ? "col-3 none" : 'col-3'}>
                        <ul className="link" onClick={onClickFilters}>
                        <img src={filter_icon} alt="" class="filters" />&#8194;<span>Фильтры</span>
                            <div className="dropdown-menu" onClick={e => {e.stopPropagation()}}>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem, ipsum dolor.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem, ipsum.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem, ipsum.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem ipsum dolor sit.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem, ipsum dolor.</li>
                                </div>
                                <div className="item">
                                    <div className="link__icon"><img src={galka} alt=""/></div>&#8195;
                                    <li className="link__todo">Lorem, ipsum.</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className={isActive ? "col-5 none" : 'col-5'}>
                        <div className="search">
                            <input 
                                type="text" 
                                placeholder="Поиск по специальности"
                                value={searchQuery}
                                onChange={e => {setSearhQuery(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className={isActive ? "col-1 none" : 'col-1'}>
                        <ul className="sity" onClick={onClickGeo}><img src={geo} alt="" class="filters"/>
                            <div className="dropdown-menu-country">
                                <div className="item-country">
                                    <span>Краснодар</span><img src="../../img/галочка.png" alt=""/>
                                </div>
                                <div className="item-country">
                                    <span>Нижний новгород</span><img src="../../img/галочка.png" alt=""/>
                                </div>
                                <div className="item-country">
                                    <span>Москва</span><img src="../../img/галочка.png" alt=""/>
                                </div>
                                <div className="item-country">
                                    <span>Казань</span><img src="../../img/галочка.png" alt=""/>
                                </div>
                                <div className="item-country">
                                    <span>Санкт-петербург</span><img src="../../img/галочка.png" alt=""/>
                                </div>
                            </div>
                            </ul>
                    </div> 
                    <div className={isActive ? "col-3 none" : 'col-3'}>
                        <div className='my-advertisement' onClick={handleClick}>
                            <span className="advertisement__span">Мои объявления</span>
                        </div>
                    </div>


                    <div className={isActive ? "gridmenu" : 'none'}>
                    
                        <div className="my-advertisement">
                            <span className="advertisement__span">Добавить объявление</span>
                        </div>
                        <div className="my-advertisement">
                            <span className="advertisement__span">Закладки</span>
                        </div>
                        <div className="my-advertisement" onClick={handleClick}>
                            <span className="advertisement__span">Мои объявления</span>
                        </div>

                    </div>
                  
                </div>


                <Rabotniki className='rabotniki' isActive={isActive} rabotniki={sortdedRabotniki}/>
                <MyBids className='myAdvertisement' isActive={isActive} rabotniki={rabotniki} bids={bid}/>
               


            </div>
        </div>
    );

}

export default Ads;