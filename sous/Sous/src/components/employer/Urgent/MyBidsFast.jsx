import React from 'react';
import MyBidFast from './MyBidFast';


const MyBidsFast = function({bids, isActive}) {

    if(!bids.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px'}}>Объявления не найдены</h1> )
    }
    

    return(
        <div className='myAdvertisement'>

            <div className="grid-my-rabotodatel">
                {bids.map((e) => <MyBidFast bid={e} key={e.id}/>)}
            </div>


        </div>
  )
}

export default MyBidsFast;