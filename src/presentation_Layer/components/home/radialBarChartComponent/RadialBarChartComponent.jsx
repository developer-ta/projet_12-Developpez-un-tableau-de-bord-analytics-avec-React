import styles from "./RadialBarChartComponent.module.scss";

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  PolarRadiusAxis,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { apiType, useUserGetData } from "../../../hooks/useUserGetData";

const data = [
  {
    // name: "18-24",
    uv: 50,

    fill: "#ff0000",
  },
  {
    // name: "25-29",
    uv: 100,

    fill: "#FFFFFF",
  },
];
export default function RadialBarChartComponent({ userId }) {
  const { _newUser } = useUserGetData(userId, apiType.userInfo);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}>... L o a d i n g </h1>
      </main>
    );
  }

  const score = _newUser.todayScore * 100 || _newUser.score * 100;
  data[0]["uv"] = score;

  return (
    <div className={styles["radialChart-wrapper"]}>
      <ResponsiveContainer width="75%" height="75%">
        <RadialBarChart
          className={styles["radialChart-container"]}
          barSize={10}
          // width="100%"
          // height="100%"
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="80%"
          // strokeWidth={1}
          // stroke="#ccc"
          // radius={[3, 3, 5, 5]}
          startAngle={90}
          endAngle={450}
          data={data}
          //  stroke="#FFFFFF"
          // strokeWidth={10}
        >
          <RadialBar
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
            cornerRadius={10}
            // strokeWidth={"1"}
            // stroke="#FBFBFB"
            // fillOpacity={1}
            minAngle={15}
            // label={{ position: "inside", fill: "#ccc" }}
            // label={false}
            // background={true}
            // clockWise
            dataKey="uv"
          />
          {/* <RadialBar
        cornerRadius={10}
        // strokeWidth={"29"}
        //  stroke="#ccc"
        
        fillOpacity={1}
          minAngle={15}
          // label={{ position: "inside", fill: "#ccc" }}
          // label={false}
          // background={true}
          // clockWise
           dataKey="pv"
        /> */}
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            width={1}
            height={1}
            // chartWidth={100}
            // chartHeight={100}
            align="center"
            content={(props) => {
              const { payload } = props;

              return (
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li key={payload[0].id}>
                    <h1>{`${score} %`}</h1>
                  </li>
                  <li key={payload[0].id + 1}>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "26px",
                        textAlign: "center",
                        display: "block",
                        width: "98px",
                        opacity: "60%",
                      }}
                    >
                      de votre objectif
                    </span>
                  </li>
                </ul>
              );
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
