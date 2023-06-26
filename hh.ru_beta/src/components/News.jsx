import React from 'react';
import New from './New';

const News = function({news}) {

    if(!news.length){
        return  (<h1 style={{textAlign: 'center', fontSize: '30px', marginTop: '70px'}}>Объявлений нет</h1> )
    }

    return(
        <div>
                    {news.map((e) => <New new={e} key={e.id}/>)}
        </div>
  )
}

export default News;