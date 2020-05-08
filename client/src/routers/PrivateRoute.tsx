import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
// import { useSelector } from "react-redux";
import Authenticated from '../layout/Authenticated';

interface Props extends RouteProps {}

const PrivateRoute: React.FC<Props> = (props) => {
  //   const isAuthenticated: boolean = useSelector<any, any>((stores) => stores.auth.isAuthenticated);
    const isAuthenticated: boolean = true;
    const { component: Component, ...restProps } = props;

    if (!Component) return null;

    return (
        <Authenticated>
            <Route
            {...restProps}
            render={(routeRenderProps) =>
                isAuthenticated ? (
                    <Component {...routeRenderProps} />
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: routeRenderProps.location },
                    }}
                />
                )
            }
            />
        </Authenticated>
    );
};
export default PrivateRoute;