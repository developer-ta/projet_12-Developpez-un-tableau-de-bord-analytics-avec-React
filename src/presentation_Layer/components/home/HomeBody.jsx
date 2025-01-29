import LineChartComponent from "./lineChartComponent/LineChartComponent";
import BarChartComponent from "./barChartComponent/BarChartComponent";
import RadarChartComponent from "./radarChartComponent/RadarChartComponent";
import RadialBarChartComponent from "./radialBarChartComponent/RadialBarChartComponent.jsx";
import styles from "./HomeBody.module.scss";
import DashboardHeader from "./dashboardHeader/DashboardHeader";

import { useUserInfo } from "../../hooks/useUserInfo.jsx";
import { UserContextProvider } from "../../store/context/UserContext.jsx";

import { HealthCardWrapComponent } from "../healthCard/HealthCardWrapComponent.jsx";

export default function HomeBody() {
  const userId = 12;
  const { _newUser } = useUserInfo(userId);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}>... L o a d i n g</h1>
      </main>
    );
  }
  return (
    <UserContextProvider value={{ _newUser }}>
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
            <section id={styles["list-index-health"]}>
              <HealthCardWrapComponent />
            </section>
          </div>
        </div>
      </main>
    </UserContextProvider>
  );
}
