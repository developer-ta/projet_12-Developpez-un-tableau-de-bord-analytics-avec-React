import styles from "./DashboardHeader.module.scss";
import { apiType, useUserGetData } from "../../../hooks/useUserGetData";

export default function DashboardHeader({ userId }) {
  /**
   *@type{UserInfo}_newUser
   */
  const { _newUser } = useUserGetData(userId, apiType.userInfo);

  if (!_newUser) {
    return (
      <main id="main">
        <h1 style={{ color: "red" }}>... L o a d i n g </h1>
      </main>
    );
  }

  return (
    <div id={styles["dashboard-Header"]}>
      <h3>
        Bonjour <span style={{ color: "#E60000" }}>{_newUser.firstName}</span>
      </h3>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}
