import React, { useState } from "react";
import logo from '../img/logo.jpg';
import delivery from '../img/delivery.png';
import calendar from '../img/calendar.png';
import shoppingList from '../img/shopping-list.png';
import money from '../img/money.png';

function Header(){
    return (
        <header>
            <section className="justFlex secFirst">{/* первое навигационное меню */}
            <div className="justFlex alignItems block1">
                <img className="img" src={logo} alt="logo"/>
                <p className="text">Гофрокартон и упаковка оптом</p>
            </div>
            <div className="justFlex alignItems block2">
                <span className="material-symbols-outlined  locationOnIcon colorOrange">location_on</span>
                <p className="text">Московская область, Раменский р-н, Бронницы, с. Михеево</p>
            </div>
            <div className="block3">
            <p className="textBold">+7 (495) 545-47-88</p>
            <aside className="justFlex alignItems">
                    <span className="material-symbols-outlined colorOrange scheduleIcon">schedule</span> 
                    <p className="text">Пн-пт: 9:00 - 18:00</p>
            </aside>
            </div>
            <div className="feedback block4">{/*Обратная связь input и почта */}
                <input  placeholder="Заказать обратный звонок"/>
                <aside className="justFlex alignItems">
                    <span className="material-symbols-outlined mailIcon colorOrange">mail</span>
                    <p className="text">zakaz@kartonika.ru</p>
                </aside>
            </div>
            </section>
            <section className="section2 justFlex">{/* второе навигационное меню */}
            <nav>
                <ul className="justFlex">
                    <a href="/poducts"><li>ПРОДУКЦИЯ</li></a>
                    <a href="/production"><li>НАШЕ ПРОИЗВОДСТВО</li></a>
                    <a href="/services"><li>УСЛУГИ</li></a>
                    <a href="/delivery"><li>ДОСТАВКА</li></a>
                    <a href="/contacts"><li>КОНТАКТЫ</li></a>
                </ul>
            </nav>
            <aside className="justFlex alignItems inpSearchBlock">
                <input className="inpSearch" placeholder="Поиск товара"/>
                <span className="material-symbols-outlined searchIcon colorOrange">search</span>
            </aside>
            </section>
            <section className="banner">
                <div>
                    <h1 className="bannerTitle">СОБСТВЕННОЕ ПРОИЗВОДСТВО ГОФРОКАРТОНА,<br/> ТАРЫ И УПАКОВКИ</h1>
                    <ul>
                        <li className="bannerText">Работаем с 2008 года</li>
                        <li className="bannerText">Производим 80 000 м² картона в сутки</li>
                        <li className="bannerText">Цены на 15% ниже рыночных</li>
                    </ul>
                    <button className="btnBanner">Рассчитать заказ</button>
                </div>
            </section>
            <section className="aboutUs justFlex" >
                <aside className="abUsBlock1">
                    <div className="abUsBlock11">
                        <div className="justFlex alignItems">
                            <p className="numExp">13</p>
                            <p className="textExp">лет <br/>опыта</p>
                        </div>
                        <p className="abUsBlock11text">в производстве и поставках гофрокартона, тары и упаковки крупными и малыми партиями</p>
                    </div>
                </aside>
                <aside className="abUsBlock2">
                    <div className="justFlex">
                        <div className="blockAU blockAU1">
                            <img src={calendar} alt="logo"/>
                            <p className="exptext1">ГАРАНТИЯ СРОКОВ</p>
                            <p className="exptext2">Сроки выполнения заказа от 3 дней! <br/>Возможна поставка в день обращения при наличии</p>
                        </div>
                        <div className="blockAU blockAU2">
                            <img src={shoppingList} alt="logo"/>
                            <p className="exptext1">ВСЕГДА В НАЛИЧИИ</p>
                            <p className="exptext2">Временное хранение продукции <br/>на нашем складе. Возможен быстрый самовывоз.</p>
                        </div>
                    </div>
                    <div className="justFlex">
                        <div className="blockAU blockAU3">
                            <img src={money} alt="logo"/>
                            <p className="exptext1">ЛУЧШАЯ ЦЕНА НА РЫНКЕ</p>
                            <p className="exptext2">3-слойный гофрокартон – от 19 руб/м2 <br/>5-слойный гофрокартон – от 29 руб/м2</p></div>
                        <div className="blockAU blockAU4">
                            <img src={delivery} alt="deliveryLogo"/>
                            <p className="exptext1">ДОСТАВКА ДО КЛИЕНТА</p>
                            <p className="exptext2">Малыми и большими партиями, <br/>на поддонах или без (валом)</p>
                        </div>
                    </div>
                </aside>
            </section>
        </header>
    );
}
export default Header;
