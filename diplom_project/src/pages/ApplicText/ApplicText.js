import React, { useEffect, useState } from "react";
import "./ApplicText.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplicText = () => {
  const [IdClient, setIdClient] = useState("");
  const { error, request, clearError } = useHttp();
  // async function applicHandler () {
  //     const client = await request('http://localhost:8080/api/client', "POST", {
  //         Name: name,
  //         Surname: surname,
  //         Mail: email
  //     })
  //     setIdClient(client.IdClient)
  // }

  useEffect(async () => {
    const curClient = await request("http://localhost:8080/api/client/");
    setId(curClient[0]["IdClient"]);
  }, []);
  const [id, setId] = useState();
  async function bHandler() {
    const data = await request(
    "http://localhost:8080/api/application",
    "POST",
    {
        IdClient: id,
        IdUser: 1,
        Description: message,
    }
    );
    
      
  }

  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
        <ToastContainer/>
      <div class="containerAppText">
        <div class="contentText">
          <div class="right-sideText">
            <div class="topic-textText">Оставьтe Вашу заявку!</div>
            <p class="p-textText">
              Опишите Вашу заявку и мы вместе обсудим Ваш проект.
            </p>
            <div action="#" class="formboxText">
              <div class="message-boxText">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  class="input-tText"
                  placeholder="Сообщение"></textarea>
              </div>
              <MyButton
                style={{ width: 150, height: 45 }}
                onClick={() => bHandler()}>
                Отправить
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicText;
