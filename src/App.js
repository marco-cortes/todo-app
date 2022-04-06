import { Provider } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import { store } from "./redux/store/store";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <Input />
        <List />
        <p className="help">Drag and drop to reorder list</p>
      </Provider>
    </div>
  );
}

export default App;
