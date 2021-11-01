import './Graphics.css';
import {format, parseISO} from "date-fns";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const data = [];
for (let num = 30; num >= 1; num--) {
    const _date = new Date();
    _date.setDate(_date.getDate() - num);
    data.push({
        date: _date.toISOString().split('T')[0],
        value: 1 + Math.random() * 500,
    })
}


function Graphic() {
    return (
        <ResponsiveContainer width="100%" height={400}>
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
                            return format(date, "MMM, d");
                        return "";
                    }}
                />

                <YAxis
                    dataKey="value"
                    axisLine={false}
                    tickLine={false}
                    tickCount={8}
                    tickFormatter={(number) => `${number},руб.`}
                />

                <Tooltip content={<CustomTooltip/>}/>

                <CartesianGrid vertical={false}/>
            </AreaChart>
        </ResponsiveContainer>
    );
}

function CustomTooltip({active, payload, label}) {
    if (active) {
        return (
            <div className="tooltip">
                <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
                <p>{payload[0].value.toFixed(2)} руб.</p>
            </div>
        );
    }
    return null;
}

export default Graphic;
