import React from "react";
import styles from "./LineChartComponent.module.scss";

import LineCharLegendContent from "./content/LineCharLegendContent";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";
import { apiType } from "../../../hooks/useUserGetData";
import { useUserGetData } from "./../../../hooks/useUserGetData";

const data = [
  {
    name: "Page A", //day
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function LineChartComponent({ userId }) {
  const { _newUser } = useUserGetData(userId, apiType.averageSessions);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}> ... L o a d i n g </h1>
      </main>
    );
  }

  console.log("apiType.averageSessions: ", _newUser.sessions);
//  _newUser.sessions.pop("L")
  return (
    <div className={styles["lineChart"]}>
      <ResponsiveContainer width="100%" height="100%">
        <span className={styles["back"]}></span>
        <LineChart
          className={styles["line-container"]}
          data={_newUser.sessions}
          margin={{ top: 0 }}
          
        >
             {/* Définition des dégradés  
      <defs>  
        <linearGradient id="gradientColor" x1="10%" y1="0%" x2="0%" y2="0%">  
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.1} />  
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0} />  
        </linearGradient>  
      </defs>  */}
          <XAxis
            fill="white"
            dataKey="day"
            padding={{ top: 0, bottom: 0, right: 0, left: 0  }}
            tickLine={false}
            axisLine={false}
            tickMargin={0}
           
            stroke="#FFFFFF"

          />
{/* <Area type="monotone" dataKey="day" stroke="#00ccff" fill="#00ccff" />  */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            activeDot={{
              r: 8,
              fill: "#FFFFFF",
              strokeWidth: "5px",
              stroke: "rgba(255, 255, 255, 0.1983)",
            }}
            dot={{ fill: "transparent", stroke: "transparent" }}
            strokeWidth={2}
          />
          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active || (payload && payload.length == 1)) {
                const [v1] = payload;
                return (
                  <p style={{ backgroundColor: "white" }}>{v1.value} min</p>
                );
              }
            }}
          ></Tooltip>
          <Legend verticalAlign="top" content={<LineCharLegendContent />} />
          {/* <ReferenceArea
        x1="Page E"
        x2="Page G"
        y1={0}
        y2={12000}
        stroke="#FFFFFF"
        strokeOpacity={0.3}
        ifOverflow=""
        fill="rgba(0, 0, 0, 1)"
      /> */}
          {/* <Legend /> */}

          {/* <Line
		   legendType='star'
         type="monotone"
            dataKey="pv"
            activeDot={{ stroke: "black", fill:"red",strokeWidth: 20, r: 10 }}
          /> */}
          {/* <ReferenceLine y={2} stroke="red" strokeDasharray="3 3" />   */}
          {/* <defs>  
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">  
            <stop offset="1.19%" stopColor="#FFFFFF" stopOpacity={1} />  
            <stop offset="81.27%" stopColor="rgba(254, 255, 251, 0.403)" stopOpacity={1} />  
          </linearGradient>  
        </defs>   
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{
              r: 8,
              fill: "#FFFFFF",
              strokeWidth: "5px",
              stroke: "rgba(255, 255, 255, 0.1983)",
            }}
            //activeDot={<dot stroke="red" strokeWidth={20} r={8} />}
            //    hide="true"
            // activeDot={(props) => {
            // 	const { cx, cy } = props;

            // 	return (
            // 	  <circle cx={cx} cy={cy} r={8} fill="red" />
            // 	);
            //   }}
            dot={{ fill: "transparent", stroke: "transparent" }}
            strokeWidth={3}
          />*/}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
