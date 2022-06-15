import React, { useCallback, useEffect, useState } from "react";
import "./AdminProfile.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import MySelect from "../../components/interfase/MySelect/MySelect";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/const";

const AdminProfile = () => {

    const {request} = useHttp();
    const defaultImg = require("../../assets/image/account.png");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");

    const id = JSON.parse(localStorage.getItem("clientData")).IdClient;
    const idUser = JSON.parse(localStorage.getItem("clientData")).IdClient;
    const roleId = JSON.parse(localStorage.getItem("clientData")).IdRole;
    
    // const registrre = () => {
    //     if (name === "" || surname === "" || patronymic === "" || email === "") {
    //         toast.error("Заполните все поля");
    //         return;
    //       }
    //        else{
    //         toast.done("done");
    //         handleSave();
    //     } 
    // }

    // const registrre = () => {
    //     if (IdRole == 1) {
    //         handleSave();
    //     } else {
    //         getClientData();
    //     }
    // }

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
        await sleep(500);
        setName((await request("/api/client/byid/" + id))[0]["Name"]);
        setSurname((await request("/api/client/byid/" + id))[0]["Surname"]);
        setPatronymic((await request("/api/client/byid/" + id))[0]["Patronymic"]);
        setEmail((await request("/api/client/byid/" + id))[0]["Mail"]);
        setPassword((await request("/api/client/byid/" + id))[0]["Password"]);
        setPhoto((await request("/api/client/byid/" + id))[0]["Photo"]);
      };
    
      const getUserData = async () => {
        await sleep(500);
        setName((await request("/api/user/byidu/" + idUser))[0]["Name"]);
        setSurname((await request("/api/user/byidu/" + idUser))[0]["Surname"]);
        setPatronymic((await request("/api/user/byidu/" + idUser))[0]["Patronymic"]);
        setEmail((await request("/api/user/byidu/" + idUser))[0]["Login"]);
        setPassword((await request("/api/user/byidu/" + idUser))[0]["Password"]);
        setPhoto((await request("/api/user/byidu/" + idUser))[0]["Photo"]);
      };

      const getImage = (e) => {
        let file = e.target.files[0];
    
        let firstReader = new FileReader();
        let secondReader = new FileReader();
    
        firstReader.readAsText(file);
        secondReader.readAsDataURL(file);
        
        secondReader.onload = function () {
        //   console.log(secondReader.result.split(',')[1]);
          setPhoto(secondReader.result.split(',')[1])
        };
    
        secondReader.onerror = function () {
        //   console.log(secondReader.error);
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
        if(!surname || !name || !email) {
            toast.error("Запоните все поля!\n(Поле отчества необязательно)");
            return;
        }
        if(roleId == 1) {
            saveUser().then(toast.success("Успешно"));
        } else {
            saveClient().then(toast.success("Успешно"));
        }
    }



    //if (name && password && photo) {
    return(
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
                <ToastContainer/>
                {/* <MyButton style={{marginTop: 0, marginBottom: 10, width: 130, height: 40 }} 
                    onClick={registrre} accept=".jpeg, .png, .jpg" onChange={getImage}
                    id="SendPhoto">Загрузить фото</MyButton> */}
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
// } else {
//     return (
//       <div style={{ height: 600, display: "flex", justifyContent: "center" }}>
//         <Loader />
//       </div>
//     );
// }
};

export default AdminProfile;