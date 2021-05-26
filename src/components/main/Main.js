import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import { Switch } from "react-router-dom";
import { getAuthSelector } from "../../redux/auth/authSelectors";
import mainRoutes from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

export default function Main() {
  const isAuth = useSelector(getAuthSelector);
  return (
    <>
      <Suspense fallback={<h2>LOADING....</h2>}>
        <Switch>
          {mainRoutes.map(item =>
            item.isPrivate ? (
              <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...item} key={item.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </>
  );
}

// const Main = ({ isAuth }) => {
//   return (
//     <>
//       <Suspense fallback={<h2>LOADING....</h2>}>
//         <Switch>
//           {mainRoutes.map(item =>
//             item.isPrivate ? (
//               <PrivateRoute {...item} key={item.path} isAuth={isAuth} />
//             ) : (
//               <PublicRoute {...item} key={item.path} isAuth={isAuth} />
//             )
//           )}
//         </Switch>
//       </Suspense>
//     </>
//   );
// };
// const mapStateToProps = state => {
//   return {
//     isAuth: state.auth.tokens.idToken
//   };
// };
// export default connect(mapStateToProps)(Main);
