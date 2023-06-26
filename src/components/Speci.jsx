import React from 'react';
import Spec from './Spec';

const Speci = function({speci, isActive}) {

    if(!speci.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={isActive ? 'none' : 'row speci'}>
            <div className="grid">
                    {speci.map((e) => <Spec rabotnik={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default Speci;