import React, { useEffect, useMemo, useState } from "react";
import "./Chart.css";
// import { Line } from "react-chartjs-2";
import { ColumnSeries, LineSegment, HistogramSeries, Line, ChartComponent, Inject, LineSeries, SeriesCollectionDirective, SeriesDirective, Category, SegmentDirective, Legend, DataLabel,
AccumulationChartComponent, PieSeries, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip,
 DateTime, Tooltip, StripLine} from '@syncfusion/ej2-react-charts';
import { salesData, sampleData } from "./data";
import { useHttp } from "../../hooks/useHttp";
// import { Chart } from "./components";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
// import { MAIN_ROUTE } from "../../utils/const";
// import { Doughnut, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

const Chart = () => {
  const {request} = useHttp()
  const [data, setData] = useState({})
  const [finalstatistic, setfinalstatic] = useState([])
  const [finalstatisticVisit, setfinalstaticVisit] = useState([])

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

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useMemo(async() => {
    const getData = async () => {
        const result = await request("/api/application/getapplicbyuser/" + JSON.parse(localStorage.getItem("clientData")).IdClient, "GET");
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
      const resultVisit = await request("/api/application/getapplicbyuser/" + JSON.parse(localStorage.getItem("clientData")).IdClient, "GET");
      setData(resultVisit);
      for(const e of resultVisit){
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
      getData().then(getDataVisit())
    }, [])
  return(
    <div class="chartVisitClient">
      {/* <ChartComponent title="Analysis" primaryXAxis={{valueType:"Category"}}>
        <Inject services={[LineSeries, Category]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Line"
           visible="true" backgroundColor="#000000" borderColor="#000000" dataSource={lineChartData}
          xName="labels" yName="data">
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent> */}
      <div class="chartVisitClientFirst">
      <AccumulationChartComponent title="Статистика типов приложений на разработку ПО" legendSettings={{position: "Bottom"}} tooltip={{enable:true}}>
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}></Inject>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type="Pie" dataSource={finalstatistic}
          xName="name" yName="value"
          dataLabel={{visible: true, name:"text", position: "Inside"}}></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
</div>
<div class="chartVisitClientSecond">
      <AccumulationChartComponent title="Статистика обращений в компанию по месяцам" legendSettings={{position: "Bottom"}} tooltip={{enable:true}}>
        <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip]}></Inject>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective type="Pie" dataSource={finalstatisticVisit}
          xName="name" yName="value"
          dataLabel={{visible: true, name:"text", position: "Inside"}}></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      </div>
      {/* <ChartComponent title="Статистика обращений в компанию" primaryXAxis={{valueType:"Category"}}>
        <Inject services={[LineSeries, Category]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Line" dataSource={salesData} xName="month" yName="sales"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent> */}
      {/* <ChartComponent title="Статистика" primaryXAxis={{valueType:"Category", title:"Месяц"}}
      primaryYAxis={{title:"Количество заявок"}} legendSettings={{visible:true}}>
        <Inject services={[LineSeries, Category]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Line"
          dataSource={salesData}
          xName="month" 
          yName="sales"
          width={2}
          // marker={{dataLabel:{visible:true}, visible: true}}
          >
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent> */}
       {/* <ChartComponent id='charts'
                        primaryXAxis={{
                            valueType: 'Category',
                            majorGridLines: { width: 1 }
                        }}

                        chartArea={{ border: { width: 1 } }}
                        tooltip={{ enable: true }}
                        title='Inflation - Consumer Price'>
                        <Inject services={[LineSeries, Category, Legend, Tooltip]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={salesData} xName='month' yName='sales' name='Germany' fill="rgba(255,130,255, 1)"
                                width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent> */}
      
    </div>
  )
};
export default Chart;