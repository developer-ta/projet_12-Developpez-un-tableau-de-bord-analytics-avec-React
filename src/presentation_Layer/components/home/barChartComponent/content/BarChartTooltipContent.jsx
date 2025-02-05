import styles from '../BarChartComponent.module.scss';




export function BarChartTooltipContent({ active, payload }) {
  if (active && payload || payload.length == 1) {
    const [v1, v2] = payload;

    return (
      <div className={styles["tooltip-content"]}>
        <span>{v1.value} kg</span>
        <span>{v2.value} kcal</span>
      </div>
    );
  }
}
