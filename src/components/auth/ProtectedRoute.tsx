import { Route } from "wouter";

export function ProtectedRoute({
  path,
  component: Component,
}: {
  path: string;
  component: () => React.JSX.Element;
}) {
  // Directly render the route without any authentication logic
  return <Route path={path} component={Component} />;
}