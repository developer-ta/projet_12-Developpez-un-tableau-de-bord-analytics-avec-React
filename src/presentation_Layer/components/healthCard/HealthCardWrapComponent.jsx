import { UserInfo } from "../../../domain_Layer/User";
import { useUserDataContext } from "../../store/context/UserContext";
import HealthCardComponent from "./HealthCardComponent";

/**
 *
 * @param {UserInfo} info
 */
const HealthIndex = ({ info }) => {
  console.log("info: ", info);
  const { lipidCount, proteinCount, carbohydrateCount, calorieCount } = info;
  console.log("lipidCount: ", lipidCount);
  const listHealth = [
    {
      name: "Calories",
      color: "#fbeaea",
      icon: "src/presentation_Layer/assets/energy.svg",
      healthIndex: calorieCount,
    },
    {
      name: "Proteines",
      color: "#4AB8FF1A",
      icon: "src/presentation_Layer/assets/chicken.svg",
      healthIndex: proteinCount,
    },
    {
      name: "Glucides",
      color: "#fbf6e5",
      icon: "src/presentation_Layer/assets/apple.svg",
      healthIndex: carbohydrateCount,
    },
    {
      name: "Lipides",
      color: "#FD51811A",
      icon: "src/presentation_Layer/assets/cheeseburger.svg",
      healthIndex: lipidCount,
    },
  ];

  return listHealth.map((l, index) => (
    <HealthCardComponent
      key={index}
      IconBackgroundColor={l.color}
      srcIcon={l.icon}
      healthIndex={l.healthIndex}
      name={l.name}
    />
  ));
};

export const HealthCardWrapComponent = () => {
  const { _newUser } = useUserDataContext();

  return (
    <>
      <HealthIndex info={_newUser} />
    </>
  );
};
