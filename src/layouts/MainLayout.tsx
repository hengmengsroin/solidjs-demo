import { Routes, Route } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { createResource } from "solid-js";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import ServiceDetailPage from "../pages/ServiceDetail";
import UserPage from "../pages/User";
import { apiHelper } from "../services/api-helper";
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
          <Route
            path="/services/:slug"
            component={ServiceDetailPage}
            data={({ params }) => {
              const slug = params.slug;
              let serviceId = slug.split("-")[0];
              const [serviceRes] = createResource(
                () => serviceId,
                (id) => apiHelper.service.getOne(id),
                {
                  name: "serviceDetail",
                }
              );
              return serviceRes;
            }}
          />
        </Routes>
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
