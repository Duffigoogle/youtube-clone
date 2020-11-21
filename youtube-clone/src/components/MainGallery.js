import React from 'react';
import './maingallery.scss';
import TagBar from './TagBar';
import VideoGallery from './VideoGallery';

function MainGallery() {
    return (
        <div className='main_gallery'>
            <div className='gallery tag_gallery'>
                <TagBar />
            </div>
            <div  className='gallery video_gallery'>
                <VideoGallery />
            </div>
        </div>
    )
}

export default MainGallery
