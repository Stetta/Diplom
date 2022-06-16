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

const AdminApplic = () => {
    const { request } = useHttp();

    const navigate = useNavigate();

    let [data, setData] = useState({});

    const [status, setStatus] = useState("");
    const [curStatus, setCurStatus] = useState();
    async function getStatus() {
        const result = await request('/api/status');
        setStatus(result);
      };
    const [statusPayment, setStatusPayment] = useState("");
    const [curStatusPayment, setCurStatusPayment] = useState();
    async function getStatusPayment() {
        const result = await request('/api/statuspayment');
        setStatusPayment(result);
      }; 

    useEffect(() => {
        getStatus().then(getStatusPayment());
      }, []);

      const getData = async () => {
        const result = await request("/api/application/getapplicbyuser/" + 1, "GET");
        setData(result);
      }
    useEffect(() => {
        const getData = async () => {
            const result = await request("/api/application/getapplicbyuser/" + 1, "GET");
            setData(result);
          }
        getData()
    }, [request])

    function Update() {
        this.target.setState({ state: this.target.state});
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // const [search, setSearch] = useState('');
    // const 
    return (
        <div class="elementMyAppAdmin">
            {/* <div class="countBoxColor" style={{background: '#f0f1f8'}}> */}
            <div class="countBoxAdmin" style={{background: '#f0f1f8'}}>
                <MySelect value={curStatus} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}}                     
                        onChange={async (e) => { 
                            if (e.target.value == 0) {
                                getData()
                                return;
                            }
                            await sleep(100)
                            setData(Array.from(await request("/api/application/getapplicbyuser/" + 1, "GET")).filter(c => c.Status == e.target.value))
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
                {/* <MyInput placeholder="Поиск по описанию заявки..." style={{background: '#fff', width: 600, marginLeft: 15, height: 35}} title="Только русские буквы" 
                onChange={(e) => setSearch(e.target.value)}
                ></MyInput> */}
            </div>
            <div class="pageMyAppAdmin">
            <div class="listMyAppAdmin">
                {data != "" && (
                    <div class='elementMyAppAdmin'>
                        {Array.from(data).map((d) => {
                            return (
                                <MyApplicAdmin Description={d.Description} Type={d.Type} IdApplication={d.IdApplication} Client={d.Client} Mail={d.Mail} CurDate={d.Date} Status={d.Status} StatusPayment={d.StatusPayment}/>
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
};

export default AdminApplic;