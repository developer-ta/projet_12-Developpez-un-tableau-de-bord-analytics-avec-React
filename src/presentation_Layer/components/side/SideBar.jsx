import styles from "./SideBar.module.scss";
const listIconNavL = [
  { srcIcon: "src/presentation_Layer/assets/icon-1.svg" },
  { srcIcon: "src/presentation_Layer/assets/icon-2.svg" },
  { srcIcon: "src/presentation_Layer/assets/icon-3.svg" },
  { srcIcon: "src/presentation_Layer/assets/icon-4.svg" },
];
export default function SideBar() {
  return (
    <nav id={styles["sideBar"]}>
      <ul className="NavLeft">
        {listIconNavL.map(({ srcIcon },index) => (
          <li key={index} className="icon-Nav-l">
            <img src={srcIcon} alt="icon-Nav-l" />
          </li>
        ))}
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </nav>
  );
}
