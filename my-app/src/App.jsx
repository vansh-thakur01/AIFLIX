import Body from "./components/Body";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./utils/firebase/fireBase";
import { Provider } from "react-redux";
import store from "./utils/store/appStore";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
