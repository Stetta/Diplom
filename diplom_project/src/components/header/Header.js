import React, { useState } from "react";
import "./Header.css";
import logo_text from "../../assets/image/LogoText.png";
import MyModal from "../interfase/MyModal/MyModal";
import MyInput from "../interfase/MyInput/MyInput";
import MyButton from "../interfase/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE, APPLIC_ROUTE } from "../../utils/const";

const Header = () => {
  /*Состояние видимости модального окна*/
  const [login, setLogin] = useState(false);

  const [isNavVisible, setIsNavVisible] = useState(true);

  const navigate = useNavigate();
  //

  // const formlog = document.forms["form"];
  // formlog.addEventListener("input", inputHandler);
  // function inputHandler({target}) {
  //     if (target.hasAttribute("data-reg")){
  //         inputCheck(target);
  //     }
  // }
  // function inputCheck(el){
  //     const inputValue = el.value;
  //     const inputReg = el.getAttribute("data-reg");
  //     const reg = new RegExp(inputReg);
  //     if(reg.test(inputValue)){
  //         el.style.border = "2px solid rgb(0, 196, 0)";
  //     }
  //     else{
  //         el.style.border = "2px solid rgb(255, 0, 0)";
  //     }
  // }

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
          <a class="navigate__link" href="#">Контакты</a>
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
              <form action="#" class="formbox" id="formlog" name="formlog">
                <MyInput placeholder="Введите почту" style={{ height: 50, marginTop: 10, marginLeft: 5, marginRight: 10, }} id="email" name="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"/>
                <label class="label-t" for="email"> В формате: name@gmail.com </label>
                <MyInput placeholder="Введите пароль" style={{ height: 50, marginTop: 10, marginLeft: 5, marginRight: 10, }} id="password" name="password"/>
                {/* <div class="input-box">
                                        <input type="text" class="input-t" placeholder="Введите почту" id="email" name="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"></input>
                                    </div>
                                    <div class="input-box">
                                        <input type="text" class="input-t" placeholder="Введите пароль" id="password" name="password" data-reg="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"></input>
                                    </div> */}
                <MyButton style={{ width: 130, height: 40 }}>Отправить</MyButton>
                {/* <div class="button">
                      <input type="button" value="Отправить"/>
                    </div> */}
              </form>
            </div>
          </div>
        </div>
      </MyModal>
      <div>
        {/* <div id="sidebar" onClick="openMenu()" setVisible={"false"}>
                        <div class="toggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div> */}
        {/* <button onClick={() => setIsNavVisible(!isNavVisible)} className="btn=list">
                        <div class="toggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button> */}

        {/* <nav class="navigate">
                            <a class="navigate__link" href="#">О нас</a>
                            <a class="navigate__link" onClick={() => setLogin(true)} >Авторизация</a>
                            <a class="navigate__link" onClick={() => setModal(true)} >Оставить заявку</a>
                            <a class="navigate__link" href="#">Контакты</a>
                        </nav> */}
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
