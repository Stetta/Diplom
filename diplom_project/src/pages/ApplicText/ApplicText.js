import React, { useCallback, useEffect, useState } from "react";
import "./ApplicText.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import MySelect from "../../components/interfase/MySelect/MySelect";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/const";


const ApplicText = () => {

  const [type, setType] = useState("");
  const [curType, setCurType] = useState()

  async function getType() {
    const result = await request('/api/type');
    setType(result);
  };

  
  const [IdClient, setIdClient] = useState("");
  const { error, request, clearError } = useHttp();
  const [name, setName] = useState('')
  const [activity, setActivity] = useState('')
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(0);
  const [staff, setStaff] = useState(0);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getId () {
    if (JSON.parse(localStorage.getItem("clientData")) == null) {
      await sleep(500);
      const curClient = await request("/api/client/getlast/last");
      setId(curClient[0]["IdClient"]); 
    } else {
      setId(JSON.parse(localStorage.getItem("clientData")).IdClient)
    }
  }
  const navigate = useNavigate();
  useEffect(() => {
    getId().then(getType());
  }, []);

  const [id, setId] = useState();
  const bHandler = async () => {
    try {
      if (message === "" && name === "" && activity === "") {
        toast.error("Заполните описание заявки");
        return;
      }
      if (price == 0) {
        toast.error("Выберите ценовой диапазон");
        return;
      }
      if (staff == 0) {
        toast.error("Выберите штат сотрудников");
        return;
      }
    const data = await request("/api/application", "POST",
    {
        IdClient: id,
        IdUser: 1,
        Description: message,
        IdStatus: 1,
        IdStatusPayment: 1,
        IdType: curType,
        Name: name,
        Activity: activity,
        IdPricing: price,
        IdStaff: staff
    }).then(
    toast.success("Успешно.\n Авторизуйтесь данными которые пришли вам на почту"))
    } catch (error) {
      
    }
  }


  return (
    <div>
      <div class="containerAppText">
        <div class="contentText">
          <div class="right-sideText">
            <div class="topic-textText">Оставьтe Вашу заявку!</div>
            <p class="p-textText">
              Опишите Вашу заявку и мы вместе обсудим Ваш проект.
            </p>
            <div class="descriptionAppText">
          <p>Что вам требуется разработать?</p>
        </div>
            <div action="#" class="formboxText">
            <div class="message-boxText">
              <MySelect style={{width: '200%'}} value={curType} onChange={(e) => {setCurType(e.target.value)}}>
              <option key="0" value="0">Выберите платформу</option>
              {Array.from(type).map((type, index) => {
                return (
                  <option key={index} value={type.IdType}>{type.Name}</option>
                )
              })}
            </MySelect>
            </div>
              <div class="message-boxText">
                <MyInput
                style={{height: 50, width: "200%"}}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  class="input-tText"
                  placeholder="Название компании"/>
              </div>
              <div class="message-boxText">
                <MyInput
                style={{height: 50, width: "200%"}}
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  class="input-tText"
                  placeholder="Деятельность компании"/>
              </div>
              <div class="message-boxText">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="input-tText"
                  placeholder="Назначение"/>
              </div>
              <div class="message-boxText">
                <MySelect value={price} onChange={(e) => {setPrice(e.target.value)}}
                  style={{height: 50, width: '200%'}}>
                    <option value={0}>Ценовой диапозон</option>
                    <option value={1}>до 20 тыс. р.</option>
                    <option value={2}>от 20 до 40 тыс. р.</option>
                    <option value={3}>от 40 тыс. р.</option>
                  </MySelect>
              </div>
              <div class="message-boxText">
                <MySelect value={staff} onChange={(e) => {setStaff(e.target.value)}}
                  style={{height: 50, width: '200%'}}>
                    <option value={0}>Штат сотрудников</option>
                    <option value={1}>до 5 людей</option>
                    <option value={2}>от 5 до 20 людей</option>
                    <option value={3}>от 20 людей</option>
                  </MySelect>
              </div>              
              <MyButton style={{ width: 150, height: 45 }} onClick={() => bHandler()}>Отправить</MyButton>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default ApplicText;
