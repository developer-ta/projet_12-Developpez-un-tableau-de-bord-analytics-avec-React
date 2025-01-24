import styles from "../LineChartComponent.module.scss";

export default function LineCharLegendContent() {
  return (
    <div className={styles["recharts-legend-wrapper"]}>
      <p className={styles["legend"]}>Durée moyenne des sessions</p>
    </div>
  );
}
{
  /* <ul className={styles["recharts-default-legend"]} style={{listStyle:"none"}}>
        <li className="recharts-legend-item">
          <span className={styles["cercle-poids"]}></span>
          <span className="recharts-legend-item-text">Poids (kg)</span>
        </li>
        <li className="recharts-legend-item">
          <span className={styles["cercle-calorie"]}></span>
          <span className="recharts-legend-item-text">Calories brûlées (kCal)</span>
        </li>
      </ul> */
}
