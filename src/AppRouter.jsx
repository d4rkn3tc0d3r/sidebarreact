import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";
import { RoutesWithNotFound } from "./components/RoutesWithNotFound/RoutesWithNotFound";

// Buen lugar para renderizar un navbar, footer

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateGuard />}>
          <Route path="/private/*" element={<PrivateRouter />}></Route>
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
