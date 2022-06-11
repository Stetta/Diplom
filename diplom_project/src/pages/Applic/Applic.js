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


const Applic = () => {

    const navigate = useNavigate();

    
    const {error, request, clearError} = useHttp();

    let x = String( Math.round(Math.random() * 100000));

    async function applicHandler () {
        const client = await request('/api/client', "POST", {
            Name: name,
            Surname: surname,
            Mail: email,
            Patronymic: null,
            Photo: null,
            Password: x
        });
    }

    async function sendMail () {
        const client = await request('http://localhost:8080/api/client/sendmail', "POST", {
            email: name,
            password: x
        });
    }
    // async function bHandler () {
    //     const data = await request('http://localhost:8080/api/application', "POST", {
    //         IdClient: IdClient,
    //         IdUser: 1,
    //         Description: message
    //     });
    // }

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const registr = () => {
        if (name === "" || surname === "" || email === "" ) {
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
                                
                                <MyInput value={x} placeholder="Введите пароль" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="password" name="password" title="Только цифры"/>

                                <MyButton style={{width: 150, height: 45}} onClick={() => registr()} >Далее</MyButton>
                            </div>                            
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Applic;