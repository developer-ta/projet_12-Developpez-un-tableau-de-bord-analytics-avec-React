import { useCallback } from "react";
import "./User.Module.scss";
import { useLocation, useNavigate } from "react-router-dom";

export default function User() {
  const userNavigate = useNavigate();
  const LinkTo = useCallback((value) => {
    userNavigate("user", { state: { userId: value } });
  });
  return (
    <div id="user">
      {<h1>Bonjour, veuillez choisir un utilisateur !</h1>}

      <button
        onClick={(e) => LinkTo(e.currentTarget.value)}
        type="button"
        value="12"
      >
        Utilisateur 12
      </button>
      <button
        onClick={(e) => LinkTo(e.currentTarget.value)}
        type="button"
        value="18"
      >
        Utilisateur 18
      </button>
    </div>
  );
}

