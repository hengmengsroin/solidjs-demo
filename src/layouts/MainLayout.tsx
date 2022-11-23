import { Routes, Route } from "@solidjs/router";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import UserPage from "../pages/User";

export default function MainLayout() {
  return (
    <div>
      <AppBar />
      <div class="w-full h-full">
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
    </div>
  );
}
