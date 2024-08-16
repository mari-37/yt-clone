import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import VideoPage from './components/VideoPage';


const appRouter =createBrowserRouter([{
  path: '/',
  element: <Body />,
  children:[{
    path: '/',
    element: <MainContainer />
  },
  {
    path: '/watch' ,
    element: <VideoPage />
  },
 ],
 },
]) ;

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
