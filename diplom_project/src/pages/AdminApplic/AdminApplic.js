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

    // const [type, setType] = useState("");
    // const [curType, setCurType] = useState()
    // async function getType() {
    //     const result = await request('/api/type');
    //     setType(result);
    //   };
    // const bHandler = async () => {
    //     try {
    //       if (message === "") {
    //         toast.error("Заполните описание заявки");
    //         return;
    //       }
    //     const data = await request("/api/application", "POST",
    //     {
    //         IdClient: id,
    //         IdUser: 1,
    //         Description: message,
    //         IdType: curType,
    //     }).then(
    //     toast.success("Успешно.\n Авторизуйтесь данными которые пришли вам на почту"))
    //     } catch (error) {
    //     }
    //   }



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
    // console.log(JSON.parse(localStorage.getItem("clientData")).IdClient)

                // console.log((data).count)
                // console.log(Object.keys(data).length)
    if(data != ""){
    return (
        <div class="elementMyApp">
            <div class="countBox">
                <label>Количество заявок: </label>
                <label>{Object.keys(data).length}</label>
                <MySelect value={curStatus} style={{height: 35, background: '#f0f1f8', fontSize: 16, width: 220, margin: 5}}                     
                        onChange={(e) => {data = Array.from(data).filter(c => c.Status == e.target.value) 
                            Update()
                        }}>
                        <option key="0" value="0">Выберите статус</option>
                        {Array.from(status).map((status, index) => {
                            return (
                                <option key={index} value={status.IdStatus}>{status.Name}</option>
                            )
                        })}
                    </MySelect>
                {/* Подсчеот количества заявок в зависимости от типа, статуса и статуса оплаты */}
            </div>
            {/* <div class="buttonMyApp">
                <MyButton style={{marginTop: 30, width: 150, height: 45}} onClick={() => navigate(APPLICTEXT_ROUTE)}>Создать зявку</MyButton>
            </div> */}
            <div class="pageMyApp">
            <div class="listMyApp">
                {/* {Array.from(data).map((appl) => {
                    return (
                        <div class="containerMyApp">
                            <div class="pMyApp">
                                <p class="descriptionMyApp">{appl.Description}</p>
                                <p class="typeMyApp">&bull;	&shy;{appl.Type}</p>
                                <div >
                                    <MySelect value={curStatus} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}} onChange={(e) => {setCurStatus(e.target.value)}}>
                                        <option key="0" value="0">Выберите статус</option>
                                        {Array.from(status).map((status, index) => {
                                            return (
                                                <option key={index} value={status.IdStatus}>{status.Name}</option>
                                            )
                                        })}
                                    </MySelect>
                                    <MySelect value={curStatusPayment} style={{height: 35, background: '#fff', fontSize: 16, width: 220, margin: 5}} onChange={(e) => {setCurStatusPayment(e.target.value)}}>
                                        <option key="0" value="0">Выберите статус оплаты</option>
                                        {Array.from(statusPayment).map((statusPayment, index) => {
                                            return (
                                                <option key={index} value={statusPayment.IdStatusPayment}>{statusPayment.Name}</option>
                                            )
                                        })}
                                    </MySelect>
                                </div>
                            </div>
                            <div class="buttonListMyApp">
                                <MyButton style={{ width: 70, height: 20}} onClick={() => navigate(CHAT_ROUTE, {state: {param: appl.IdApplication}})}>Чат</MyButton>
                                <p class="dateMyApp">{appl.Date.replace('T', ' ').replace('00:00:00.000Z', '')}</p>
                            </div>
                        </div>
                    );
                })} */}
                {Array.from(data).map((d) => {
                    return (
                        <MyApplicAdmin Description={d.Description} Type={d.Type} IdApplication={d.IdApplication} Client={d.Client} Mail={d.Mail} CurDate={d.Date} Status={d.Status} StatusPayment={d.StatusPayment}/>
                    )
                })}
            </div>
            </div>
        </div>
    )
} 
else{
    return(
        <div class="elementNotMyApp">
            <p class="notApplic">У вас отсутствуют заявки</p>
            {/* <a class="notAApplic" onClick={() => (navigate(APPLICTEXT_ROUTE))}>Создать новую заявку...</a> */}
        </div>
    )
}
};

export default AdminApplic;