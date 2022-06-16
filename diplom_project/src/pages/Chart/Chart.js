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
import { Doughnut } from 'react-chartjs-2';

import { Chart as chartjs, BarElement } from 'chart.js'
import {Bar} from 'react-chartjs-2'

// chartjs.register(
//   BarElement 
// )

const Chart = () => {

  // var data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [{
  //     labels: '# of Votes',
  //     data: [12, 19, 3, 5, 2, 3],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //               'rgba(54, 162, 235, 0.2)',
  //               'rgba(255, 206, 86, 0.2)',
  //               'rgba(75, 192, 192, 0.2)',
  //               'rgba(153, 102, 255, 0.2)',
  //               'rgba(255, 159, 64, 0.2)'
  //           ],
  //           borderColor: [
  //               'rgba(255, 99, 132, 1)',
  //               'rgba(54, 162, 235, 1)',
  //               'rgba(255, 206, 86, 1)',
  //               'rgba(75, 192, 192, 1)',
  //               'rgba(153, 102, 255, 1)',
  //               'rgba(255, 159, 64, 1)'
  //           ],
  //           borderWidth: 1
  //   }]
  // }
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
      {/* <Bar
        data={data}
        height={400}
        options={options}/> */}
    </div>
  );
};

export default Chart;