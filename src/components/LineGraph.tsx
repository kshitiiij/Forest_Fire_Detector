import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Land Burned VS Month',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function generateRandom(min = 0, max = 1000) {

  // find diff
  let difference = max - min;

  // generate random number 
  let rand = Math.random();

  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}


const data = (label:string)=>{

  return {
  labels,
  datasets: [
    {
      label: label,
      data: labels.map(() => generateRandom()),
      borderColor: 'rgb(0, 205, 255)',
      backgroundColor: 'rgb(0, 0, 0)',
    },
  ],
}

};

export default function LineGraph(props:{show:boolean, label:string}) {
  return(
    props.show?<Line options={options} data={data(props.label)} />:<div></div>
  );
}
