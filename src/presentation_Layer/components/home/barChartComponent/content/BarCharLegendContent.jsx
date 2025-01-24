import styles from '../BarChartComponent.module.scss';


export default function BarCharLegendContent() {
  return (
    <div className={styles["recharts-legend-wrap"]}>
		<p >Activité quotidienne</p>
      <ul className={styles["recharts-default-legend"]} style={{listStyle:"none"}}>
        <li className="recharts-legend-item">
          <span className={styles["cercle-poids"]}></span>
          <span className="recharts-legend-item-text">Poids (kg)</span>
        </li>
        <li className="recharts-legend-item">
          <span className={styles["cercle-calorie"]}></span>
          <span className="recharts-legend-item-text">Calories brûlées (kCal)</span>
        </li>
      </ul>
    </div>
  );
}
