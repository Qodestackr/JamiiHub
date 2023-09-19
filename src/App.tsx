import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import {
  UnderConstruction,
} from "@core/components";
import Register from "@pages/register/Register";
import Login from "@pages/login/Login";
import Home from "@/pages/home/Home";
import ForgotPassword from "@/pages/forgot-password/ForgotPassword";
import DashboardHome from "@/pages/dashboard/DashboardHome";
import { TableDemo } from "./core/components/table/TableTest";
import { MemberContribution } from "./pages/dashboard/screens/contributions/MemberContributions";

const queryClient = new QueryClient({
  defaultOptions: {
    //queries and mutations
    queries: {
      staleTime: 10000,
      cacheTime: 60000,
      refetchOnMount: false,

      /**
       * This callback will fire any time the query successfully fetches new data or the cache is updated via `setQueryData`.
       */
      onSuccess: (data: unknown) => { },
      // onError?: (err: TError) => void;

      onSettled: (data: unknown | undefined) => { },
      /**
       * Whether errors should be thrown instead of setting the `error` property.
       * If set to `true` or `suspense` is `true`, all errors will be thrown to the error boundary.
       * If set to `false` and `suspense` is `false`, errors are returned as state.
       * If set to a function, it will be passed the error and the query, and it should return a boolean indicating whether to show the error in an error boundary (`true`) or return the error as state (`false`).
       * Defaults to `false`.
       */
      useErrorBoundary: true,
      retry: 3,
      refetchOnWindowFocus: false,

      optimisticResults: true,
    },
    // mutations: {}
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/*  */}
        <Route path="/dashboard" element={<DashboardHome />}>
          <Route
            path="employees"
            element={/**<UnderConstruction /> */ <TableDemo />}
          />
          <Route path="settings" element={<UnderConstruction />} />
          <Route path="payments" element={<TableDemo />}>
            <Route path="balances" element={<TableDemo />} />
            <Route path="bulk-payments" element={<TableDemo />} />
            <Route path="statutory-payments" element={<TableDemo />} />
          </Route>
          <Route path="wallet" element={<TableDemo />} />
          <Route path="messages" element={<TableDemo />} />
          <Route path="organizations" element={<TableDemo />} />
          <Route path="events" element={<TableDemo />} />
          <Route path="notice-board" element={<TableDemo />} />
          <Route path="projects" element={<TableDemo />} />
          <Route path="contributions" element={<MemberContribution />} />
          <Route path="documents" element={<TableDemo />} />
          <Route path="backups" element={<TableDemo />} />
        </Route>
        {/*  */}

        <Route path="/*" element={<UnderConstruction />} />
      </Routes>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
