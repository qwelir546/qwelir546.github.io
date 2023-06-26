import React from 'react';
import MyBidFastSpec from './MyBidFastSpec';


const MyBidsFastSpec = function({bids, isActive}) {

    if(!bids.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }
    

    return(
        <div className={isActive ? 'myAdvertisement' : 'none'}>

            <div className="grid-my-fastspec">
                {bids.map((e) => <MyBidFastSpec bid={e} key={e.id}/>)}
            </div>


        </div>
  )
}

export default MyBidsFastSpec;