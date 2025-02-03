import styles from "./HealthCardComponent.module.scss";

export default function HealthCardComponent({
  IconBackgroundColor,
  srcIcon,
  healthIndex,
  name
}) {
  console.log("healthIndex: ", name);
  return (
    <div id={styles["health-card"]}>
      <div
        className={styles["health-icon"]}
        style={{ backgroundColor: IconBackgroundColor }}
      >
        <img src={srcIcon} alt="logo" />
      </div>
      <div className="health-text-wrapper">
        <h4>
          {healthIndex}
          {name =="Calories" ? "KCal" : "g"}
        </h4>
        <p>{name}</p>
      </div>
    </div>
  );
}
