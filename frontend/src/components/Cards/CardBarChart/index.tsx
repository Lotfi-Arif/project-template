import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, BarElement, Legend)

const CardBarChart = () => {

    const data = {
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
        datasets: [
            {
                label: new Date().getFullYear().toString(),
                backgroundColor: "#ed64a6",
                borderColor: "#ed64a6",
                data: [30, 78, 56, 34, 100, 45, 13],
                fill: false,
                barThickness: 8,
              },
              {
                label: (new Date().getFullYear() - 1).toString(),
                fill: false,
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [27, 68, 86, 74, 10, 4, 87],
                barThickness: 8,
              },
        ]
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    fontColor: "rgba(0,0,0,.4)",
                },
                align: "end",
                position: "bottom",
            },
        },
        title: {
            display: false,
            text: "Orders Chart",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        maintainAspectRatio: false,
        responsive: true,
        elements: {
            line: {
                tension: 0,
                borderWidth: 2,
                borderColor: "rgba(47,97,68,1)",
                fill: "start",
                backgroundColor: "rgba(47,97,68,0.3)"
            },
            point: {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {
            xAxis: [{
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "white",
                },
                gridLines: {
                    display: false,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },
            }],
            yAxis: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
            }],
        }
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Total orders
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            {/* <Bar height={100} options={options} data={data}/> */}
          </div>
        </div>
      </div>
        </>
    );
}

export default CardBarChart;