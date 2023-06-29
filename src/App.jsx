import Main from "./components/layout/Main";
import SideBar from "./components/layout/SideBar";

const App = () => {
  return (
    <div dir="rtl" className="flex h-screen flex-row-reverse font-[vazir]">
      <Main />
      <SideBar />
    </div>
  );
};
export default App;
