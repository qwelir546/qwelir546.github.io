import React from 'react';
import FastExp from './FastExp';

const FastExps = function({fastrabotniki, isActive}) {

    if(!fastrabotniki.length){
        return  (<h1 style={{marginTop: '80px', textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={isActive ? 'none' : 'row rabotniki'}>
            <div className="grid">
                    {fastrabotniki.map((e) => <FastExp fastrabotnik={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default FastExps;