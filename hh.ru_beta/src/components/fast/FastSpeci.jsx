import React from 'react';
import FastSpec from './FastSpec';

const FastSpeci = function({speci, isActive}) {

    if(!speci.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }

    return(
        <div className={isActive ? 'none' : 'row speci'}>
            <div className="grid">
                    {speci.map((e) => <FastSpec fastspec={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default FastSpeci;