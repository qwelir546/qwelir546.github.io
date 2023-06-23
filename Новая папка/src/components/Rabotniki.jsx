import React from 'react';
import Rabotnik from './Rabotnik';

const Rabotniki = function({rabotniki, isActive}) {

    if(!rabotniki.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={isActive ? 'none' : 'row rabotniki'}>
            <div className="grid">
                    {rabotniki.map((e) => <Rabotnik rabotnik={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default Rabotniki;
