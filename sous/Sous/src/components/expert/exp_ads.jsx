import React from 'react';
import Expert_ads from './Expert_ads';

const Experts_ads = function({Ads_exp}) {

    if(!Ads_exp.length){
        return  (<h1 style={{marginTop: '120px', textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={'row rabotniki'}>
            <div className="grid">
                    {Ads_exp.map((e) => <Expert_ads ads={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default Experts_ads;