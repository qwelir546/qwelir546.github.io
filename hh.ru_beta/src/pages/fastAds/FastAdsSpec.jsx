import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import filter_icon from '../../img/filters.png'
import geo from '../../img/geo.png'
import galka from '../../img/галочка.png'
import FastSpeci from '../../components/fast/FastSpeci';
import MyBidsFastSpec from '../../components/fast/MyBidsFastSpec';


const Ads = () => {

    const onClickFilters = (e) => {
        e.currentTarget.children[2].classList.toggle('show');
    }

    const onClickGeo = (e) => {
        e.currentTarget.children[1].classList.toggle('show');
    }

    const [speci, setSpeci] = useState([
        {id: 1, spec: 'арматурщик', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 2, spec: 'автослесарь', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 3, spec: 'автомаляр', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 4, spec: 'механик', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 5, spec: 'шиномонтаж', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 6, spec: 'автомойщик', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 7, spec: 'инженер', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 8, spec: 'администратор', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
        {id: 9, spec: 'полировщик', address: 'ул. Народная д.2', phone: '8(913)-463-6355'},
      ])

    const [bid, setBids] = useState([
        {id: 1, spec: 'арматурщик', name: 'Олег', nat: 'Узбекистан'},
        {id: 2, spec: 'автослесарь', name: 'Олег', nat: 'Узбекистан'},
        {id: 3, spec: 'автомаляр', name: 'Олег', nat: 'Узбекистан'},
        {id: 4, spec: 'механик', name: 'Олег', nat: 'Узбекистан'},
        {id: 5, spec: 'шиномонтаж', name: 'Олег', nat: 'Узбекистан'},
      ])

    const [searchQuery, setSearhQuery] = useState('')
    const sortdedRabotniki = useMemo(() => {
        return speci.filter(rabotnik => rabotnik.spec.includes(searchQuery));
    }, [searchQuery, setSpeci]);

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    };


    return (

        <div>

            <div className="navbar">
                <ul className="navbar_menu">
                <li className="navbar__element"><Link to='/profile_spec'>Личный кабинет</Link></li>
                <li className="navbar__element"><Link to='/ads_spec'>Объявления</Link></li>
                <li className="navbar__element"><Link to='/fast_ads_spec'>Срочные заявки</Link></li>
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


                <FastSpeci className='rabotniki' isActive={isActive} speci={sortdedRabotniki}/>
                <MyBidsFastSpec className='myAdvertisement' isActive={isActive} speci={speci} bids={bid}/>               

            </div>
        </div>
    );

}

export default Ads;