import styles from "./HealthCardComponent.module.scss";

export default function HealthCardComponent({ IconBackgroundColor, srcIcon }) {
  return (
    <div id={styles["health-card"]}>
      <div
        className={styles["health-icon"]}
        style={{ backgroundColor: IconBackgroundColor }}
      >
        <img src={srcIcon} alt="logo" />
      </div>
      <div className="health-text-wrapper">
        <h4>1,930kCal</h4>
        <p>Calories</p>
      </div>
    </div>
  );
}
