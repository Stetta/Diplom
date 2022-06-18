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
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// const Chart = () => {

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      "red", 
      "blue",
      "yellow",
      "green",
      "purple",
      "orange"
    ]
  }]
};

function DoughnutChart() {
  return (
    <div>
      <h1>Dougnut Chart</h1>
      <div style={{width: "500px", margin: "0 auto"}}>
      <Line data={data}/>
      </div>
    </div>
  );
};
// }
// export default Chart;
export default DoughnutChart;