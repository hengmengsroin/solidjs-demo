import { Routes, Route } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import UserPage from "../pages/User";
const queryClient = new QueryClient();
export default function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppBar />
      <div class="w-full h-full px-[15%]">
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/about"
            element={<div>This site was made with Solid</div>}
          />
        </Routes>
      </div>

      <Footer />
    </QueryClientProvider>
  );
}
