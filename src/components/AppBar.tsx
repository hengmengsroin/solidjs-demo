import { useNavigate } from "@solidjs/router";

export default function AppBar() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    <div class="flex flex-1 flex-row px-[15%] h-16 items-center bg-blue-200">
      <div class="cursor-pointer p-2" onClick={goHome}>
        Logo
      </div>
      <div class="flex-1"></div>
      <div>Search box</div>
      <div class="flex-1"></div>
      <button class="py-2 px-4 rounded-md bg-blue-700 text-white ">
        Login
      </button>
    </div>
  );
}
