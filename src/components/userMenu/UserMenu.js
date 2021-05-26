import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/authActions";
import { getAuthSelector, getEmailSelector } from "../../redux/auth/authSelectors";

export default function UserMenu() {
  const email = useSelector(getEmailSelector);
  const isAuth = useSelector(getAuthSelector);
  const dispatch = useDispatch();
  const logOutClient = () => dispatch(logOut());

  return (
    <>
      <p className="">{email}</p>
      {isAuth && (
        <button className="logOutBtn" type="button" onClick={() => logOutClient()}>
          LogOut
        </button>
      )}
    </>
  );
}

// const UserMenu = ({ email, isAuth, logOut }) => {
//   return (
//     <>
//       <p className="">{email}</p>
//       {isAuth && (
//         <button className="logOutBtn" type="button" onClick={() => logOut()}>
//           LogOut
//         </button>
//       )}
//     </>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     email: state.auth.tokens.email,
//     isAuth: state.auth.tokens.idToken
//   };
// };

// export default connect(
//   mapStateToProps,
//   { logOut }
// )(UserMenu);
