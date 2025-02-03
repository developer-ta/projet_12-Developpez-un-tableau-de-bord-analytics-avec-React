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
} from "recharts";

import styles from "./BarChartComponent.module.scss";
import { BarChartTooltipContent } from "./content/BarChartTooltipContent";
import BarCharLegendContent from "./content/BarCharLegendContent";
import { apiType, useUserGetData } from "../../../hooks/useUserGetData";



export default function BarChartComponent({ userId }) {
  const { _newUser } = useUserGetData(userId, apiType.activity);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}>... L o a d i n g </h1>
      </main>
    );
  }

  console.log("_newUser.sessions.calories: ", _newUser);

  return (
    <div className={styles["barChart"]}>

        <BarChart
          className={styles["barChart-container"]}
          barCategoryGap="2%"
          barGap={11}
          width={559}
          height={200}
          
          maxBarSize={900}
          data={_newUser.sessions} //_newUser.sessions
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day" //day
            stroke="#9B9EAC"
            fontSize={10}
            tickLine={false}
            axisLine={true}
            interval={0}
            
            tickFormatter={(Value) => {
              return Value;
            }}
          />

          <YAxis orientation="right" axisLine={false} tickLine={false} width={3}/>
          <Tooltip
            wrapperStyle={{ top: "-3%", left: "69px" }}
            content={<BarChartTooltipContent />}
            cursor={{ fill: "#C4C4C480", fontSize: 5 }}
          />

          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <Legend verticalAlign="top" content={<BarCharLegendContent />} />
          <Bar
            dataKey="kilogram" //poids
            fill="#282D30"
            barSize={7}
            radius={[3, 3, 0, 0]}
            activeBar={<Rectangle fill="#282D30" />}
          />
          <Bar
            dataKey="calories" //calories
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
            activeBar={<Rectangle fill="#E60000" />}
          />
        </BarChart>
      
    </div>
  );
}
