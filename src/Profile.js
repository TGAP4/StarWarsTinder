import React from 'react';

const Profile = ({ person }) => {
    return (
        <div className='pa2 bg-white'>
            <div style={{backgroundImage: `url('https://robohash.org/${person.name}')`, 
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center', 
                        backgroundSize: 'cover',
                        backgroundColor: 'gray',
                        height: '66vh'
                        }}
                className='flex shadow-5 br3 items-end'>
                <div className='pv1 ph3 white'>
                    <div className='flex items-end'>
                        <h1 className='ma0 mr1 b'>{person.name}</h1>
                        <h3 className='ma0'>{person.birth_year}</h3>
                    </div>
                    <div>
                        <h3 className='ma1'>{person.gender}</h3>
                        <h3 className='ma1'>{person.height}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;