import { RouterProvider } from "react-router";
import route from "./routes/route.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";



function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={route} />;
    </Provider>
  );
}

export default App;
