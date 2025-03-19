import Chart from "react-apexcharts";
import { LuTrendingUp, LuTrendingDown } from "react-icons/lu";

type Props = {
    color: string;
    title: string;
    total: string;
    icon: React.ReactNode;
    advancementPercentage: number;
}

const ChartCard = (props: Props) => {

    return (
        <div className="py-6 px-[15px] flex flex-col gap-5 rounded-xl bg-white dark:bg-slate-800">
            <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-4 items-center">
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill={props.color} width="48" height="52" viewBox="0 0 48 52"><path d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z" ></path></svg>
                        <span className="text-white absolute left-1/2 top-1/2 -translate-1/2">
                            {props.icon}
                        </span>
                    </span>
                    <div className="flex flex-col">
                        <span className="text-gray-600 dark:text-gray-200">
                            {props.title}
                        </span>
                        <span className="font-bold text-[22px] dark:text-slate-400">
                            {props.total}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    {
                        props.advancementPercentage == 0 ? (
                            <LuTrendingUp size={22} className="text-slate-300" />
                        ): (
                            props.advancementPercentage > 0 ? (
                                <LuTrendingUp size={22} className="text-green-500" />
                            ) : (
                                <LuTrendingDown size={22} className="text-red-500" />
                            )
                        )
                    }
                    <span className="text-sm font-semibold">
                        { Math.abs(props.advancementPercentage).toFixed(2) }%
                    </span>
                </div>
            </div>
            <Chart
                type="area"

                options={{
                    tooltip: {
                        custom(options) {
                            return `${options.series[0][options.dataPointIndex]}`
                        },
                        cssClass:'text-black'
                    },
                    xaxis: {
                        labels: {
                            show: false,
                        }
                    },
                    yaxis: {
                        labels: {
                            show: false,
                        }
                    },
                    chart: {
                        toolbar: {
                            show: false
                        },
                        parentHeightOffset: 0,
                        sparkline: {
                            enabled: true
                        }
                    },
                    grid: {
                        show: false,
                        padding: {
                            left: 0,
                            bottom: 0,
                            right: 0,
                            top: 0
                        }
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 3,
                    },
                    fill: {
                        colors: [props.color],
                    },
                    dataLabels: {
                        enabled: false
                    }
                }} 
                
                series={[
                    {
                        data: [20, 50, 7, 100, 30, 80, 100],
                    }
                ]}

                height={32}
            />
        </div>
    )
}

export default ChartCard


