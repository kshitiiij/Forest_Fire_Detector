import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Fire', 'Fire Free'],
  datasets: [
    {
      label: '# of Votes',
      data: [6, 20],
      backgroundColor: [
        'rgb(253, 120, 1)',
        'rgb(37, 169, 63)',
      ],
      borderColor: [
        'rgba(253, 120, 1, 1)',
        'rgba(37, 169, 63, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart(props:{show:boolean}) {
  return (
      props.show?<Pie data={data} />:<div></div>
  );
}
