import React, { useEffect } from 'react';
import './Main.css';
import logo from "../../assets/image/Logo.png";
import logotext from "../../assets/image/LogoText.png";
import back from "../../assets/image/back.png";
import back1 from "../../assets/image/back1.png";
import { APPLIC_ROUTE } from '../../utils/const';
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/interfase/MyButton/MyButton";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/image/1.jpg";
import img2 from "../../assets/image/2.jpg";
import img3 from "../../assets/image/3.jpg";
import img4 from "../../assets/image/4.jpg";
import img5 from "../../assets/image/5.jpg";

const Main = () => {
    
    const navigate = useNavigate();
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    
    return (
        <div class="mainPage" >
            <div>

            <div class="homeRR">
            <img src={back} alt="back" class="backMain" />
                <img src={back1} alt="back1" class="back1Main" />
            <div id="containerRR" class="containerRR">
                <p>Что мы разрабатываем?</p>
                <div id="flipRR">
                    <div>
                    <span class="word">Разработка мобильных приложений</span>
                    </div>
                    <div>
                    <span class="word">Разработка веб-сервисов</span>
                    </div>
                    <div>
                    <span class="word">Разработка комплексных решений</span>
                    </div>
                    <div>
                    <span class="word">Техническую документацию</span>
                    </div>
                    <div>
                    <span class="word">Прототипы интерфейсов</span>
                    </div>
                    <div>
                    <span class="word">Дизайн интерфейсов</span>
                    </div>
                </div>
            </div>
            </div>


                {/*2/ <section class="homeSection">
                <div class="animationText">
                    <p>Что мы разрабатываем?</p>
                    <p>
                        <span class="word wisteria">Разработка мобильных приложений</span>
                        <span class="word belize">Разработка веб-сервисов</span>
                        <span class="word pomegranate">Разработка комплексных решений</span>
                        <span class="word green">Техническую документацию</span>
                        <span class="word midnight">Прототипы интерфейсов</span>
                        <spa class="word">Дизайн интерфейсов</spa>
                    </p>
                </div>
                </section> */}

                {/*1/ <section class="homeSection">
                    <div class="containerSection">
                        <div class="row">
                            <div class="homeText">
                                <h1>Что мы разрабатываем?</h1>
                                <p class="animationText">
                                    <span>Разработка мобильных приложений</span>
                                    <span>Разработка веб-сервисов</span>
                                    <span>Разработка комплексных решений</span>
                                    <span>Техническую документацию</span>
                                    <span>Прототипы интерфейсов</span>
                                    <span>Дизайн интерфейсов</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <img src={back} alt="back" class="backMain" />
                <img src={back1} alt="back1" class="back1Main" /> */}
            </div>




            {/*  */}
          <div clacc="textPageMain">

            <div class="text-service1Main">
                <h2 class="hText-hMain">Что мы разрабатываем?</h2>
                <p class="textPMain">От проектирования до реализации с последующей поддержкой</p>
                <div class="containerMain">
                    <div class="contentMain">
                        <h2 class="content-hMain">Разработка мобильных приложений</h2>
                        <p>Разработка нативных приложений Android/iOS
                            <br/>Адаптация под смартфоны и планшеты
                            <br/>Тестирование на различных устройствах
                        </p>
                    </div>
                    <div class="contentMain">
                        <h2 class="content-hMain">Разработка веб-сервисов</h2>
                        <p>Разработка архитектуры и бизнес логики
                            <br/>Тестирование и отладка компонентов
                            <br/>Верстка и адаптация под разные разрешения
                        </p>
                    </div>
                    <div class="contentMain">
                        <h2 class="content-hMain">Разработка комплексных решений</h2>
                        <p>Разработка серверной части и веб-интерфейсов
                            <br/>Разработка API и интеграция с системами
                            <br/>Разработка нативных приложений Andriod/iOS
                        </p>
                    </div>
                    <div class="contentMain">
                        <h2 class="content-hMain">Техническую документацию</h2>
                        <p>Детализированное техническое задание
                            <br/>Модель данных для архитектуры базы данных
                            <br/>Структура разделов приложений и веб-сервисов
                        </p>
                    </div>
                    <div class="contentMain">
                        <h2 class="content-hMain">Прототипы интерфейсов</h2>
                        <p>Анализ пользовательского опыта аудитории
                            <br/>Интерактивные прототипы компонентов
                            <br/>Тестирование прототипов
                        </p>
                    </div>
                    <div class="contentMain">
                        <h2 class="content-hMain">Дизайн интерфейсов</h2>
                        <p>Дизайн веб-сервисов под разные разрешения
                            <br/>Адаптация под мобильные устройства<br/>
                        </p>
                    </div>
                </div>
            </div>


            <div class="slider">
            {/* <a class="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
            <a class="slick-next slider__control_next" href="#" role="button" data-slide="next"></a> */}
            {/* <div class="sliderButton sliderButtonPrev">
            <MyButton style={{width: 10, height:15}} data-slide="prev" href="#">&lt;</MyButton>
            </div> */}
                <div class="sliderTitle">
                    <p class="sliderTitleP">Наши работы</p>
                </div>
            <Slider {...settings}>
                <div>
                    {/* <div class="slidaerText">
                        <p class="sliderTextP">Примеры работ бла бла</p>
                    </div> */}
                    <div class="imgPSlider">
                        <img src={img1} alt="img1" class="imgSlider"/>
                        <div>
                        <p class="pSlider">Готовое приложение по доставке еды</p>
                        <div class="ppSlider">
                        <p>&ndash;&nbsp;Личный кабинет</p>
                        <p>&ndash;&nbsp;Каталог</p>
                        <p>&ndash;&nbsp;Корзина</p>
                        <p>&ndash;&nbsp;Оплата</p>
                        </div>
                        </div>
                    </div>
                    <div class="sliderBtn">
                        <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    </div>
                </div>

                <div>
                    {/* <div class="slidaerText">
                        <p class="sliderTextP">Примеры работ бла бла</p>
                    </div> */}
                    <div class="imgPSlider">
                        <img src={img2} alt="img2" class="imgSlider"/>
                        <div>
                        <p class="pSlider">dgh</p>
                        <div class="ppSlider">
                        <p>&ndash;&nbsp;fgh</p>
                        <p>&ndash;&nbsp;dgh</p>
                        <p>&ndash;&nbsp;gdh</p>
                        <p>&ndash;&nbsp;gdh</p>
                        </div>
                        </div>
                    </div>
                    <div class="sliderBtn">
                        <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    </div>
                </div>

                <div>
                    {/* <div class="slidaerText">
                        <p class="sliderTextP">Примеры работ бла бла</p>
                    </div> */}
                    <div class="imgPSlider">
                        <img src={img3} alt="img3" class="imgSlider"/>
                        <div>
                        <p class="pSlider">Информационный сайт для рынка компании</p>
                        <div class="ppSlider">
                        <p>&ndash;&nbsp;Оптимальный дизайн</p>
                        <p>&ndash;&nbsp;Каталог продукции</p>
                        <p>&ndash;&nbsp;Формы обратной связи</p>
                        <p>&ndash;&nbsp;Адаптация под несколько языков</p>
                        </div>
                        </div>
                    </div>
                    <div class="sliderBtn">
                        <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    </div>
                </div>

                <div>
                    {/* <div class="slidaerText">
                        <p class="sliderTextP">Примеры работ бла бла</p>
                    </div> */}
                    <div class="imgPSlider">
                        <img src={img4} alt="img4" class="imgSlider"/>
                        <div>
                        <p class="pSlider">Сайт для агенства недвижимости</p>
                        <div class="ppSlider">
                        <p>&ndash;&nbsp;Адаптивный дизайн на каждой странице</p>
                        <p>&ndash;&nbsp;Информативность об услугах целевой аудитории</p>
                        <p>&ndash;&nbsp;Формы обратной связи</p>
                        </div>
                        </div>
                    </div>
                    <div class="sliderBtn">
                        <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    </div>
                </div>

                <div>
                    {/* <div class="slidaerText">
                        <p class="sliderTextP">Примеры работ бла бла</p>
                    </div> */}
                    <div class="imgPSlider">
                        <img src={img2} alt="img2" class="imgSlider"/>
                        <div>
                        <p class="pSlider">efgrtg</p>
                        <div class="ppSlider">
                        <p>&ndash;&nbsp;rgt</p>
                        <p>&ndash;&nbsp;trg</p>
                        <p>&ndash;&nbsp;trg</p>
                        <p>&ndash;&nbsp;rg</p>
                        </div>
                        </div>
                    </div>
                    <div class="sliderBtn">
                        <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    </div>
                </div>
            </Slider> 
            {/* <a class="slick-next slider__control_next" href="#" role="button" data-slide="next"></a> */}
            {/* <div class="sliderButtonNext">
            <MyButton style={{width: 10, height:15}} data-slide="next" href="#">&gt;</MyButton>
            </div> */}
            </div>
            {/* <div class="slider">
                <div class="sliderMain" id="sliderMain1">
                    <div class="sliderTitle">
                        <p>Наши работы</p>
                    </div>
                    <div class="slidaerText">
                        Примеры работ бла бла
                    </div>
                    <div class="sliderBtn">
                    <a class="mainTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
                    <a class="mainTopButton">&gt;</a>
                    </div>
                </div>
                <div class="sliderMain" id="sliderMain2">
                    <div class="sliderTitle">
                        <p>Наши работы</p>
                    </div>
                    <div class="slidaerText">
                        Примеры работ бла бла
                    </div>
                    <div class="sliderBtn">
                        <p>Оставить заявку</p>
                    </div>
                </div>
                <div class="sliderMain" id="sliderMain3">
                    <div class="sliderTitle">
                        <p>Наши работы</p>
                    </div>
                    <div class="slidaerText">
                        Примеры работ бла бла
                    </div>
                    <div class="sliderBtn">
                        <p>Оставить заявку</p>
                    </div>
                </div>
            </div> */}


            {/*  */}
            <div class="text-service2Main">
                <div class="hText-1Main">
                    <p>Создание программного обеспечения для вашего бизнеса</p>
                </div> 
                {/* <div class="hText-2Main">
                    <img src={logotext} alt="logotext" class="logoMainText" />
                    <p>Наша главная задача — помогать компаниям из различных отраслей реализовывать амбициозные программные обеспечения, 
                        которые приведут к росту и развитию бизнеса.</p>
                    <p>ИП Кашапов Р.А. — компания, которая предоставляет услуги по разработке программных продуктов на заказ.</p>
                    <p>Мы ежедневно работаем над проектами по разработке на  Java, C#, PHP, Bitrix, JavaScript, Python,
                        Android, iOS, React Native, Angular, React.js, 
                        проекты по обеспечению качества для банков и финансовых организаций, ритейла, сектора 
                        здравоохранения и сервисных компаний. Все услуги предоставляются высокой технологичностью 
                        и наличием уникальной экспертизы в разработке.
                    </p>
                </div> */}
                <div class="aboutImage">
                    <div class="aboutInnerMain">
                        <div class="aboutTitleMain">
                            <p class="aboutTitlePMain">О компании</p>
                        </div>
                        <div class="aboutTextMain">
                            Наша главная задача — помогать компаниям из различных отраслей реализовывать амбициозные программные обеспечения, 
                                которые приведут к росту и развитию бизнеса.<br></br>
                            ИП Кашапов Р.А. — компания, которая предоставляет услуги по разработке программных продуктов на заказ.<br></br>
                            Мы ежедневно работаем над проектами по разработке на  Java, C#, PHP, Bitrix, JavaScript, Python,
                                Android, iOS, React Native, Angular, React.js, 
                                проекты по обеспечению качества для банков и финансовых организаций, ритейла, сектора 
                                здравоохранения и сервисных компаний. Все услуги предоставляются высокой технологичностью 
                                и наличием уникальной экспертизы в разработке.
                        </div>
                    </div>
                    <div class="aboutLogoImg">
                        <img src={logotext} alt="logotext" />
                    </div>
                </div>
            </div>
          </div>





            {/* <div>
                Перечеь этопов нашей работы
                    <br/>
                1 Сбор требований
                    <br/>
                Собираем информацию по проекту для предварительного расчета стоимости
                    <br/>
                2 Предварительный расчет
                    <br/>
                Отправляем примерные цены/сроки, заключаем договор на разработку ТЗ
                    <br/>
                3 Подготовка тех.задания
                    <br/>
                Разрабатываем тех.задание, модель данных и интерактивный прототип
                    <br/>
                4 Точная стоимость
                    <br/>
                Мы рассчитаем точную стоимость разработки и согласуем с вами
                    <br/>
                5 Разработка дизайна
                    <br/>
                Разрабатывается дизайн компонентов системы и осуществляется верстка
                    <br/>
                6 Разработка проекта
                    <br/>
                Разрабатывается серверная часть, API, мобильные приложения и веб-сервисы
                    <br/>
                7 Тестирование и отладка
                    <br/>
                Занимаемся тестированием и отладкой всех компонентов проекта
                    <br/>
                8 Тестовый запуск проекта
                    <br/>
                Запускаем систему в тестовом режиме с небольшим количеством пользователей
                    <br/>
                9 Поддержка и обновление
                    <br/>
                Обеспечиваем работоспособность проекта и обновляем функционал
            </div>
            <div>
                <div>Технологии</div>
                <div>
                    <a>Java</a>
                    <a>JavaScript</a>
                    <a>Bitrix</a>
                    <a>C#/.NET</a>
                    <a>1С</a>
                    <a>PHP</a>
                    <a>iOS</a>
                    <a>Android</a>
                    <a>Python</a>
                </div>
            </div> */}
        </div>
    );
};

export default Main;