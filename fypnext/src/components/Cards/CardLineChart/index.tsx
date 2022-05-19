import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip, Legend)

const CardLineChart = () => {

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
                backgroundColor: "#4c51bf",
                borderColor: "#4c51bf",
                data: [65, 78, 66, 44, 56, 67, 75],
                fill: false,
            },
            {
                label: (new Date().getFullYear() - 1).toString(),
                fill: false,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: [40, 68, 86, 74, 56, 60, 87],
            },
        ]
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    fontColor: "white",
                },
                align: "end",
                position: "bottom",
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            mode: "index",
            intersect: false,
        },
        hover: {
            mode: "nearest",
            intersect: true,
        },
        title: {
            display: false,
            text: "Sales Charts",
            fontColor: "white",
        },
        scales: {
            xAxis: [{
                ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                },
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
                ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                },
                display: true,
                scaleLabel: {
                    display: false,
                    labelString: "Value",
                    fontColor: "white",
                },
                gridLines: {
                    borderDash: [3],
                    borderDashOffset: [3],
                    drawBorder: false,
                    color: "rgba(255, 255, 255, 0.15)",
                    zeroLineColor: "rgba(33, 37, 41, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                },
            }],
        }
    }

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                Overview
                            </h6>
                            <h2 className="text-black text-xl font-semibold">Users visted</h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-350-px">
                        <Line data={data} width={100} height={40} options={options} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLineChart;