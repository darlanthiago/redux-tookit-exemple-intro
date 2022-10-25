import { useAppDispatch } from "../../hooks/state";
import { logout } from "../../store/userSlice";

export function Logout() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
