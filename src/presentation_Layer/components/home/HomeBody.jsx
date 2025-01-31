import LineChartComponent from "./lineChartComponent/LineChartComponent";
import BarChartComponent from "./barChartComponent/BarChartComponent";
import RadarChartComponent from "./radarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "./radialBarChartComponent/RadialBarChartComponent.jsx";
import styles from "./HomeBody.module.scss";
import DashboardHeader from "./dashboardHeader/DashboardHeader";


import { HealthCardWrapComponent } from "../healthCard/HealthCardWrapComponent.jsx";
import { useState } from "react";

export default function HomeBody() {
  const userId = 12;
  // const { _newUser } = useUserInfo(userId);

  // if (!_newUser) {
  //   return (
  //     <main id="main">
  //       <h1 style={{ color: "red" }}>... L o a d i n g </h1>
  //     </main>
  //   );
  // }
  return (
    <main id="main">
      <div className={styles["dashboard-wrapper"]}>
        <DashboardHeader userId={userId} />
        <div id={styles["dashboard-content"]}>
          {/* {"section-1"} */}
          <section id={styles["dashboard-graphiques"]}>
            <BarChartComponent userId={userId}></BarChartComponent>
            <div id={styles["mini-graphiques"]}>
              <LineChartComponent userId={userId}></LineChartComponent>
              <RadarChartComponent userId={userId}></RadarChartComponent>
              <RadialBarChartComponent userId={userId}/>
            </div>
          </section>

          {/* {"section-2"} */}
          <section id={styles["list-index-health"]}>
            <HealthCardWrapComponent userId={userId} />
          </section>
        </div>
      </div>
    </main>
  );
}
