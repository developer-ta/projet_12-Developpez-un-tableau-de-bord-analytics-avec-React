import React from "react";
import styles from "./RadarChartComponent.module.scss";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { apiType, useUserGetData } from "../../../hooks/useUserGetData";

// const data = [
//   {
//     subject: "Math",
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: "Chinese",
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "English",
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: "Geography",
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: "Physics",
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: "History",
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ];

export default function RadarChartComponent({ userId }) {
  const { _newUser } = useUserGetData(userId, apiType.performance);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}>... L o a d i n g </h1>
      </main>
    );
  }



  return (
    <RadarChart
      className={styles["radar-wrapper"]}
      // outerRadius="20%"
      //  cx="48%"
      //  cy="50%"
       outerRadius={64}

      width={195}
      height={195}
      data={_newUser.data}
      margin={{
        top: 5,
        right: 10,
        left: 10,
        bottom: 5,
      }}
      // style={{ backgroundColor: "#111" }}
    >
      <PolarGrid stroke="#FFFFFF" strokeWidth={1} /> {/* 设置网格线的颜色 */}
      <PolarAngleAxis
        dataKey="kind" //kind
        stroke="#FFFFFF"
        axisLine={false}
        angleAxis={false}
      />
      <PolarRadiusAxis axisLine={false} tick={false} />
      {/* <PolarGrid stroke="red" />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis stroke="red" /> */}
      {/* <PolarGrid stroke="#ccc" />
      <PolarAngleAxis
        domain={[0, 150]}
        dataKey="subject"
        tick={false}
        tickLine={false}
        axisLine={false}
      /> */}
      {/* <PolarRadiusAxis axisLine={false} tickLine={false} tick={false} /> */}
      {/* <Radar
        stroke="none"
        name="Mike"
        dataKey="A"
        // stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      /> */}
      <Radar
        name="Mike"
        dataKey="value" //value
        stroke="blue"
        fill="red"
        fillOpacity={0.6}
      />{" "}
      {/* <Radar
        name="Mike"
        dataKey="A"
        stroke="grey"
        fill="grey"
        fillOpacity={1}
      /> 
        {data.map(({ subject, A, B, fullMark }, index) => {
          return <Radar key={index} stroke="grey" />;
        })}*/}
    </RadarChart>
  );
}
