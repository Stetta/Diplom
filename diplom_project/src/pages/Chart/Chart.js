import React, { useCallback, useEffect, useState } from "react";
import "./Chart.css";
import MyInput from "../../components/interfase/MyInput/MyInput";
import MyButton from "../../components/interfase/MyButton/MyButton";
import MySelect from "../../components/interfase/MySelect/MySelect";
import { useHttp } from "../../hooks/useHttp";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../../utils/const";
import { Doughnut, Line } from 'react-chartjs-2';

import { Chart as chartjs, BarElement } from 'chart.js'
import {Bar} from 'react-chartjs-2'

// chartjs.register(
//   BarElement 
// )

const Chart = () => {

  const lineChartData = {
    labels: ['October', 'November', 'December'],
    datasets: [
      {
      labels: 'Infected',
      data: [8137119, 9431691, 1066574],
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true
    },
    {
      labels: 'Deaths',
      data: [1216410, 1371390, 1477380],
      backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true
    }
  ]
  };
  // var options = {
  //   maintainAspectRatio: false,
  //     scales: {
  //         y: {
  //             beginAtZero: true
  //         }
  //     }
  // }
  return (
    <div>
      {/* <Line type="line" width={160} height={60}
      options={{
        title: {
          display: true,
          text: "Covid-19",
          fontSixe: 20
        },
        legend: {
          display: true,
          position: "top"
        }
      }}
      data={lineChartData}
      /> */}
      {/* <Bar
        data={data}
        height={400}
        options={options}/> */}
    </div>
  );
};

export default Chart;