import React from 'react';
import MyBidSpec from './MyBidSpec';
import Spec from './Spec';

const MyBidSpeci = function({bids, isActive, speci}) {

    if(!bids.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }
    

    return(
        <div className={isActive ? 'myAdvertisement' : 'none'}>

            <div className="grid-my">
                {bids.map((e) => <MyBidSpec bid={e} key={e.id}/>)}
            </div>


        </div>
  )
}

export default MyBidSpeci;