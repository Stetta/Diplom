'use strict';
import React, { useRef, useState } from 'react';
import './Applic.css';
import MyInput from '../../components/interfase/MyInput/MyInput';
import MyButton from '../../components/interfase/MyButton/MyButton';
import { useHttp } from "../../hooks/useHttp";
import { APPLICTEXT_ROUTE } from "../../utils/const";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'
import agree from '../../assets/image/agree.doc'

const Applic = () => {
    const navigate = useNavigate();
    const {error, request, clearError} = useHttp();

    function generatePassword () {
        let x = String( Math.round(Math.random() * 100000));
        setPassword(x);
    }

    async function sendMail () {
        const client = await request('/api/client/sendmail', "POST", {
            mail: email,
            password: password
        });
    }

    const ch = useRef(null);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const registr = async () => {
        if (name === "" || surname === "" || email === "" || password === "") {
            toast.error("Заполните все поля");
            return;
        }

        if (!validator.isAlphanumeric(name, ['ru-RU'], {ignore: ' -'}) || !validator.isAlphanumeric(surname, ['ru-RU'], {ignore: ' -'})) {
            toast.error('Используйте только кириллицу')
            return;
        }
           
        if (!validator.isEmail(email)) {
            toast.error('Соблюдайте формат почты!')
            return;
        }

        if (!validator.isNumeric(password) || password.length > 5 || password.length < 4) {
            toast.error('Пароль может содержать от 4 до 5 цифр')
            return;
        }

        if(!ch.current.checked){
            toast.error('Примите соглашение на обработку данных')
            return;
        }
        await new Promise(async () => {
            const clients = await request('api/client');
            if (clients.filter(e => e.Mail == email).length > 0) {
                toast.error('Пользователь с такой почтой уже зарегистрирован')
                return;
            } else {
                const client = await request('/api/client', "POST", {
                    Name: name,
                    Surname: surname,
                    Mail: email,
                    Patronymic: null,
                    Photo: null,
                    Password: password
                });
                sendMail()
                navigate(APPLICTEXT_ROUTE)
            }
        })
        // await new Promise(() => {
        // })
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
                                <div class="passwordBoxApp">
                                    <MyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Введите пароль" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="password" name="password" title="Только цифры"/>
                                    <MyButton  onClick={() => generatePassword()} style={{width: 200, fontSize: 16, marginRight: 5}}>Сгенерировать пароль</MyButton>
                                </div>   
                                <div style={{marginTop: 20, display: 'flex', textAlign: 'center'}}>
                                    <input type='checkbox' ref={ch} style={{width: "20px", height: 20}}/>
                                    <a href={agree} download='Согласие на обработку данных.doc'
                                    style={{fontSize: 14, margin: 0, marginLeft: 10, marginTop: 5}}>Соглашение на обработку данных</a>
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