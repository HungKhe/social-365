import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LayoutAnonymous from '../layout/Anonymous';

interface Props extends RouteProps {}

const PublicRoute: React.FC<Props> = props => {
//   const isAuthenticated: boolean = useSelector<any, any>((stores) => stores.auth.isAuthenticated);
    const isAuthenticated: boolean = false;
    const { component: Component, ...restProps } = props;

    if (!Component) return null;

    return (
        <LayoutAnonymous>
            <Route
            {...restProps}
            render={routeRenderProps => (
                !isAuthenticated ? (
                    <Component {...routeRenderProps} />
                ) : (
                <Redirect
                    to={{
                    pathname: "/",
                    state: { from: routeRenderProps.location }
                    }}
                />
                )
            )}
            />
        </LayoutAnonymous>
    )
}
export default PublicRoute;