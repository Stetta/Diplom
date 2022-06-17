import React, { useContext, useState } from "react";
import "./Header.css";
import logo_text from "../../assets/image/LogoText.png";
import MyModal from "../interfase/MyModal/MyModal";
import MyInput from "../interfase/MyInput/MyInput";
import MyButton from "../interfase/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE, APPLIC_ROUTE, PROFILE_ROUTE, MYAPPLIC_ROUTE, APPLICTEXT_ROUTE, ADMINPROFILE_ROUTE, ADMINAPPLIC_ROUTE, CHART_ROUTE } from "../../utils/const";
import { useHttp } from "../../hooks/useHttp";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PassIcon from "../../assets/image/PassIcon.png";

const Header = () => {
  /*Состояние видимости модального окна*/
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);

  const [isNavVisible, setIsNavVisible] = useState(true);

  const navigate = useNavigate();
  // auth.logout()

  const {request} = useHttp();
  const loginHandler = async () => {
    const data = await request('/api/client/login', "POST", {
      username: email,
      password: password
    })
    auth.login(data.token, data.clientId)
    navigate(PROFILE_ROUTE);
  }
  const loginHandlerUser = async () => {
    const data = await request('/api/user/login', "POST", {
      username: email,
      password: password
    })
    auth.login(data.token, data.userId, data.IdRole)
    navigate(ADMINPROFILE_ROUTE);
  }

  const registrr = () => {
    if (email === "" || password === "") {
        toast.error("Заполните все поля");
        return;
      }
      else{
        loginHandler();
   }
  }
  const registrrUser = () => {
    if (email === "" || password === "") {
        toast.error("Заполните все поля");
        return;
      }
      else{
        loginHandlerUser();
   }
  } 
  //

  function togglePassword() {
    var MyInput = document.getElementById('password');
    var icon = document.getElementById(icon);
    if(MyInput.type === "password") {
      MyInput.type = "text";
      icon.classList.add('selected');
    } else {
      MyInput.type = "password";
      icon.classList.remove('selected');
    }
  }

  function Logoout() {
    auth.logout();
    navigate(MAIN_ROUTE);
  }

  return (
    // <header className="header">
    <header>
      <div class="headerTop">
        <a class="headerTopButton" onClick={() => navigate(APPLIC_ROUTE)}>&#9998;&nbsp;Оставить заявку</a>
        <a class="headerTopA" href="tel:+79053727702">&#9990;&nbsp;+7 905 372-77-02</a>
        <a class="headerTopA" href="mailto:ip.kashapov.r.a@yandex.ru">&#9993;&nbsp;ip.kashapov.r.a@yandex.ru</a>
      </div>
      <div class="headerBottom">
      <div class="header">
        <div className="header-vertical-center">
          <img src={logo_text} alt="logo-text" className="logo-text" />
        <div className="divider" />
        </div>

        {isNavVisible && !auth.token &&(
        <nav class="navigate" style={{marginTop: 15}}>
          <a class="navigate__link" onClick={() => navigate(MAIN_ROUTE)}>Главная</a>
          <a class="navigate__link" onClick={() => setLogin(true)}>Авторизация</a>
          <a class="navigate__link" onClick={() => navigate(APPLIC_ROUTE)}>Оставить заявку</a>
          <a class="navigate__link"></a>
          {/* <a class="navigate__link" href="#">Контакты</a> */}
        </nav>
        )} 

        {isNavVisible && auth.token && ( 
        <nav class="navigate" style={{zIndex: 1000}}>
          {/* {JSON.parse(localStorage.getItem("clientData")).IdRole && (
            <div>
          <a class="navigate__link" onClick={() => navigate(ADMINAPPLIC_ROUTE)} style={{marginTop: 25}}>Заявки</a>
          <a class="navigate__link" onClick={() => navigate(CHART_ROUTE)} style={{marginTop: 25}}>Статистика</a>
          </div>
          )}
          {!JSON.parse(localStorage.getItem("clientData")).IdRole && (
            <div>
          <a class="navigate__link" onClick={() => navigate(MYAPPLIC_ROUTE)} style={{marginTop: 25}}>Мои заявки</a>
          <a class="navigate__link" onClick={() => navigate(APPLICTEXT_ROUTE)} style={{marginTop: 25}}>Создать заявку</a>
          </div>
          )} */}
         
          {JSON.parse(localStorage.getItem("clientData")).IdRole && (
          <a class="navigate__link" onClick={() => navigate(ADMINAPPLIC_ROUTE)}>Заявки</a>
          )}
          {!JSON.parse(localStorage.getItem("clientData")).IdRole && (
          <a class="navigate__link" onClick={() => navigate(MYAPPLIC_ROUTE)}>Мои заявки</a>
          )}
          {JSON.parse(localStorage.getItem("clientData")).IdRole && (
          <a class="navigate__link" onClick={() => navigate(CHART_ROUTE)}>Статистика</a>
          )}
          {!JSON.parse(localStorage.getItem("clientData")).IdRole && (
          <a class="navigate__link" onClick={() => navigate(APPLICTEXT_ROUTE)}>Создать заявку</a>
          )}
          <a class="navigate__link" onClick={() => navigate(PROFILE_ROUTE)} style={{padding: 0, width: 130, marginRight:0, alignSelf: 'center'}}>Профиль</a>
          {/* <a/>
          <a/> */}
          <a class="navigate__link navlinklast" onClick={() => Logoout()} style={{marginLeft: -80, width: 100, alignSelf: 'center'}}>Выход</a>
          {/* <MyButton style={{ width: 100, height: 40, marginRight: 5, marginLeft: 5 }} onClick={() => Logoout()} id="SendApplic">Выход</MyButton> */}
        </nav>
        )}

    
        <button
        onClick={() => setIsNavVisible(!isNavVisible)} className="toggle-btn">
        <div>
          <span class="span-btn"></span>
          <span class="span-btn"></span>
          <span class="span-btn"></span>
        </div>
        </button>
        <MyModal visible={login} setVisible={setLogin}>
        <div class="containerModal">
          <div class="contentModal">
            <div class="right-sideModal">
              <div class="topic-textModal">Авторизация</div>
              <p class="p-textModal">Заполните Ваши данные для дальнейшей работы.</p>
              <div action="#" class="formboxModal" id="formlog" name="formlog">

                <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="email" name="email" pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" title="В формате: name@gmail.com"/>
                <div class="input-wrapperModal">
                  <MyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" style={{ height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="password" name="password" type="password"/>
                  <div class="input-icon" id="icon" onClick={togglePassword}>
                    <img src={PassIcon} alt="PassIcon"></img>
                  </div>

                </div>
                {/* <ToastContainer/> */}
                <div class="buttonFormboxModal">
                  <MyButton style={{ width: 200, height: 35, marginRight: 5, marginLeft: 5 }} onClick={registrr} id="SendApplic">Авторизоваться</MyButton>
                  <a class="aFormboxModal" onClick={registrrUser} id="SendApplic">Авторизоваться как сотрудник</a>
                  {/* <MyButton style={{ width: 130, height: 40, marginLeft: 5, marginRight: 5 }} onClick={registrrUser} id="SendApplic">Авторизоваться как сотрудник</MyButton> */}
                </div>

              </div>
            </div>
          </div>
        </div>
        </MyModal>
        <div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
