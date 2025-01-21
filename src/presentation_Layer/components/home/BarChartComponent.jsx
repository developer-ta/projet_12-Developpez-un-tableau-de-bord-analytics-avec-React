import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

import styles from './HomeBody.module.scss';
import { BarChartTooltipContent } from './contentChart/BarChartTooltipContent';
import BarCharLegendContent from './contentChart/BarCharLegendContent';

const data = [
  {
    name: 1,
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 2,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 3,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 4,
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 5,
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 6,
    uv: 2390,
    pv: 3800,
    amt: 25,
  },
  {
    name: 7,
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function BarChartComponent() {
  return (
    <div className={styles['barChart']}>
      <h3>BarChartComponent</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barCategoryGap="2%"
          barGap={11}
          width={835}
          height={320}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            stroke="#9B9EAC"
            fontSize={10}
            tickLine={false}
            axisLine={true}
            interval={0}
            tickFormatter={(Value) => {
              return Value;
            }}
          />

          <YAxis orientation="right" axisLine={false} />
          <Tooltip
            wrapperStyle={{ top: '-3%', left: '54px' }}
            content={<BarChartTooltipContent />}
            cursor={{ fill: '#C4C4C480', fontSize: 5 }}
          />

          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <Legend verticalAlign="top" content={<BarCharLegendContent />} />
          <Bar
            dataKey="pv"
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
            activeBar={<Rectangle fill="#282D30" />}
          />
          <Bar
            dataKey="uv"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
            activeBar={<Rectangle fill="#E60000" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
