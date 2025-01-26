import styles from "./DashboardHeader.module.scss";

export default function DashboardHeader() {
  return (
    <div id={styles["dashboard-Header"]}>
      <h1>
        Bonjour <span style={{ color: "#E60000" }}>Thomas</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  );
}
