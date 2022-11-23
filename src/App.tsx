import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import type { Component } from "solid-js";
import MainLayout from "./layouts/MainLayout";
const queryClient = new QueryClient();
const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout></MainLayout>
    </QueryClientProvider>
  );
};

export default App;
