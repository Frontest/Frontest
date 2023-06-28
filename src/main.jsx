import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchContextProvider } from "./context/SearchContext.jsx";

String.prototype.latin2Persian = function () {
  const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let result = "";

  for (let i = 0; i < this.length; i++) {
    const char = this.charAt(i);
    const index = latinNumbers.indexOf(char);

    if (index !== -1) {
      result += persianNumbers[index];
    } else {
      result += char;
    }
  }

  return result;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </>
);
