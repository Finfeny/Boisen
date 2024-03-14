import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import PageContainer from './PageContainer';
import '../Global.css'
import './PageTemplate.css'

const PageTemplate = ({ children }) => {
    return (
        <div className='PageTemplate'>
            <Header />
            <div className='page'>
                <Sidebar />
                <PageContainer children={children}/>
            </div>
        </div>
    )
}

export default PageTemplate;