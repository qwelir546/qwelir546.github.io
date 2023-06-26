import React from 'react';
import FastRab from './FastRab';

const FastRabs = function({fastrabotniki, isActive}) {

    if(!fastrabotniki.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={isActive ? 'none' : 'row rabotniki'}>
            <div className="grid">
                    {fastrabotniki.map((e) => <FastRab fastrabotnik={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default FastRabs;