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
      if (message === "") {
        toast.error("Заполните описание заявки");
        return;
      }
    const data = await request("/api/application", "POST",
    {
        IdClient: id,
        IdUser: 1,
        Description: message,
        IdType: curType,
    }).then(
    toast.success("Успешно.\n Авторизуйтесь данными которые пришли вам на почту"))
    } catch (error) {
      
    }
  }

  const [message, setMessage] = useState("");

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
          <MySelect value={curType} onChange={(e) => {setCurType(e.target.value)}}>
            <option key="0" value="0">Выберите платформу</option>
            {Array.from(type).map((type, index) => {
              return (
                <option key={index} value={type.IdType}>{type.Name}</option>
              )
            })}
          </MySelect>
        </div>
        {/*  */}
            <div action="#" class="formboxText">
              <div class="message-boxText">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="input-tText"
                  placeholder="Описание заявки"></textarea>
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
