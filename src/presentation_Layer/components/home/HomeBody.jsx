import LineChartComponent from "./lineChartComponent/LineChartComponent";
import BarChartComponent from "./barChartComponent/BarChartComponent";
import RadarChartComponent from "./radarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "./radialBarChartComponent/RadialBarChartComponent.jsx";
import styles from "./HomeBody.module.scss";
import DashboardHeader from "./dashboardHeader/DashboardHeader";

export default function HomeBody() {
  return (
    <main id="main">
      <div className={styles["dashboard-wrapper"]}>
        <DashboardHeader />
        <div id={styles["dashboard-content"]}>
          {/* {"section-1"} */}
          <section id={styles["dashboard-graphiques"]}>
            <BarChartComponent></BarChartComponent>
            <div id={styles["mini-graphiques"]}>
              <LineChartComponent></LineChartComponent>
              <RadarChartComponent></RadarChartComponent>
              <RadialBarChartComponent />
            </div>
          </section>

          {/* {"section-2"} */}
          <section id={styles["list-index-health"]}>list-index-health</section>
        </div>
      </div>
    </main>
  );
}
