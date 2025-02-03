import { useCallback } from "react";
import "./User.Module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export default function User() {
  const userNavigate = useNavigate();
  const LinkTo = useCallback((value) => {
    console.log("value: ", value);
    userNavigate("/", { state: { userId: value } });
  });
  return (
    <div id="user">
      {<h1>users</h1>}

      <input
        onClick={(e) => LinkTo(e.currentTarget.value)}
        type="button"
        value="12"
      />
      <input
        onClick={(e) => LinkTo(e.currentTarget.value)}
        type="button"
        value="18"
      />
    </div>
  );
}

/**
 *
 * @param {UserInfo} info
 */

//     name: "Calories",
//     color: "#fbeaea",
//     icon: "src/presentation_Layer/assets/energy.svg",

//   },
//   {
//     name: "Proteines",
//     color: "#4AB8FF1A",
//     icon: "src/presentation_Layer/assets/chicken.svg",

//   },
// ];
