'use strict';

import React, { useEffect, useState } from 'react'
import "./Profile.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import account from "../../assets/image/account.png";
import { useHttp } from "../../hooks/useHttp";
import validator from 'validator'
import Loader from '../../components/loader/Loader'

const Profile = () => {

    const {request} = useHttp();
    const defaultImg = require("../../assets/image/account.png");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [loading, setLoading] = useState(false)

    const id = JSON.parse(localStorage.getItem("clientData")).IdClient;
    const idUser = JSON.parse(localStorage.getItem("clientData")).IdClient;
    const roleId = JSON.parse(localStorage.getItem("clientData")).IdRole;

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    useEffect(() => {
        if (roleId == 1) {
            getUserData();
        } else {
            getClientData();
        }
      }, []);


    const getClientData = async () => {
        setLoading(true)
        await sleep(500);
        setName((await request("/api/client/byid/" + id))[0]["Name"]);
        setSurname((await request("/api/client/byid/" + id))[0]["Surname"]);
        setPatronymic((await request("/api/client/byid/" + id))[0]["Patronymic"]);
        setEmail((await request("/api/client/byid/" + id))[0]["Mail"]);
        setPassword((await request("/api/client/byid/" + id))[0]["Password"]);
        setPhoto((await request("/api/client/byid/" + id))[0]["Photo"]);
        setLoading(false)
      };
    
    const getUserData = async () => {
        setLoading(true)
        await sleep(500);
        setName((await request("/api/user/byidu/" + idUser))[0]["Name"]);
        setSurname((await request("/api/user/byidu/" + idUser))[0]["Surname"]);
        setPatronymic((await request("/api/user/byidu/" + idUser))[0]["Patronymic"]);
        setEmail((await request("/api/user/byidu/" + idUser))[0]["Login"]);
        setPassword((await request("/api/user/byidu/" + idUser))[0]["Password"]);
        setPhoto((await request("/api/user/byidu/" + idUser))[0]["Photo"]);
        setLoading(false)
    };

      const getImage = (e) => {
        let file = e.target.files[0];
    
        let firstReader = new FileReader();
        let secondReader = new FileReader();
    
        firstReader.readAsText(file);
        secondReader.readAsDataURL(file);
        
        secondReader.onload = function () {
          setPhoto(secondReader.result.split(',')[1])
        };
    
        secondReader.onerror = function () {
        toast.error(secondReader.error);
        };
      };

      const saveClient = async () => {
        if (!patronymic) setPatronymic("");
        const save = await request("/api/client/" + id, "PUT", {
            Surname: surname,
            Name: name,
            Patronymic: patronymic,
            Mail: email,
            Photo: photo,
            Password: password
        });
    };
    const saveUser = async () => {
        if (!patronymic) setPatronymic("");
        const save = await request("/api/user/" + idUser, "PUT", {
            Surname: surname,
            Name: name,
            Patronymic: patronymic,
            Login: email,
            Photo: photo,
            Password: password,
            IdRole: roleId
        });
    };

    const handleSave = () => {
        if(!surname || !name || !email || !password) {
            toast.error("Запоните все поля!\n(Поле отчества необязательно)");
            return;
        }

        if (!validator.isAlphanumeric(name, ['ru-RU'], {ignore: ' -'}) || !validator.isAlphanumeric(surname, ['ru-RU'], {ignore: ' -'}) || (patronymic && !validator.isAlphanumeric(patronymic, ['ru-RU'], {ignore: ' -'}))) {
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

        if(roleId == 1) {
            saveUser().then(toast.success("Успешно"));
        } else {
            saveClient().then(toast.success("Успешно"));
        }
    }



    if (loading) {
        return (
            <div style={{height: 600}}>
                <Loader/>   
            </div>
        )
    } else {
        return (
            <div>
                <div class="accountBox">
                    <h1>Профиль</h1>
                    <div class="photoBox">
                        <img src={`data:image/png;base64,${photo}`} alt="account" className="account"
                            onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = defaultImg;
                        }}/>
                    </div>
                    <input class="tasks-create-form-file" type="file" accept=".jpeg, .png, .jpg" onChange={getImage}></input>
                    <div class="inputBox">
                        <MyInput value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Введите фамилию" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="surname" name="surname" pattern="^[А-я ё Ё]+" title="Только русские буквы"/>
                        <MyInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="name" name="name" data-reg="^[А-я ё Ё]+" title="Только русские буквы"/>
                        <MyInput value={patronymic} onChange={(e) => setPatronymic(e.target.value)} placeholder="Введите отчество" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="patronymic" name="patronymic" data-reg="^[А-я ё Ё]+" title="Только русские буквы"/>
                        <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="email" name="email" pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" title="В формате: name@gmail.com"/>
                        <MyInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ваш пароль" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 10}} id="password" name="password" />
                    </div>
                        <MyButton style={{marginTop: 30, width: 150, height: 45}} onClick={() => handleSave()} >Сохранить</MyButton>
                    
                </div>
            </div>
        );
    }
}
export default Profile;
