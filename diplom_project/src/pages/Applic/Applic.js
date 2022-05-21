import React, { useState } from 'react';
import './Applic.css';
import MyInput from '../../components/interfase/MyInput/MyInput';
import MyButton from '../../components/interfase/MyButton/MyButton';

const Applic = () => {
    /*Состояние видимости модального окна*/
    //const [modal, setModal] = useState(false);
    
    return (
        <div>
            
            <div class="container">
                <div class="content">
                    <div class="right-side">
                        <div class="topic-text">Оставьтe Вашу заявку!</div>
                            <p class="p-text">
                                Оставьте заявку, заполнив контактные данные, и мы вместе обсудим Ваш проект.
                            </p>
                            <form action="#" class="formbox">
                                <MyInput placeholder="Введите имя" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="name" name="name" data-reg="^[А-ЯЁ][а-яё]*$"/>
                                <label class="label-t1" for="name" >Только русские буквы</label>
                                <MyInput placeholder="Введите фамилия" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="surname" name="surname" data-reg="^[А-ЯЁ][а-яё]*$"/>
                                <label class="label-t2" for="name">Только русские буквы</label>
                                <MyInput placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="email" name="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"/>
                                <label class="label-t3" for="email">В формате: name@gmail.com</label>
                                <div class="message-box">
                                    <textarea class="input-t" placeholder="Сообщение"></textarea>
                                </div>
                                <MyButton style={{width: 150, height: 45}}>Отправить</MyButton>
                            </form>                            
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Applic;