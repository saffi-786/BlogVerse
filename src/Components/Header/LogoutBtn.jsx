import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn({ className }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className={`inline-block px-6 py-2 duration-200 hover:bg-amber-300 hover:text-white rounded-full font-semibold ${className}`}
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
export default LogoutBtn;
