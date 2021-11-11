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
import { ru } from 'date-fns/locale';
import { stock } from './store/stock';

var hist = stock.history;
const data = [];

for(let i = 0; i< hist.length; i++) {
    data.push({
        date: new Date(hist[i][0]).toISOString(),
        value: hist[i][1],
    })
}

/*for (let num = 30; num >= 1; num--) {
    const _date = new Date();
    _date.setDate(_date.getDate() - num);
    data.push({
        date: _date.toISOString().split('T')[0],
        value: 1 + Math.random() * 500,
    })
}*/

function Graphic() {
    return (
        <ResponsiveContainer width="100%" height={400} >
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2451B7" stopOpacity={1}/>
                        <stop offset="100%" stopColor="#2451B7" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>

                <Area dataKey="value" stroke="#245B7" fill="url(#color)"/>

                <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickFormatter={(str) => {
                        const date = parseISO(str);
                        if (date.getDate() % 7 === 0)
                            return format(date, "MMM, d", {locale: ru});
                        return "";
                    }}
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
                
                <Brush dataKey="name" />
                
            </AreaChart>
        </ResponsiveContainer>
    );
}

function updateBrush(pos) {
    if (this.state.timerId !== 0) {
      clearTimeout(this.timerId)
    }
    this.state.timerId = setTimeout(() => {
      this.setState({ startIndex: pos.startIndex, endIndex: pos.endIndex })
    }, 500)
  }

function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{format(parseISO(label), "eeee, d MMM, yyyy", {locale: ru})}</h4>
                <p>{payload[0] != null ? payload[0].value.toFixed(2) : null} руб.</p>
            </div>
        );
    }
    return null;
}

export default Graphic;
