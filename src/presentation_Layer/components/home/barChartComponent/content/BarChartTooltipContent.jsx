import styles from '../BarChartComponent.module.scss';




export function BarChartTooltipContent({ active, payload }) {
  if (active || (payload && payload.length == 1)) {
    const [v1, v2] = payload;

    return (
      <div className={styles["tooltip-content"]}>
        <p>{v1.value} kg</p>
        <p>{v2.value} kcal</p>
      </div>
    );
  }
}
