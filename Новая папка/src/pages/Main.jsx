import React from 'react'
import { Link } from 'react-router-dom';
import pepper from '../img/pepper.png'
import w_moika from '../img/white_moika.jpeg'
import w_mech from '../img/white_mech.jpeg'
import b_r_pepper from '../img/black-red-pepper.png'
import tg from '../img/telegram.png'
import whatsapp from '../img/whatsapp.png'
import phone from '../img/phone.png'


const Main = () => {
  return (
    <div className="bootstrap-off">


      <div id='main' className="main_header">
        <img className="logo" src={pepper} alt=""/>
            <h1 className='main_logo'>СОУС</h1>
            <ul>
                <li><span>Поиск вакансий и работы.</span></li>
                <li><span>Наем сотрудников и специалистов.</span></li>
                <li><span>Открытая доска объявлений.</span></li>
                <li><span>Срочные заявки.</span></li>
                <li><span>Профессиональный форум.</span></li>
            </ul>
      </div>

      <div className="main_navbar">
        <div className="navbar__items">
          <Link to ='/entrance' className='hover_eff'>Вход</Link>
          <Link to='/info' className='hover_eff'>Информация и новости</Link>
          <a href='#footer' className='hover_eff'>Контакты</a>
        </div>
      </div>

      <div className="main">
        <div className="container1">
          <div className="main__title">Вакансии и Специалисты в сферах: </div>
          <div className="avtoservice">
            <img className="remont__img" src={w_mech} alt="" width="300px"/>
            <div className="some-info">
              <p>Автосервис и Техническое обслуживание авто: </p>
              <ul>
                <li className="list__item">автослесарь</li>
                <li className="list__item">автомеханик</li>
                <li className="list__item">автослесарь - универсал</li>
                <li className="list__item">автодиагност</li>
                <li className="list__item">автожестянщик</li>
                <li className="list__item">автомаляр</li>
                <li className="list__item">автоэлектрик</li>
                <li className="list__item">арматурщик</li>
                <li className="list__item">администратор</li>
                <li className="list__item">мастер приемщик</li>
                <li className="list__item">инженер по гарантии</li>
                <li className="list__item">сервисный инженер</li>
                <li className="list__item">механик-моторист</li>
                <li className="list__item">механик по ремонту трансмиссии</li>
                <li className="list__item">механик по ремонту ходовой части</li>
                <li className="list__item">мастер кузовного цеха</li>
                <li className="list__item">парковщик</li>
                <li className="list__item">шиномонтажник</li>
              </ul>
            </div>
          </div>
          <div className="avtomoika">
            <img className="moika__img" src={w_moika} alt="" width="300px"/>
            <div className="some-info">
              <p>Автомойка и усуги по уходу за автомобилем: </p>
              <ul>
                <li className="list__item">автомойщик</li>
                <li className="list__item">администратор автомойки</li>
                <li className="list__item">полировщик</li>
                <li className="list__item">специалист детейлинга и химчистки</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main__info">
        <div className="container1">
        <div className="grid">
            <div className="text grid__element">
                <img width='180px' src={b_r_pepper} alt=""/><br/>
                <p className="case__info">У нас все анкеты и профили специалистов с фотографиями, с указанием гражданства и с именами – это обязательные условия для регистрации работников на нашем сайте. Так же при указании ими своих контактных номеров, опыта и профессиональных качеств, это всё отображается в их анкетах открыто и в свободном доступе, для зарегистрированных Работодателей.</p>
            </div>
            <div className="grid__element">
                <img width='180px' src={b_r_pepper}  alt=""/><br/>
                <p className="case__info">Регистрация без ввода личных данных, номеров телефонов , ИНН, БИК и прочей бюрократии. Только электронная почта, имя и адрес Вашего объекта . Никакого подвоха нет – регистрация тоже абсолютно бесплатна.</p>
            </div>
            <div className="text grid__element">
                <img width='180px' src={b_r_pepper}  alt=""/><br/>
                <p className="case__info">Вам не нужно платить за доступ к контактам или анкетам соискателей или за пакеты «просмотров анкет». Они все в открытом доступе, с открытыми номерами телефонов (если те их сами указали), с открытыми окнами сообщений и возможностью им бесплатно писать. Эти доступы тоже бесплатны и открыты.</p>
            </div>
            <div className="text grid__element">
                <img width='180px' src={b_r_pepper}  alt=""/><br/>
                <p className="case__info">Удобная и быстрая система поиска, без ненужных граф и лишних настроек в фильтрах. Именно потому что у нас профильное сообщество, здесь нет гигантских объёмов информации, среди которой надолго долго перебирать, отсеивать кучу спама и искать нужное.</p>
            </div>
            <div className="text grid__element">
                <img width='180px' src={b_r_pepper}  alt=""/><br/>
                <p className="case__info">Подача и размещение объявлений – бесплатны.</p>
            </div>
            <div className="text grid__element">
                <img width='180px' src={b_r_pepper}  alt=""/><br/>
                <p className="case__info">Возможность раз в сутки поднимать Ваше объявление и обновлять его актуальность. Не нужно платить за увеличение просмотров или поднятия объявлений. Их и так увидят все специалисты на сайте, после поднятия они и так будут в «ТОПе объявлений». Эти функции полностью бесплатны.</p>
            </div>
        </div>
        </div>  
      </div>

      <div id='footer' className="footer">
        <div className="container1">
          <div className="footbar">
              <div className="footer__logo footer__item">
                <a href='#main'><img className='footer_img' src={pepper} alt=""/></a>
              </div>
              <div className="reserve_number footer__item">
                <div className="reserve">СОУС</div>
              </div>
              <div className="footer__contacts footer__item">
                <ul className="contacts__logo">
                  <a href="#" className="link-logo__tg link-logo"><li><img width="60px" src={tg} alt="" className="link__tg"/></li></a>
                  <a href="#" className="link-logo__wa link-logo"><li><img width="60px" src={whatsapp} alt="" className="link__wa"/></li></a>
                  <a href="#" className="link-logo__nb link-logo"><li><img width="60px" src={phone} alt="" className="link__nb"/></li></a>
                </ul>
              </div>  
          </div>  
        </div>
      </div>  


    </div>
  );
}

export default Main;
