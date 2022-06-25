import React, { useContext, useEffect, useState } from "react";
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
import validator from 'validator'

const Header = () => {
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const [width, setWidth] = useState(window.innerWidth)
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navigate = useNavigate();

  const {request, error} = useHttp();
  const loginHandler = async () => {
    const data = await request('/api/client/login', "POST", {
      username: email,
      password: password
    })
    auth.login(data.token, data.clientId)
    navigate(PROFILE_ROUTE);
    if (data.token) setLogin(false)
  }
  const loginHandlerUser = async () => {
    const data = await request('/api/user/login', "POST", {
      username: email,
      password: password
    })
    auth.login(data.token, data.userId, data.IdRole)
    navigate(ADMINPROFILE_ROUTE);
    if (data.token) setLogin(false)
  }

  const registrr = () => {
    if (email === "" || password === "") {
      toast.error("Заполните все поля");
      return;
    } if (!validator.isEmail(email)) {
      toast.error('Соблюдайте формат почты!')
      return;
    } else{
      loginHandler();
   }
  }

  const registrrUser = () => {
    if (email === "" || password === "") {
      toast.error("Заполните все поля");
      return;
    } else {
        loginHandlerUser();
   }
  } 

  useEffect(() => {
    setWidth(window.innerWidth)
    if (width < 700) {
      setIsNavVisible(false)
    }
  }, [width])

  function togglePassword() {
    var MyInput = document.getElementById('password');
    var icon = document.getElementById(icon);
    if (MyInput.type === "password") {
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
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function recover() {
    if (email === "") {
      toast.error("Заполните поле почты");
      return;
    } if (!validator.isEmail(email)) {
      toast.error('Соблюдайте формат почты!')
      return;
    } else {
      const clients = await request('/api/client')
      if (!clients.filter(c => c.Mail == email)) {
        toast.error("Пользователь с такой почтой не найден!");
        return;
      } else {
        let a = String(Math.round(Math.random() * 100000));
        const id = (await request('api/client/' + email))[0];
        
        async function sendM () {
          const client = await request('/api/client/sendmail', "POST", {
            mail: email,
            password: a
          })
        }
        async function save () {
          const save = await request("/api/client/" + id['IdClient'], "PUT", {
            Surname: id['Surname'],
            Name: id['Name'],
            Patronymic: id['Patronymic'],
            Mail: id['Mail'],
            Photo: id['Photo'],
            Password: a
          })
        }
        function end() {
          toast.success('Новые данные отправлены на указанную почту')
          setLogin(false)
        }
        sendM().then(save()).then(end())
        };
      }
    }  

  return (
    <header>
      <ToastContainer style={{zIndex: 1000000000}}/>
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
        </nav>
        )} 

        {isNavVisible && auth.token && ( 
        <nav class="navigate" style={{zIndex: 1000}}>
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
          <a class="navigate__link navlinklast" onClick={() => Logoout()} style={{marginLeft: -80, width: 100, alignSelf: 'center'}}>Выход</a>
        </nav>
        )}

    
        <button
        onClick={() => {
          if (window.innerWidth <= 700) {
            setIsNavVisible(!isNavVisible)
          }
        }} className="toggle-btn">
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
                <div class="buttonFormboxModal">
                  <MyButton style={{ width: 200, height: 35, marginRight: 5, marginLeft: 5 }} onClick={registrr} id="SendApplic">Авторизоваться</MyButton>
                  <a class="aFormboxModal" onClick={registrrUser} id="SendApplic">Авторизоваться как сотрудник</a>
                  <a style={{marginTop: 20}} class="aFormboxModal" onClick={recover}>Восстановить пароль</a>
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
