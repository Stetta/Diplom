import React, { useCallback, useEffect, useState } from "react";
import "./AdminApplic.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import MySelect from "../../components/interfase/MySelect/MySelect";
import MyApplicAdmin from "../../components/interfase/MyApplicAdmin/MyApplicAdmin";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE, CHAT_ROUTE } from "../../utils/const";
import MyLoader from "../../components/loader/Loader";

const AdminApplic = () => {
    const { request } = useHttp();

    const navigate = useNavigate();

    let [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    const [status, setStatus] = useState("");
    const [curStatus, setCurStatus] = useState();
    const [statusPayment, setStatusPayment] = useState("");
    const [curStatusPayment, setCurStatusPayment] = useState();
    const [sorting, setSorting] = useState(false)

    async function getStatus() {
        const result = await request('/api/status');
        setStatus(result);
    };

    async function getStatusPayment() {
        const result = await request('/api/statuspayment');
        setStatusPayment(result);   
    }; 
    
    const getData = async () => {
        const result = await request("/api/application/getapplicbyuser/" + JSON.parse(localStorage.getItem("clientData")).IdClient, "GET");
        setData(result.filter(c => c.Status != 3 && c.Status != 5));
    }
    
    useEffect(() => {
        getData().then(getStatus()).then(getStatusPayment())
    }, [request])

    function Update() {
        this.target.setState({ state: this.target.state});
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    if (loading) {
        return (
            <div class="elementMyAppAdmin">
                <MyLoader/>
            </div>
        )
    } else {
        return (
            <div class="elementMyAppAdmin">
                <div class="countBoxAdmin" style={{background: '#d4d9fa'}}>
                    <MySelect value={curStatus} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 10}}                     
                            onChange={async (e) => {
                                setData({}) 
                                if (e.target.value == 0) {
                                    setCurStatus(e.target.value)
                                    getData()
                                    return;
                                } else {
                                    setCurStatus(e.target.value)
                                    let a = (await request("/api/application/getapplicbyuser/" + JSON.parse(localStorage.getItem("clientData")).IdClient, "GET"))
                                    await sleep(200)
                                    a = a.filter(c => c.Status == e.target.value)
                                    setData(a)
                                }
                                }}>
                            <option key="0" value="0">Выберите статус</option>
                            {Array.from(status).map((status, index) => {
                                return (
                                    <option key={index} value={status.IdStatus}>{status.Name}</option>
                                )
                            })}
                        </MySelect>
                        <div class="labelCountApllAdmin">
                    <label>Количество заявок: </label>
                    <label>{Object.keys(data).length}</label>
                    </div>
                </div>
                <div class="pageMyAppAdmin">
                <div class="listMyAppAdmin">
                    {data != "" && (
                        <div class='elementMyAppAdmin'>
                            {Array.from(data).map((d) => {
                                return (
                                    <MyApplicAdmin Description={d.Description} 
                                                   Type={d.Type}
                                                   IdApplication={d.IdApplication}
                                                   Client={d.Client} 
                                                   Mail={d.Mail} 
                                                   CurDate={d.Date} 
                                                   Status={d.Status} 
                                                   StatusPayment={d.StatusPayment}
                                                   CompanyName={d.CompanyName}
                                                   Activity={d.Activity}
                                                   Staff={d.Staff}
                                                   Pricing={d.Pricing}/>
                                )
                            })}
                        </div>
                    )}
                    {data == "" && (                    
                        <div class="elementNotMyAppAdmin">
                            <p class="notApplicAdmin">У вас отсутствуют заявки</p>
                        </div>
                    )}
                </div>
                </div>
            </div>
        )
    }
};

export default AdminApplic;