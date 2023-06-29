import Main from "./components/layout/Main";
import SideBar from "./components/layout/SideBar";
import "./lib/textHelpers";

const App = () => {
  return (
    <div dir="rtl" className="flex h-screen flex-row-reverse font-[vazir]">
      <Main searchValue={searchValue} />
      <SideBar />
    </div>
  );
};
export default App;
