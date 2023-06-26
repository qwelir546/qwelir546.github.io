import React from 'react';
import MyBid from './MyBid';
import Rabotnik from './Rabotnik';

const MyBids = function({bids, isActive, rabotniki}) {

    if(!bids.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }
    

    return(
        <div className={isActive ? 'myAdvertisement' : 'none'}>

            <div className="grid-my-rabotodatel">
                {bids.map((e) => <MyBid bid={e} key={e.id}/>)}
            </div>


        </div>
  )
}

export default MyBids;