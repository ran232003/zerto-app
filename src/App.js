import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './hompage/pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { siteAction } from './store/siteSlice';
import { webSitesArray } from './dummyWebSites';
import WebSites from './WebSites/pages/WebSites';
import AddSite from './addSite/pages/AddSite';
import { useEffect } from 'react';
import Edit from './edit/pages/Edit';

function App() {
  const dispatch = useDispatch();
  const sites = useSelector((state)=>{
    return state.site;
  })
  const localSites = JSON.parse(localStorage.getItem("sites") || "[]");
  useEffect(()=>{
    dispatch(siteAction.dbSites(localSites))
    console.log("in effect",sites);
  },[])
  
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
      <Route path = "/" element = {<HomePage/>}>

      </Route>
      <Route path = "/add-website" element = {<AddSite/>}>

      </Route>
      <Route path = "/web-sites" element = {<WebSites/>}>

      </Route>
      <Route path = "/edit" element = {<Edit/>}>

      </Route>

      </Routes>
    </div>
  );
}

export default App;
