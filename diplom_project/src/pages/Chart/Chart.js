import React, { useEffect, useMemo, useState } from "react";
import "./Chart.css";
import { ColumnSeries, LineSegment, HistogramSeries, Line, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, SegmentDirective, Legend, DataLabel,
AccumulationChartComponent, PieSeries, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip,
 DateTime, Tooltip, StripLine} from '@syncfusion/ej2-react-charts';
import { salesData, sampleData } from "./data";
import { useHttp } from "../../hooks/useHttp";
import DataGrid from 'react-data-grid';
import MyModal from "../../components/interfase/MyModal/MyModal"
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import { toast } from "react-toastify";
import validator  from "validator";
import MySelect from '../../components/interfase/MySelect/MySelect'

const Chart = () => {
  const {request} = useHttp()
  const [data, setData] = useState({})
  const [users, setUsers] = useState({})
  const [finalstatistic, setfinalstatic] = useState([])
  const [finalstatisticVisit, setfinalstaticVisit] = useState([])
  const [curUser, setCurUser] = useState({})
  const [modal, setModal] = useState(false)
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setEdit] = useState(false);
  const [password, setPassword] = useState('')

  const columns = [
    { key: 'IdUser', name: 'ID' },
    { key: 'Surname', name: 'Фамилия' },
    { key: 'Name', name: 'Имя' },
    { key: 'Patronymic', name: 'Отчество' },
    { key: 'Login', name: 'Почта' },
    { key: 'Count', name: 'Кол-во заявок' },
  ];

  const rows = [
    { IdClient: 0, Name: 'Example' },
    { id: 1, title: 'Demo' }
  ];
  

  const statistic = [
    {name: 'Windows приложение', value: 0}, 
    {name: 'Web-приложение', value: 0}, 
    {name: 'Мобильное Android приложение', value: 0}, 
    {name: 'Мобильное iOS приложение', value: 0}
  ]
  
  const statisticVisit = [
    {name: 'Январь', value: 0}, 
    {name: 'Февраль', value: 0}, 
    {name: 'Март', value: 0}, 
    {name: 'Апрель', value: 0},
    {name: 'Май', value: 0},
    {name: 'Июнь', value: 0},
    {name: 'Июль', value: 0},
    {name: 'Август', value: 0},
    {name: 'Сентябрь', value: 0},
    {name: 'Октябрь', value: 0},
    {name: 'Ноябрь', value: 0},
    {name: 'Декабрь', value: 0}
  ]


  useMemo(async() => {
    const getUsers = async () => {
      const users = await request('/api/user')
      setUsers(users);
      setCurUser(users[0])
    }

    const getData = async () => {
        const result = await request("/api/application");
        setData(result);
        for(const e of result) {
          if (e.Type == 'Windows приложение') {
            statistic[0]["value"] += 1
          } else if (e.Type == 'Web-приложение') {
            statistic[1]['value'] += 1
          } else if (e.Type == 'Мобильное Android приложение') {
            statistic[2]['value'] += 1
          } else if (e.Type == 'Мобильное iOS приложение') {
            statistic[3]['value'] += 1
          }
        }
        setfinalstatic(statistic)
    }

    const getDataVisit = async () => {
      const resultVisit = await request("/api/application");
      setData(resultVisit);
      for(const e of resultVisit.filter(c => c.Date.split('-')[0] == 2022)){
        if (e.Date.split('T')[0].split('-')[1] == '01') {
          statisticVisit[0]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '02') {
          statisticVisit[1]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '03') {
          statisticVisit[2]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '04') {
          statisticVisit[3]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '05') {
          statisticVisit[4]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '06') {
          statisticVisit[5]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '07') {
          statisticVisit[6]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '08') {
          statisticVisit[7]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '09') {
          statisticVisit[8]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '10') {
          statisticVisit[9]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '11') {
          statisticVisit[10]['value'] += 1
        } else if (e.Date.split('T')[0].split('-')[1] == '12') {
          statisticVisit[11]['value'] += 1
        }
      }
      setfinalstaticVisit(statisticVisit)
    }
    getData().then(getDataVisit()).then(getUsers())
  }, [])


  //Опасная ебала
  // useEffect(() => {
  //   console.log('a')
  //   const getUsers = async () => {
  //     const users = await request('/api/user')
  //     setUsers(users);
  //   }
  //   getUsers()
  // }, [request, users])

  const getData = async () => {
    const result = await request("/api/application");
    setData(result);
  }

  async function sendMail (a) {
    const client = await request('/api/client/sendmail', "POST", {
        mail: email,
        password: a
    });
  }

  async function add(a) {
    const client = await request('/api/user', "POST", {
      Name: name,
      Surname: surname,
      Login: email,
      Patronymic: patronymic,
      Photo: null,
      Password: a,
      IdRole: 1
    })
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function createpassword() {
    setPassword(String(Math.round(Math.random() * 100000)))
  }

  async function handleAdd() {
    if (name === "" || surname === "" || email === "") {
      toast.error("Заполните все поля");
      return;
    }

    if (!validator.isAlphanumeric(name, ['ru-RU'], {ignore: ' -'}) || !validator.isAlphanumeric(surname, ['ru-RU'], {ignore: ' -'})) {
        toast.error('Используйте только кириллицу')
        return;
    }
      
    if (!validator.isEmail(email)) {
        toast.error('Соблюдайте формат почты!')
        return;
    }

    const users = await request('api/user');
    if (users.filter(e => e.Login == email).length > 0) {
        toast.error('Пользователь с такой почтой уже зарегистрирован')
        return;
    } else {
      let a = String(Math.round(Math.random() * 100000))
      await sleep(200)
      add(a)
      sendMail(a)
      toast.success('Успешно')
      setModal(false)
    }
  }

  async function handleDelete() {
    if (curUser.Count != 0) {
      toast.error('Невозможно удалить сотрудника с заявками!')
      return;
    }
    toast.success('Успешно');
    setModal(false)
    const del = await request('api/user/del/' + curUser.IdUser, 'PUT')
  }

  async function handleSave() {
    if (name === "" || surname === "" || email === "") {
      toast.error("Заполните все поля");
      return;
    }

    if (!validator.isAlphanumeric(name, ['ru-RU'], {ignore: ' -'}) || !validator.isAlphanumeric(surname, ['ru-RU'], {ignore: ' -'})) {
        toast.error('Используйте только кириллицу')
        return;
    }

    
    if (!validator.isEmail(email)) {
      toast.error('Соблюдайте формат почты!')
      return;
    }
    
    const user = await request('/api/user/byidu/' + curUser.IdUser)

    await new Promise(async () => {
      const users = await request('api/user');
      if (users.filter(e => e.Login == email).length > 0 && (email != user[0]['Login'])) {
          toast.error('Пользователь с такой почтой уже зарегистрирован')
          return;
      } else {
        const save = await request("/api/user/" + curUser.IdUser, "PUT", {
          Surname: surname,
          Name: name,
          Patronymic: patronymic,
          Login: email,
          Photo: user[0]['Photo'],
          Password: user[0]['Password'],
          IdRole: 1
        });
        toast.success('Успешно')
        setModal(false)
        getData()
      }
    })
  }

  if (data) {
    return (
      <div class='chartWrap'>
          <div style={{textAlign: "center", justifyContent: "center", alignItems: "center", padding: 15, marginTop: 50}}>
            <p>Общая статистика</p>
          </div>
        <div class='chartPiesWrap'>
          <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{margin: 'auto', textAlign: 'center'}}>
              <MySelect style={{width: 200, margin: 5}} onChange={(e) => {
                let a = 2022
                if (e.target.value != 1000) {
                  a = e.target.value
                }
                for(const f of data.filter(c => c.Date.split('-')[0] == a)) {
                  if (f.Type == 'Windows приложение') {
                    statistic[0]["value"] += 1
                  } else if (f.Type == 'Web-приложение') {
                    statistic[1]['value'] += 1
                  } else if (f.Type == 'Мобильное Android приложение') {
                    statistic[2]['value'] += 1
                  } else if (f.Type == 'Мобильное iOS приложение') {
                    statistic[3]['value'] += 1
                  }
                }
                setfinalstatic(statistic)
              }}>
                <option value={1000}>Выберите год</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
              </MySelect>
            </div>
            <AccumulationChartComponent title="Статистика типов приложений на разработку ПО" legendSettings={{position: "Bottom"}} tooltip={{enable:true}}>
              <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}></Inject>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective type="Pie" dataSource={finalstatistic}
                  xName="name" yName="value"
                  dataLabel={{visible: true, name:"text", position: "Inside"}}></AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{margin: 'auto', textAlign: 'center'}}>
              <MySelect style={{width: 200, margin: 5}} onChange={(e) => {
                let a = 2022
                if (e.target.value != 1000) {
                  a = e.target.value
                }
                
                for(const f of data.filter(c => c.Date.split('-')[0] == a)){
                  if (f.Date.split('T')[0].split('-')[1] == '01') {
                    statisticVisit[0]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '02') {
                    statisticVisit[1]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '03') {
                    statisticVisit[2]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '04') {
                    statisticVisit[3]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '05') {
                    statisticVisit[4]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '06') {
                    statisticVisit[5]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '07') {
                    statisticVisit[6]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '08') {
                    statisticVisit[7]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '09') {
                    statisticVisit[8]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '10') {
                    statisticVisit[9]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '11') {
                    statisticVisit[10]['value'] += 1
                  } else if (f.Date.split('T')[0].split('-')[1] == '12') {
                    statisticVisit[11]['value'] += 1
                  }
                }
                setfinalstaticVisit(statisticVisit)
              }}>
                <option value={1000}>Выберите год</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
              </MySelect>
            </div>
            <AccumulationChartComponent title="Статистика обращений в компанию по месяцам" legendSettings={{position: "Bottom"}} tooltip={{enable:true}}>
              <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}></Inject>
              <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective type="Pie" dataSource={finalstatisticVisit}
                  xName="name" yName="value"
                  dataLabel={{visible: true, name:"text", position: "Inside"}}></AccumulationSeriesDirective>
              </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
          </div>   
        </div>
        <div style={{textAlign: "center", justifyContent: "center", alignItems: "center"}}>
            <p>Данные о сотрудниках</p>
        </div>
            <div class="ButtonAddChart">
              <MyButton style={{marginTop: 20, width: 150, height: 35}} onClick={() => {
                setModal(true)
                setCurUser('')
                setSurname('')
                setEmail('')
                setName('')
                setPatronymic('')
                setEdit(false)
                }}>
                  Добавить сотрудника
              </MyButton>
            </div>
        {(JSON.parse(localStorage.getItem('clientData')).IdClient) && (
          <div style={{display: 'grid', gridTemplateColumns: '60px auto 60px' }}>
            <DataGrid columns={columns} rows={users} style={{gridColumnStart: '2', margin: 10, marginBottom: 50}} onRowClick={(rowId, row) => {
              setCurUser(rowId)
              setSurname(rowId.Surname)
              setEmail(rowId.Login)
              setName(rowId.Name)
              setPatronymic(rowId.Patronymic)
              setEdit(true)
              setModal(true)
            }}/>         
          </div>
        )}
        <MyModal visible={modal} setVisible={setModal}>
          <div>
              <div class="contentModalChart">
                <div class="inputBoxChart">
                  {isEditing && (
                    <p class="pBoxChart">Данные о выбранном сотруднике</p>
                  )}
                  {!isEditing && (
                    <p class="pBoxChart">Добавление нового сотрудика</p>
                  )}
                  <MyInput value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Введите фамилию" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="surname" name="surname"  title="Только русские буквы"/>
                  {/* <input class="inputMuInputChartModal" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Введите фамилию" id="surname" name="surname"  title="Только русские буквы"/> */}
                  <MyInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="name" name="name"  title="Только русские буквы"/>
                  {/* <input class="inputMuInputChartModal" value={name} onChange={(e) => setName(e.target.value)} placeholder="Введите имя" id="name" name="name"  title="Только русские буквы"/> */}
                  <MyInput value={patronymic} onChange={(e) => setPatronymic(e.target.value)} placeholder="Введите отчество" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="patronymic" name="patronymic"  title="Только русские буквы"/>
                  {/* <input class="inputMuInputChartModal" value={patronymic} onChange={(e) => setPatronymic(e.target.value)} placeholder="Введите отчество" id="patronymic" name="patronymic"  title="Только русские буквы"/> */}
                  <MyInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" style={{height: 50, marginTop: 10, marginLeft: 5, marginRight: 5}} id="email" name="email"  title="В формате: name@gmail.com"/>
                  {/* <input class="inputMuInputChartModal" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Введите почту" id="email" name="email"  title="В формате: name@gmail.com"/> */}
                </div>
                <div class="buttonBoxChart">
                  <MyButton style={{marginTop: 20, width: 120, height: 35}} onClick={isEditing ? handleSave : handleAdd}>
                    {(isEditing) && <p style={{fontSize: 18}}>Сохранить</p>}
                    {(!isEditing) && <p style={{fontSize: 18}}>Добавить</p>}
                  </MyButton>
                  {(isEditing) && (
                    <MyButton style={{marginTop: 20, width: 120, height: 35}} onClick={handleDelete}>Удалить</MyButton>
                  )}
                </div>
              </div>
          </div>
        </MyModal>
        

      </div>
    )
  }
};
export default Chart;