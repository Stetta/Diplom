
import React, { useEffect, useState } from 'react'
import "./MyApplic.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import account from "../../assets/image/account.png";
import { useHttp } from "../../hooks/useHttp";
import { Navigate } from 'react-router-dom';
import { APPLICTEXT_ROUTE, CHAT_ROUTE } from '../../utils/const';
import { useNavigate } from "react-router-dom";
import chatBtn from "../../assets/image/chatBtn.png";

const MyApplic = () => {
    const { request } = useHttp();

    const navigate = useNavigate();

    const [data, setData] = useState({}); 

    useEffect(() => {
        const getData = async () => {
            const result = await request("/api/application/getapplic/" + JSON.parse(localStorage.getItem("clientData")).IdClient, "GET");
            setData(result);
          }
        getData()
    }, [request])


    if(data != ""){
    return (
        <div class="elementMyApp">
            {/* <div class="buttonMyApp">
                <MyButton style={{marginTop: 30, width: 150, height: 45}} onClick={() => navigate(APPLICTEXT_ROUTE)}>Создать зявку</MyButton>
            </div> */}
            <div class="pageMyApp">
            <div class="listMyApp">
                {Array.from(data).map((apl) => {
                        console.log(apl.Status)
                    return (
                        <div class={apl.Status == '5' ? 'containerMyApp canceled' : (apl.Status == '3' ? 'containerMyApp finished' : 'containerMyApp')}>
                            <div class="pMyApp_ma">
                                <p class="descriptionMyApp">{apl.Description}</p>
                                <p class="typeMyApp">&shy;Название компании: {apl.CompanyName}</p>
                                <p class="typeMyApp">&shy;Деятельность компании: {apl.Activity}</p>
                                <p class="typeMyApp">&shy;Тип: {apl.Type}</p>
                                <p class="typeStyleMyApp">&#8195;&bull;&shy;Статус заявки: {apl.StatusName}</p>
                                <p class="typeStyleMyApp">&#8195;&bull;&shy;Статус оплаты заявки: {apl.StatusPaymentName}</p>
                                <p class="typeStyleMyApp">&#8195;&bull;&shy;Штат сотрудников: {apl.Staff}</p>
                                <p class="typeStyleMyApp">&#8195;&bull;&shy;Ценовой диапозон: {apl.Pricing}</p>
                            </div>
                            <div class="buttonListMyApp">
                                {/* <MyButton style={{ width: 70, height: 20}} onClick={() => navigate(CHAT_ROUTE, {state: {param: apl.IdApplication}})}>Чат</MyButton> */}
                                <MyButton onClick={() => navigate(CHAT_ROUTE, {state: {param: apl.IdApplication, status: apl.Status}})}>
                                    <p class="pBtnMyApp" style={{ width: 70, height: 20}} 
                                    >Чат
                                    </p>
                                </MyButton>
                                <p class="dateMyApp">{apl.Date.split('T')[0].split('-')[0] + '.' + apl.Date.split('T')[0].split('-')[2] + '.' + apl.Date.split('T')[0].split('-')[1] + ' '}{apl.Date.split('T')[1].split(':')[0]+':'+apl.Date.split('T')[1].split(':')[1]}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
    )
} else{
    return(
        <div class="elementNotMyApp">
            <p class="notApplic">У вас отсутствуют заявки</p>
            <a class="notAApplic" onClick={() => (navigate(APPLICTEXT_ROUTE))}>Создать новую заявку...</a>
        </div>
    )
}
}
export default MyApplic;