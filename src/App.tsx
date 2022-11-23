import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import type { Component } from "solid-js";
import MainLayout from "./layouts/MainLayout";
const queryClient = new QueryClient();
const App: Component = () => {
  return <MainLayout></MainLayout>;
};

export default App;
