import React from 'react';
import Myads_rab from './Myads_rab';

const MyBids = function({ads}) {

    if(!ads.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }
    

    return(
        <div className='row rabotniki'>
            <div className="grid-my-rabotodatel">
                {ads.map((e) => <Myads_rab myads={e} key={e.id}/>)}
            </div>
        </div>
  )
}

export default MyBids;