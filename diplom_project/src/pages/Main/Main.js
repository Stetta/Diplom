import React, { useEffect } from 'react';
import './Main.css';
import logo from "../../assets/image/Logo.png";
import back from "../../assets/image/back.png";
import back1 from "../../assets/image/back1.png";


const Main = () => {
    //1// if(document.getElementById("App"))
    // {
    //     const txts = document.getElementsByName(".animationText").children 
    //     const txtsLen = txts.length;
    //     const index = 0;
    //     const textInTimer = 3000, textOutTimer = 2800;
    //     function animateText () {
    //                         for(let i=0; i<txtsLen; i++){
    //                             txts[i].classList.remove("text-in", "text-out");
    //                         }
    //                         txts[index].classList.add("text-in");
                            
    //                         setTimeout(function(){
    //                             txts[index].classList.add("text-out");
    //                         }, textOutTimer)
                            
                            
    //                         setTimeout(function(){
    //                             if(index == txtsLen-1) {
    //                                 index=0;
    //                             } else {
    //                                 index++;
    //                             }
    //                             animateText();
    //                         },textInTimer);
    //                     }
                        
    //                     window.onload = animateText();
    //                  }




        // 2// if(document.getElementById("App"))
        // {
        //     var words = document.getElementsByClassName('word');
        //     var wordArray = [];
        //     var currentWord = 0;
        //     words[currentWord].style.opacity = 1;
        //     for (var i = 0; i < words.length; i++) {
        //       splitLetters(words[i]);
        //     }
        //     function changeWord() {
        //       var cw = wordArray[currentWord];
        //       var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
        //       for (var i = 0; i < cw.length; i++) {
        //         animateLetterOut(cw, i);
        //       }
  
        //       for (var i = 0; i < nw.length; i++) {
        //         nw[i].className = 'letter behind';
        //         nw[0].parentElement.style.opacity = 1;
        //         animateLetterIn(nw, i);
        //       }
        //       currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
        //     }
        //     function animateLetterOut(cw, i) {
        //       setTimeout(function() {
        //         cw[i].className = 'letter out';
        //       }, i*80);
        //     }
        //     function animateLetterIn(nw, i) {
        //       setTimeout(function() {
        //         nw[i].className = 'letter in';
        //       }, 340+(i*80));
        //     }
        //     function splitLetters(word) {
        //       var content = word.innerHTML;
        //       word.innerHTML = '';
        //       var letters = [];
        //       for (var i = 0; i < content.length; i++) {
        //         var letter = document.createElement('span');
        //         letter.className = 'letter';
        //         letter.innerHTML = content.charAt(i);
        //         word.appendChild(letter);
        //         letters.push(letter);
        //       }
        //       wordArray.push(letters);
        //     }
        //     changeWord();
        //     setInterval(changeWord, 4000);
        // }
    


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
            {/*  */}
            <div class="text-service2Main">
                <div class="hText-1Main">
                    <p>Создание программного обеспечения для вашего бизнеса</p>
                </div> 
                <div class="hText-2Main">
                    <img src={logo} alt="logo" class="logoMain" />
                    <p>Наша главная задача — помогать компаниям из различных отраслей реализовывать амбициозные программные обеспечения, 
                        которые приведут к росту и развитию бтзнеса.</p>
                    <p>ИП Кашапов Р.А. — компания, которая предоставляет услуги по разработке программных продуктов на заказ.</p>
                    <p>Мы ежедневно работаем над проектами по разработке на  Java, C#, PHP, Bitrix, JavaScript, Python,
                    {/* Go, Swift, Objective-C, Flutter, Vue.js, */}
                        Android, iOS, React Native, Angular, React.js, 
                        проекты по обеспечению качества для банков и финансовых организаций, ритейла, сектора 
                        здравоохранения и сервисных компаний. Все услуги предоставляются высокой технологичностью 
                        и наличием уникальной экспертизы в разработке.
                    </p>
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