import React from 'react';


function SideBarSection( {Icon, title, selected }) {
    return (
        <div className=''>
            <Icon className='sideBarSection-icon' />
            <h2 className='sideBarSection-title'>{title}</h2>
        </div>
    )
}

export default SideBarSection
