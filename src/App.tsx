import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import AppRouter from "./routes/AppRouter";
import GeneralStyle from "./styles/general";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GeneralStyle />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
