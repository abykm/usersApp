import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import store from './store';

import Adduser from './components/user/add.component';
import Edituser from './components/user/edit.component';
import Listuser from './components/user/list.component';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listuser />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<Edituser />} />
        <Route path="/listuser" element={<Listuser />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

root.render(routes);
