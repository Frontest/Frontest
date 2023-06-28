import { useState } from "react";
import Main from "./components/layout/Main";
import SideBar from "./components/layout/SideBar";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div dir="rtl" className="flex h-screen flex-row-reverse font-[vazir]">
      <Main searchValue={searchValue}/>
      <SideBar onSearchValueChange={setSearchValue} />
    </div>
  );
};
export default App;
