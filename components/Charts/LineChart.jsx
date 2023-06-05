'use client';

import * as echarts from 'echarts';
import { useEffect } from 'react';

function LineChart() {
  useEffect(() => {
    let mainChart = echarts.init(document.querySelector('#main-chart'));

    mainChart.setOption({
      title: {
        text: 'Diagram Pemasukan & Pengeluaran',
      },
      tooltip: {},
      xAxis: {
        data: ['Januari', 'Februari', 'Maret', 'April', 'Mei'],
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 43, 49],
          type: 'line',
          stack: 'x',
        },
        {
          data: [5, 4, 3, 5, 10],
          type: 'line',
          stack: 'x',
        },
      ],
    });
  }, []);

  return (
    <div>
      <div id='main-chart' className='w-3/4 h-[400px]'></div>
    </div>
  );
}

export default LineChart;
