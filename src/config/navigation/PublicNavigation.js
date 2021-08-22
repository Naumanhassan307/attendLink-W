import { Route, Redirect } from "react-router-dom";

function PublicNavigation({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Redirect to={"/addRestaurent"} /> : children)}
    />
  );
}
export default PublicNavigation;
