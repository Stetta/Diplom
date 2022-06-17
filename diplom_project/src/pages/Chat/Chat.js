import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import account from "../../assets/image/account.png";
import { useHttp } from "../../hooks/useHttp";
import { Navigate, useLocation } from 'react-router-dom';
import { ADMINAPPLIC_ROUTE, APPLICTEXT_ROUTE, CHAT_ROUTE, MYAPPLIC_ROUTE } from '../../utils/const';
import { useNavigate } from "react-router-dom";
import accountimg from "../../assets/image/account.png";
import addMesBtn from "../../assets/image/addMesBtn.png";
import back from "../../assets/image/backk.png";


const Chat = () => {
    const { request } = useHttp();

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [time, setTime] = useState(Date.now())
    
    const { state } = useLocation();
    const { param, status } = state;

    const [message, setMessage] = useState('');
    const defaultImg = require("../../assets/image/account.png");
    const [photo, setPhoto] = useState("");
    const [photoMess, setPhotoMess] = useState("");

    const inputFile = useRef(null);
    const getImage = (e) => {
        let file = e.target.files[0];
    
        let firstReader = new FileReader();
        let secondReader = new FileReader();
    
        firstReader.readAsText(file);
        secondReader.readAsDataURL(file);
        
        secondReader.onload = function () {
          setPhotoMess(secondReader.result.split(',')[1])
        };
    
        secondReader.onerror = function () {
        toast.error(secondReader.error);
        };
      };

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date.now())
            getData()
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [request, data, setData])

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const id = JSON.parse(localStorage.getItem("clientData")).IdClient;
    const roleId = JSON.parse(localStorage.getItem("clientData")).IdRole;

    const getData = async () => {
        const result = await request("/api/chat/getchatuser/" + param, "GET");
        setData(result);
      }

    async function sendMessage() {
        if (message == "") {
            toast.error("Введите сообщение");
            return;
        } 
        await sleep(100);
        if (roleId === undefined) {            
            const send = await request("/api/chat", "POST", {
                Text: message,
                IdApplication: param,
                Photo: photoMess,
                IdClient: id
            }).then(setMessage('')).then(setPhotoMess(null))
        } else {
            const send = await request("/api/chat", "POST", {
                Text: message,
                IdApplication: param,
                Photo: photoMess,
                IdUser: id
            }).then(setMessage('')).then(setPhotoMess(null))
        }
    
    }
    console.log(status)
    async function NavigateApplic(){
        if(roleId ===undefined) {
            navigate(MYAPPLIC_ROUTE)
        } else{
            navigate(ADMINAPPLIC_ROUTE)
        }
    }

    if(data != ""){
        return (
            <div class="elementChat">
                <div class="backElementChat">
                    <div class="backBoxElementChat">
                        <MyButton style={{paddingLeft: 0, paddingRight: 5}} onClick={NavigateApplic}>
                            <p class="pBackBox">Вернуться к заявкам</p>
                        </MyButton>

                    </div>
                </div>
                <ToastContainer/>
            <div class="pageChat">
            <div class="listChat">
                {Array.from(data).map((apl) => {
                    return (
                        <div class="containerChat">
                            <div class="pChat">
                                <div class="surnameNameChat">
                                    <img className="profileImgChat" src={`data:image/png;base64,${apl.UserPhoto}`} onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = defaultImg;
                                        }} />
                                    <div class="surnameNameMailChat">
                                        <div class="pPurnameNameChat">
                                            <p class="clientSurnameChat">{apl.UserSurname}</p>
                                            <p class="clientNameChat">{apl.UserName}</p>
                                        </div>
                                    <p class="emailChat">{apl.UserEmail}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="buttonListChat">
                                <p class="dateChat">{apl.Date.split('T')[0].split('-')[0] + '.' + apl.Date.split('T')[0].split('-')[2] + '.' + apl.Date.split('T')[0].split('-')[1] + ' '}</p>
                                <p class="timeChat">{apl.Date.split('T')[1].split(':')[0]+':'+apl.Date.split('T')[1].split(':')[1]}</p>
                            </div>
                            <div className="pTextChat">
                                <p class="textChat">{apl.Text}</p>
                                {apl.Photo && (  
                                    <div>
                                        <div style={{margin: 10}}>
                                            <img class="imgphotoAddBox" src={`data:image/png;base64,${apl.Photo}`} onError={(e) => {e.target.onerror = null;}}>
                                        </img>
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                    
                })}
            </div>
            </div>
            {status == '5' && (
                <div class='addChat'>
                    <h4>Заявка отменена, отправка запрещена</h4>
                </div>
            )}
            {status != '5' && (
                <div class="addChat">
                    <input style={{display: 'none'}} onChange={getImage} ref={inputFile} type="file" accept='.jpeg, .png, .jpg'></input>
                    <MyButton style={{width: 30, height:30, textAlign: 'center', alignItem: 'center', padding: 5, marginTop: 50}} 
                    onClick={() => {inputFile.current.click()}}>
                        <p class="pAddPhotoBtn" src={`data:image/png;base64,${photoMess}`} >+</p>
                    </MyButton>
                    <div>
                        <div class="photoAddBox">
                            <textarea class="textareaChat" onChange={(e) => setMessage(e.target.value)} value={message}/>
                            {photoMess && (
                            <img class="imgphotoAddBox"
                                src={`data:image/png;base64,${photoMess}`}
                                onError={(e) => {e.target.onerror = null;}}>
                            </img>
                            )}
                        </div>
                    </div>
                    <button class="btnPAddChat" onClick={sendMessage}>
                        <p class="buttonMessageChat">Отправить</p>
                    </button>
                    {/* <MyButton onClick={sendMessage}>
                        <p class="buttonTelMessageChat"></p>
                    </MyButton> */}
            </div>
            )}
        </div>
    )
} else{
    return(
        <div>
        <div class="elementNotMyApp">
            <p class="notApplic">История чата пуста</p>
            <a class="notAApplic" onClick={() => (navigate(APPLICTEXT_ROUTE))}>Напишите Ваше сообщение, чтобы начать чат...</a>
        </div>
        
        {status == '5' && (
                <div class='addChat'>
                    <h4>Заявка отменена, отправка запрещена</h4>
                </div>
            )}
            {status != '5' && (
                <div class="addChat">
                    <input style={{display: 'none'}} onChange={getImage} ref={inputFile} type="file" accept='.jpeg, .png, .jpg'></input>
                    <MyButton style={{width: 30, height:30, textAlign: 'center', alignItem: 'center', padding: 5, marginTop: 50}} 
                    onClick={() => {inputFile.current.click()}}>
                        <p class="pAddPhotoBtn" src={`data:image/png;base64,${photoMess}`} >+</p>
                    </MyButton>
                    <div>
                        <div class="photoAddBox">
                            <textarea class="textareaChat" onChange={(e) => setMessage(e.target.value)} value={message}/>
                            {photoMess && (
                            <img class="imgphotoAddBox"
                                src={`data:image/png;base64,${photoMess}`}
                                onError={(e) => {e.target.onerror = null;}}>
                            </img>
                            )}
                        </div>
                    </div>
                    <button class="btnPAddChat" onClick={sendMessage}>
                        <p class="buttonMessageChat">Отправить</p>
                    </button>
                    {/* <MyButton onClick={sendMessage}>
                        <p class="buttonTelMessageChat"></p>
                    </MyButton> */}
            </div>
            )}
        </div>
    )
}
}
export default Chat;