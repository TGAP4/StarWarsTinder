import React from 'react';

const Buttons = ({refresh}) => {
    return (
        <div style={{backgroundColor: 'white'}} className='justify-center flex items-center justify-around pa3'>
            <input 
                type='image' 
                alt='swipe left' 
                src={require('./images/redx.png')} 
                className='w-10 shadow-5 grow br-100 pa3'
                onClick = {() => {
                    setTimeout(refresh, 500);
                    alert('Dislike')   
                }}
            />
            <input 
                type='image' 
                alt='swipe right' 
                src={require('./images/greenheart.png')} 
                className='w-10 shadow-5 grow br-100 pa3' 
                onClick = {() => {
                    setTimeout(refresh, 500);
                    alert('Like')   
                }}
            />
        </div>
    )
}

export default Buttons;