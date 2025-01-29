import styles from "./DashboardHeader.module.scss";
import { useUserDataContext } from "../../../store/context/UserContext";
import { UserInfo } from "../../../../domain_Layer/User";

export default function DashboardHeader() {
  /**
   *@type{UserInfo}_newUser
   */
  const { _newUser } = useUserDataContext();

  return (
    <div id={styles["dashboard-Header"]}>
      <h1>
        Bonjour <span style={{ color: "#E60000" }}>{_newUser.firstName}</span>
      </h1>
      <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </div>
  );
}
