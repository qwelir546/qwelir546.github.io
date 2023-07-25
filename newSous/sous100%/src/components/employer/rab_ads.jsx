import React from 'react';
import Rabotnik_ads from './Rabotnik_ads';

const Rabotniki_ads = function({Ads_rab}) {

    if(!Ads_rab.length){
        return  (<h1 style={{marginTop: '120px', textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={'row rabotniki'}>
            <div className="grid">
                    {Ads_rab.map((e) => <Rabotnik_ads ads={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default Rabotniki_ads;