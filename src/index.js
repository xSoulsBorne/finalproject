import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMain from './components/Main';
import Page from './components/Page';
import ProjectsFunction from './components/Projects';
import Hw1Function from './components/Homeworks/hw1';
import Hw2Function from './components/Homeworks/hw2';
import Hw3Function from './components/Homeworks/hw3';
import Hw4Function from './components/Homeworks/hw4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Page />}>
              <Route index element={<MyMain />}/>
          <Route path={"/projects"} element={<ProjectsFunction />}/>
          </Route>

          <Route path={"/projects/1"} element={<Page />}>
              <Route index element={<Hw1Function />}/>
          </Route>

          <Route path={"/projects/2"} element={<Page />}>
              <Route index element={<Hw2Function />}/>
          </Route>

          <Route path={"/projects/3"} element={<Page />}>
              <Route index element={<Hw3Function />}/>
          </Route>

          <Route path={"/projects/4"} element={<Page />}>
              <Route index element={<Hw4Function />}/>
          </Route>
      </Routes>
  </BrowserRouter>
);

