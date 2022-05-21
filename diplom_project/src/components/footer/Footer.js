import React from 'react';
import './Footer.css';
// import { useNavigate } from "react-router-dom";
// import { MAIN_ROUTE, APPLIC_ROUTE } from "../../utils/const";

// const nav = useNavigate();

const Footer = () => {
    return (
        <footer class="footer">
           
            <div class="column1">
                <h4>Меню</h4>
                <div class="column-h">
                    <h5>&#x25BA;Главная</h5>
                    {/* <a onClick={() => nav(MAIN_ROUTE)}>&#x25BA;Главная</a> */}
                    <h5>&#x25BA;Авторизация</h5>
                    <h5>&#x25BA;Контакты</h5>
                    <div>Технологии</div>
                {/* <div>
                    <a>Java</a>
                    <a>JavaScript</a>
                    <a>C#/.NET</a>
                    <a>1С</a>
                    <a>PHP</a>
                    <a>iOS</a>
                    <a>Android</a>
                    <a>Python</a>
                </div> */}
                </div>
            </div>
            <div class="column2">
                <h4>Контакты</h4>
                <div class="column-h">
                    <h5 class="text-a">&#9990;&nbsp;Телефон</h5>
                    <a href="tel:+79053727702" class="text-a">+7 905 372-77-02</a>
                    <br/>
                    <h5 class="text-a">&#9993;&nbsp;Почта</h5>
                    <a href="mailto:ipkashapovra@gmail.com" class="text-a">ipkashapovra@gmail.com</a>
                </div>
            </div>
            <div class="column3">
                <h4>&#8981;&nbsp;Адрес</h4>
                <h5>Республика Татарстан, город Набережные Челны</h5>
            </div>
       
            
                <div class="bottom-text">
                    &copy;&nbsp;ИП Кашапов Р.А., 2016
                </div>
        </footer>
    )
}

export default Footer;
