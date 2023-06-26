import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import News from '../components/News'
const Info = () => {



    const [news, setNews] = useState([
        {
            id: 1, 
            heading: 'Новость', 
            body: 'Текст новости', 
            date: new Date().toLocaleString(),
        },
        {
            id: 2, 
            heading: 'Новость', 
            body: 'Текст новости', 
            date: new Date().toLocaleString(),
        },
        {
            id: 3, 
            heading: 'Новость', 
            body: 'Текст новости', 
            date: new Date().toLocaleString(),
        },
        {
            id: 4, 
            heading: 'Новость', 
            body: 'Текст новости', 
            date: new Date().toLocaleString(),
        },
        {
            id: 5, 
            heading: 'Новость', 
            body: 'Текст новости', 
            date: new Date().toLocaleString(),
        },
      ])


    return (
        <div>

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


            <div className='container'>
                <News news={news}/>
            </div>

        </div>
    );

}

export default Info;