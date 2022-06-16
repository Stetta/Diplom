import React from 'react';
import './Footer.css';
// import { useNavigate } from "react-router-dom";
// import { MAIN_ROUTE, APPLIC_ROUTE } from "../../utils/const";

// const nav = useNavigate();

const Footer = () => {
    return (
        <footer class="footer">
           
            {/* <div class="column1">
                <h4>Меню</h4>
                <div class="column-h">
                    <h5>&#x25BA;Главная</h5>
                    <h5>&#x25BA;Авторизация</h5>
                    <h5>&#x25BA;Контакты</h5>
                    <div>Технологии</div>
                </div>
            </div> */}
            <div class="column2">
                <h5>Контакты</h5>
                <div class="column-h">
                    <h6 class="text-a">&#9990;&nbsp;Телефон</h6>
                    <a href="tel:+79053727702" class="text-a">+7 905 372-77-02</a>
                    <br/>
                    <h6 class="text-a">&#9993;&nbsp;Почта</h6>
                    <a href="mailto:ipkashapovra@gmail.com" class="text-a">ipkashapovra@gmail.com</a>
                </div>
            </div>
            <div class="column3">
                {/* <h5>&#8981;&nbsp;Адрес</h5> */}
                <h5>&#9658;&nbsp;Адрес</h5>
                <h6>Республика Татарстан, город Набережные Челны</h6>
            </div>
       
            
                <div class="bottom-text">
                    &copy;&nbsp;ИП Кашапов Р.А., 2016
                </div>
        </footer>
    )
}

export default Footer;
