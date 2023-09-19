import { useRoutes } from "react-router-dom";

type routeProps = {
  path: string;
  element: JSX.Element;
};

export function useAppRoutes(routes: routeProps[]) {
  if (!routes) {
    console.log(`No routes provided`);
  }

  const appRoutes = useRoutes(routes);

  return appRoutes;
}
