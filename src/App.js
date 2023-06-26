import React from 'react'
import './styles/reset.css' 
import './styles/bootstrap.min.css'
import './styles/entrance.scss'
import './styles/profile.scss'
import './styles/main.scss'
import './styles/ads.scss'
import './styles/info.scss'
import Main from './pages/Main';
import Entrance from './pages/registration/Entrance';
import Rabotodatel_reg from './pages/registration/Rabotodatel_reg';
import Spec_reg from './pages/registration/Spec_reg';
import Info from './pages/Info';
import Profile_rab from './pages/profile/Profile_rab';
import Profile_spec from './pages/profile/Profile_spec';
import Ads_rab from './pages/Ads/Ads_rab';
import Ads_spec from './pages/Ads/Ads_spec';
import FastAdsSpec from './pages/fastAds/FastAdsSpec';
import FastAdsRab from './pages/fastAds/FastAdsRab';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


  
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
          <Route path='/entrance' element={<Entrance/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/' element={<Main/>}/>
          <Route path='/spec_reg' element={<Spec_reg/>}/>
          <Route path='/rabotodatel_reg' element={<Rabotodatel_reg/>}/>
          <Route path='/profile_rab' element={<Profile_rab/>}/>
          <Route path='/profile_spec' element={<Profile_spec/>}/>
          <Route path='/ads_rab' element={<Ads_rab/>}/>
          <Route path='/ads_spec' element={<Ads_spec/>}/>
          <Route path='/fast_ads_rab' element={<FastAdsRab/>}/>
          <Route path='/fast_ads_spec' element={<FastAdsSpec/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
