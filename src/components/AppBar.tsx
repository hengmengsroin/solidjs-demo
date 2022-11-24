export default function AppBar() {
  return (
    <div class="flex flex-1 flex-row px-[15%] h-16 items-center bg-blue-200">
      <div>Logo</div>
      <div>Search box</div>
      <div class="flex-1"></div>
      <button class="py-2 px-4 rounded-md bg-blue-700 text-white ">
        Login
      </button>
    </div>
  );
}
