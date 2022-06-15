import React, { useEffect, useState } from 'react';
import "./MyApplicAdmin.css";
import MySelect from '../MySelect/MySelect';
import MyButton from '../MyButton/MyButton';
import { useNavigate } from "react-router-dom";
import { useHttp } from '../../../hooks/useHttp';
import { CHAT_ROUTE } from '../../../utils/const';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            <div class="containerMyApp">
            <div class="pMyApp">
                <ToastContainer/>
                <p class="descriptionMyApp">{Description}</p>
                <p class="typeMyApp">&bull;	&shy;{Type}</p>
                <div class="selectBoxAppl">
                    <div class="labelSelectApplic">
                    <label class="labelSelectApp">Статус заявки</label>
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
                    <div class="labelSelectApplic">
                    <label class="labelSelectApp">Статус оплаты заявки</label>
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
                <div class="clientLoginName">
                    <p class="clientMyApp">{Client}</p>
                    <p class="mailMyApp">{Mail}</p>
                </div>
            </div>
            <div class="buttonListMyApp">
                <MyButton style={{ width: 70, height: 20}} onClick={() => navigate(CHAT_ROUTE, {state: {param: IdApplication}})}>Чат</MyButton>
                <p class="dateMyApp">{CurDate.replace('T', ' ').replace('00:00:00.000Z', '')}</p>
            </div>
        </div>
        );
    }
};

export default MyApplicAdmin;