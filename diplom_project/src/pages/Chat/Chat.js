import React, { useEffect, useState } from 'react'
import "./Chat.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import account from "../../assets/image/account.png";
import { useHttp } from "../../hooks/useHttp";
import { Navigate, useLocation } from 'react-router-dom';
import { APPLICTEXT_ROUTE, CHAT_ROUTE } from '../../utils/const';
import { useNavigate } from "react-router-dom";
import accountimg from "../../assets/image/account.png";


const Chat = () => {
    const { request } = useHttp();

    const navigate = useNavigate();

    const [data, setData] = useState({});
    
    const { state } = useLocation();
    const {param} = state;

    const [message, setMessage] = useState('');
    const defaultImg = require("../../assets/image/account.png");
    const [photo, setPhoto] = useState("");
    
    useEffect(() => {
        const getData = async () => {
            const result = await request("/api/chat/getchatuser/" + param, "GET");
            setData(result);
          }
        getData()
    }, [request])

    // console.log(data)
    if(data != ""){
    return (
        <div class="elementChat">
            {/* <div class="buttonMyApp">
                <MyButton style={{marginTop: 30, width: 150, height: 45}} onClick={() => navigate(APPLICTEXT_ROUTE)}>Создать зявку</MyButton>
            </div> */}
            <div class="pageChat">
            <div class="listChat">
                {Array.from(data).map((apl) => {
                    return (
                        <div class="containerChat">
                            {/* <div class="imgProfileChat">
                                <img>{apl.UserPhoto}</img>
                            </div> */}
                            <div class="pChat">
                                <div class="surnameNameChat">
                                    <img className="profileImgChat" src={`data:image/png;base64,${message.Photo}`} onError={(e) => {
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
                                {/* <MyButton style={{ width: 70, height: 20}} onClick={() => navigate(CHAT_ROUTE)}>Чат</MyButton> */}
                                <p class="dateChat">{apl.Date.replace('T', ' ').replace('00:00:00.000Z', '')}</p>
                            </div>
                            <div className="pTextChat">
                                <p class="textChat">{apl.Text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>
            <div class="addChat">
                <textarea class="textareaChat" onChange={(e) => setMessage(e.target.value)} value={message}/>
                <MyButton>Отправить</MyButton>
            </div>
        </div>
    )
} else{
    return(
        <div class="elementNotMyApp">
            <p class="notApplic">История чата пуста</p>
            <a class="notAApplic" onClick={() => (navigate(APPLICTEXT_ROUTE))}>Напишите Ваше сообщение, чтобы начать чат...</a>
        </div>
    )
}
}
export default Chat;