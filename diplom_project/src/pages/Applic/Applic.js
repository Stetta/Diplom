'use strict';

import React, { useState } from 'react';
import './Applic.css';
import MyInput from '../../components/interfase/MyInput/MyInput';
import MyButton from '../../components/interfase/MyButton/MyButton';
import { useHttp } from "../../hooks/useHttp";
import { APPLICTEXT_ROUTE } from "../../utils/const";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const Applic = () => {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };


    const navigate = useNavigate();

    
    const {error, request, clearError} = useHttp();

    function generatePassword () {
        let x = String( Math.round(Math.random() * 100000));
        setPassword(x);
    }

    async function applicHandler () {
        const client = await request('/api/client', "POST", {
            Name: name,
            Surname: surname,
            Mail: email,
            Patronymic: null,
            Photo: null,
            Password: password
        });
    }

    async function sendMail () {
        const client = await request('http://localhost:8080/api/client/sendmail', "POST", {
            email: name,
            password: password
        });
    }

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const registr = () => {
        if (name === "" || surname === "" || email === "" || password === "") {
            toast.error("Заполните все поля");
            return;
          }
           else{
            applicHandler();
            // applicHandler().then(
            //     sendMail()
            // );
            // console.log("a");
            navigate(APPLICTEXT_ROUTE);
        } 
    } 
    return (
        <div>
            {/* <Slider {...settings}>
      <div>
        <img src="C:\Users\Света\Desktop\Diplom\diplom_project\src\assets\image\1.jpg" alt="logo-text"/>
      </div>
      <div>
        <img src="C:\Users\Света\Desktop\Diplom\diplom_project\src\assets\image\2.jpg" alt="logo-text"/>
      </div>
      <div>
        <img src="C:\Users\Света\Desktop\Diplom\diplom_project\src\assets\image\3.jpg" alt="logo-text"/>
      </div>
      <div>
        <img src="C:\Users\Света\Desktop\Diplom\diplom_project\src\assets\image\4.jpg" alt="logo-text"/>
      </div>
      <div>
        <img src="C:\Users\Света\Desktop\Diplom\diplom_project\src\assets\image\5.jpg" alt="logo-text"/>
      </div>
    </Slider> */}
            <ToastContainer/>
            <div class="containerApp">
                <div class="contentApp">
                    <div class="right-sideApp">
                        <div class="topic-textApp">Оставьтe Вашу заявку!</div>
                            <p class="p-textApp">
                                Оставьте заявку, заполнив контактные данные, и мы вместе обсудим Ваш проект.
                            </p>
                            <div action="#" class="formboxApp">
                                <MyInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="name" name="name" data-reg="^[А-я ё Ё]+" title="Только русские буквы"/>

                                <MyInput value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Введите фамилию" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="surname" name="surname" pattern="^[А-я ё Ё]+" title="Только русские буквы"/>

                                <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="email" name="email" pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" title="В формате: name@gmail.com"/>
                                <div class="passwordBoxApp">
                                    <MyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="password" name="password" title="Только цифры"/>
                                    <MyButton  onClick={() => generatePassword()} style={{width: 200, fontSize: 16}}>Сгенерировать пароль</MyButton>
                                </div>
                                <MyButton style={{width: 150, height: 45}} onClick={() => registr()} >Далее</MyButton>
                            </div>                            
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Applic;