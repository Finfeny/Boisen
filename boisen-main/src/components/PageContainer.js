import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './PageContainer.css'

const PageContainer = ({ children }) => {
    return (
        <div className='PageContainer'>
            {children}
        </div>
    )
}

export default PageContainer;