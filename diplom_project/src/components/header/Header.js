import React, { useContext, useState } from "react";
import "./Header.css";
import logo_text from "../../assets/image/LogoText.png";
import MyModal from "../interfase/MyModal/MyModal";
import MyInput from "../interfase/MyInput/MyInput";
import MyButton from "../interfase/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE, APPLIC_ROUTE } from "../../utils/const";
import { useHttp } from "../../hooks/useHttp";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  /*Состояние видимости модального окна*/
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);

  const [isNavVisible, setIsNavVisible] = useState(true);

  const navigate = useNavigate();

  const {error, request, clearError} = useHttp();
  const loginHandler = async () => {
    const data = await request('http://localhost:8080/api/client/login', "POST", {
      username: email,
      password: password
    })
    auth.login(data.token)
  }

  return (
    <header className="header">
      <div className="header-vertical-center">
        <img src={logo_text} alt="logo-text" className="logo-text" />
        <div className="divider" />
      </div>

      {isNavVisible && (
        <nav class="navigate">
          <a class="navigate__link" onClick={() => navigate(MAIN_ROUTE)}>Главная</a>
          <a class="navigate__link" onClick={() => setLogin(true)}>Авторизация</a>
          <a class="navigate__link" onClick={() => navigate(APPLIC_ROUTE)}>Оставить заявку</a>
          {/* <a class="navigate__link" href="#">Контакты</a> */}
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
        <div class="container">
          <div class="content">
            <div class="right-side">
              <div class="topic-text">Авторизация</div>
              <p class="p-text">Заполните Ваши данные для дальнейшей работы.</p>
              <div action="#" class="formbox" id="formlog" name="formlog">

                <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="email" name="email" pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" title="В формате: name@gmail.com"/>

                <MyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" style={{ height: 50, marginTop: 10, marginLeft: 5, marginRight: 10, }} id="password" name="password"/>

                <MyButton style={{ width: 130, height: 40 }} onClick={loginHandler} id="SendApplic">Отправить</MyButton>

              </div>
            </div>
          </div>
        </div>
      </MyModal>
      <div>
      </div>
    </header>
  );
};

export default Header;
