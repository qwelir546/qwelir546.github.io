import React from 'react';


const New = function(props) {

    return(
        
        <div className='new'>
            <div className='new__title'>{props.new.heading}</div>
            <div className='new__body'>{props.new.body}</div>
            <div className='new__date'>{props.new.date}</div>
        </div>
  )
}

export default New;