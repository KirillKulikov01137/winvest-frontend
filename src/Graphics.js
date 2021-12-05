import './Graphics.css';
import {format, parseISO} from "date-fns";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Brush
} from 'recharts';
import {ru} from 'date-fns/locale';
import moment, { locale } from 'moment';
import 'moment/locale/ru';

moment.locale('ru')

function linear(a, b, x){
    return a * x + b
}


function quadratic(a, b, c, x){
    return a * x ** 2 + b * x + c
}

function logarithmic(a, b, x){
    return a * Math.log(x) + b
}

function exponential(a, b, x){
    return a * Math.exp(x) + b
}

function findX(type, predict)
{
    let x = 1;
    let y = calculatePrice(x, type, predict);
    while(y<lastPrice)
    {
        x++;
        y = calculatePrice(x, type, predict);
    }
    return x;
}

function calculatePrice(x, type, predict)
{
    let price;
        switch(type){
            case 'lin':
                price = linear(predict[0], predict[1], x);
                break;
            case 'quad':
                price = quadratic(predict[0], predict[1], predict[2], x);
                break;
            case 'log':
                price = logarithmic(predict[0], predict[1], x);
                break;
            case 'dots':
                price = predict[x];
                break;
        }
        return price;
}

function getData(history) {
    data = [];
    const hist = history.hist

    for (let i = 0; i < hist.length; i++) {
        data.push({
            date: new Date(hist[i][0]).toISOString(),
            value: hist[i][1],
        })
    }
    oldData = data;
    if(data.length > 0)
    {
        lastPrice = data[data.length-1].value;
        lastDate = data[data.length-1].date;
    }
    if (!history.predict)
        return
    GetPrediction(60, history.predict.type, history.predict.data);
}

function GetPrediction(x, type, predict) {
    // data = oldData;

    let startX = findX(type, predict);
    for(let i=1 + startX; i<=x + startX; i++)
    {
        if(data.length > 0)
            data.push({
            date: new Date(addDays(lastDate, i-startX)).toISOString(),
            predict: calculatePrice(type != 'dots' ? i : i-startX, type, predict),
        })
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

let data = [];
let oldData = [];
let lastPrice = 0;
let lastDate;

function Graphic(history) {
    getData(history);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{top: 5, right: 0, left: 30, bottom: 0}}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#2451B7" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>

                <Area dataKey="value" stroke="#245B7" fill="url(#color)"/>
                <Area dataKey="predict" stroke="#245B7" fill="green"/>

                <XAxis
                    dataKey="date"
                    tickLine={true}
                    tick={CustomizedAxisTick}
                />

                <YAxis
                    dataKey="value"
                    axisLine={false}
                    tickLine={false}
                    tickCount={8}
                    tickFormatter={(number) => `${number},руб`}
                />

                <Tooltip content={<CustomTooltip/>}/>

                <CartesianGrid vertical={false}/>

                <Brush tickFormatter={xAxisTickFormatter} dataKey="date"/>

            </AreaChart>

        </ResponsiveContainer>
    );
}

const CustomizedAxisTick = ({ x, y, payload }) => {
    const dateTip = moment(payload.value)
        .format("ll");
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={23} y={0} dy={14} fontSize="1em" fontFamily="bold" textAnchor="end" fill="#363636">
                {dateTip}</text>
        </g>
    );
}

const xAxisTickFormatter = (timestamp_measured) => {
    return moment(timestamp_measured)
        .format("ll")
}


function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{label != null ? format(parseISO(label), "eeee, d MMM, yyyy", {locale: ru}) : null}</h4>
                <p>{payload[0] != null ? payload[0].value.toFixed(2) : null} руб.</p>
            </div>
        );
    }
    return null;
}

export default Graphic;
