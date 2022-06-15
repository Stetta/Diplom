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

{/* <Doughnut data={...} /> */}

const Chart = () => {

  return (
    <div>
      
    </div>
  );
};

export default Chart;