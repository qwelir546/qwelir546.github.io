import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/reset.css' 
import './styles/styles.scss'
import './styles/adaptivStyles.scss'

import Guest from "./pages/Guest";

import Entrance from './pages/registration/Entrance';
import Registration from './pages/registration/Registration';

import EmpProfile from './pages/employer/EmpProfile';

import Experts from './pages/employer/Experts'
import Ads_rab from './pages/employer/Ads_rab';
import SpecProfile from './pages/employer/ExpertProfile';
import FastAds_rab from './pages/employer/FastAds_rab';

import ExpProfile from './pages/expert/ExpProfile';
import ExpProfileSettings from './pages/expert/ExpProfileSettings';
import Vacancy from './pages/expert/Vacancy';
import EmployerProfile from './pages/expert/EmployerProfile';
import FastAds_exp from './pages/expert/FastAds_exp';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Guest/>}/>

          <Route path='/entrance' element={<Entrance/>}/>
          <Route path='/registration' element={<Registration/>}/>

          <Route path='/profile_rab' element={<EmpProfile/>}/>
          <Route path='/experts' element={<Experts/>}/>
          <Route path='/ads_rab' element={<Ads_rab/>}/>
          <Route path='/exp_profile' element={<SpecProfile/>}/>
          <Route path='/fast_ads_rab' element={<FastAds_rab/>}/>

          <Route path='/profile_exp' element={<ExpProfile/>}/>
          <Route path='/profileSettings_exp' element={<ExpProfileSettings/>}/>
          <Route path='/ads_exp' element={<Vacancy/>}/>
          <Route path='/emp_profile' element={<EmployerProfile/>}/>
          <Route path='/fast_ads_exp' element={<FastAds_exp/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
