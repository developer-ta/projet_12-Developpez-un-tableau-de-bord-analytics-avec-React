import styles from '../HomeBody.module.scss';




export  function BarChartTooltipContent({ active, payload }) {
  if (active || payload || payload.length == 1) {
    return (
		
      <div className={styles['tooltip-content']}>
        <p>68kg</p>
        <p>365kcal</p>
      </div>
    );
  }
}
