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

const MyApplicAdmin = ({Description, Type, IdApplication, Client, Mail, CurDate, Status, StatusPayment}) => {

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

    useEffect(() => {
        getStatus().then(getStatusPayment());
      }, []);

    if (status && statusPayment) {
        return (
            <div class="containerMyAppAdm">
            <div class="pMyAppAdm">
                <ToastContainer/>
                <p class="descriptionMyAppAdm">{Description}</p>
                <p class="typeMyAppAdm">&bull;	&shy;{Type}</p>
                <div class="selectBoxApplAdm">
                    <div class="labelSelectApplicAdm">
                    <label class="labelSelectAppAdm">Статус заявки</label>
                    <MySelect value={curStatus} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}}                     
                        onChange={async (e) => {
                            setCurStatus(e.target.value)
                            await request("/api/application/applicationstatus/" + IdApplication, 'PUT', {
                            IdStatus: e.target.value
                            });
                            toast.success('Статус изменён')
                        }}>
                        {/* <option key="0" value="0">Выберите статус</option> */}
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
                        {/* <option key="1" value="0">Выберите статус оплаты</option> */}
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
                <MyButton onClick={() => navigate(CHAT_ROUTE, {state: {param: IdApplication}})} >
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