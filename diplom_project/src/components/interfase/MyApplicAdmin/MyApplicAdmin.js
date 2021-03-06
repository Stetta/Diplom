import React, { useEffect, useState } from 'react';
import "./MyApplicAdmin.css";
import MySelect from '../MySelect/MySelect';
import MyButton from '../MyButton/MyButton';
import { useNavigate } from "react-router-dom";
import { useHttp } from '../../../hooks/useHttp';
import { CHAT_ROUTE } from '../../../utils/const';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import chatBtn from "../../../assets/image/chatBtn.png";

const MyApplicAdmin = ({Description, Type, IdApplication, Client, Mail, CurDate, Status, StatusPayment, CompanyName, Activity, Pricing, Staff}) => {
    const { request } = useHttp();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const [status, setStatus] = useState("");
    const [curStatus, setCurStatus] = useState(Status);
    async function getStatus() {
        const result = await request('/api/status');
        setStatus(result);
      };

    const [statusPayment, setStatusPayment] = useState("");
    const [curStatusPayment, setCurStatusPayment] = useState(StatusPayment);
    async function getStatusPayment() {
        const result = await request('/api/statuspayment');
        setStatusPayment(result);
      }; 



    async function sendMessage() {
        const send = await request("/api/chat", "POST", {
            Text: 'Заявка отменена',
            IdApplication: IdApplication,
            IdUser: JSON.parse(localStorage.getItem("clientData")).IdClient
        })
    }

    async function sendMessageEnd() {
        const send = await request("/api/chat", "POST", {
            Text: 'Работа с заявкой завершена',
            IdApplication: IdApplication,
            IdUser: JSON.parse(localStorage.getItem("clientData")).IdClient
        })
    }



    useEffect(() => {
        getStatus().then(getStatusPayment());
    }, []);

    if (status && statusPayment) {
        return (
            <div class={curStatus == '5' ? 'containerMyAppAdm canceled' : (curStatus == '3' ? 'containerMyAppAdm finished' : 'containerMyAppAdm')}>
            <div class="pMyAppAdm">
                <p class="descriptionMyAppAdm">{Description}</p>
                <p class="typeMyApp">&shy;Название компании: {CompanyName}</p>
                <p class="typeMyApp">&shy;Деятельность компании: {Activity}</p>
                <p class="typeMyAppAdm">&bull;	&shy;{Type}</p>
                <p class="typeStyleMyApp">&#8195;&bull;&shy;Штат сотрудников: {Staff}</p>
                <p class="typeStyleMyApp">&#8195;&bull;&shy;Ценовой диапозон: {Pricing}</p>
                <div class="selectBoxApplAdm">
                    <div class="labelSelectApplicAdm">
                    <label class="labelSelectAppAdm">Статус заявки</label>
                    <MySelect value={curStatus} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}}                     
                        onChange={async (e) => {
                            if (e.target.value == '5') {
                                sendMessage()
                            }
                            if (e.target.value == '3') {
                                sendMessageEnd()   
                            } 
                            setCurStatus(e.target.value)
                            await request("/api/application/applicationstatus/" + IdApplication, 'PUT', {
                                IdStatus: e.target.value
                            })
                            toast.success('Статус изменён')
                            
                        }}>
                        {Array.from(status).map((status, index) => {
                            return (
                                <option key={index} value={status.IdStatus}>{status.Name}</option>
                            )
                        })}
                    </MySelect>
                    </div>
                    <div class="labelSelectApplicAdm">
                    <label class="labelSelectAppAdm">Статус оплаты заявки</label>
                    <MySelect value={curStatusPayment} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}} 
                        onChange={async (e) => {
                            setCurStatusPayment(e.target.value)
                            await request("/api/application/applicationstatuspayment/" + IdApplication, 'PUT', {
                                IdStatusPayment: e.target.value
                            });
                            toast.success('Статус оплаты изменён')
                    }}>
                        {Array.from(statusPayment).map((statusPayment, index) => {
                            return (
                                <option key={index} value={statusPayment.IdStatusPayment}>{statusPayment.Name}</option>
                            )
                        })}
                    </MySelect>
                    </div>
                </div>
                <div class="clientLoginNameAdm">
                    <p class="clientMyAppAdm">{Client}</p>
                    <p class="mailMyAppAdm">{Mail}</p>
                </div>
            </div>
            <div class="buttonListMyAppAdm">
                <MyButton onClick={() => navigate(CHAT_ROUTE, {state: {param: IdApplication, status: Status}})} >
                <p class="btnPListMyAppAdm" style={{ width: 70, height: 20}}>Чат</p>
                </MyButton>
                {/* <p class="dateMyAppAdm">{CurDate.replace('T', ' ').replace('00:00:00.000Z', '')}</p> */}
                <p class="dateMyAppAdm">{CurDate.split('T')[0].split('-')[0] + '.' + CurDate.split('T')[0].split('-')[2] + '.' + CurDate.split('T')[0].split('-')[1] + ' '}{CurDate.split('T')[1].split(':')[0]+':'+CurDate.split('T')[1].split(':')[1]}</p>
                {/* <p class="dateMyAppAdm">{CurDate.split('T')[1].split(':')[0]+':'+CurDate.split('T')[1].split(':')[1]}</p> */}
            </div>
        </div>
        );
    }
};

export default MyApplicAdmin;