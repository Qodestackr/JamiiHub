import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";

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
    queries: {
      staleTime: 10000,
      cacheTime: 60000,
      refetchOnMount: false,
      onSuccess: (data: unknown) => { },
      // onError?: (err: TError) => void;
      onSettled: (data: unknown | undefined) => { },
      useErrorBoundary: true,
      retry: 3,
      refetchOnWindowFocus: false,

      optimisticResults: true,
    },
    // mutations: {}
  },
});

export const persister = createSyncStoragePersister({
  storage: window.localStorage,
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
            path="members"
            element={<TableDemo />}
          />
          <Route path="settings" element={<UnderConstruction />} />
          <Route path="payments" element={<TableDemo />}>
            <Route path="balances" element={<TableDemo />} />
            <Route path="statutory-payments" element={<TableDemo />} />
          </Route>
          <Route path="wallet" element={<TableDemo />} />
          <Route path="organization" element={<UnderConstruction />} />
          <Route path="events" element={<TableDemo />} />
          <Route path="notice-board" element={<TableDemo />} />
          <Route path="projects" element={<TableDemo />} />
          <Route path="contribution" element={<MemberContribution />} />
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
