import Body from "./components/Body"
import "./index.css"
import "./utils/fireBase"
import {Provider} from "react-redux"
import store from "./utils/appStore"

function App() {

  return (
    <div>
      <Provider store={store}>
        <Body/>
      </Provider>
    </div>
  )
}

export default App
