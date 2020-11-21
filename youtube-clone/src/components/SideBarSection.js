import React from 'react';
import './sidebar.scss';


function SideBarSection( {Icon, title, selected }) {
    return (
        <div className={`sidebarsection ${selected && 'selected'}`}>
            <div className='sidebar_subsection'>
                <Icon className='sideBarSection-icon' />
            </div>
            <div className='sidebar_subsection'>
                <h4 className='sideBarSection-title'>{title}</h4>  
            </div>
            
        </div>
    )
}

export default SideBarSection
