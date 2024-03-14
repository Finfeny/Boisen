import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const buttonsData = [
    { name: 'Etusivu', lable:"Etusivu", svg: <path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.694c.508.428.8 1.057.8 1.72v2.819A3 3 0 0 0 16.762 17h-.514c-.706 0-1.336.325-1.748.833V14.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694ZM17 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.75 3c-.69 0-1.25.56-1.25 1.25v.003l.001.298.008.106a2.99 2.99 0 0 0 .519 1.38c.546.78 1.586 1.463 3.472 1.463s2.926-.683 3.472-1.463a2.99 2.99 0 0 0 .519-1.38l.008-.106c.003-.07.002-.142.002-.213L23 19.25c0-.69-.56-1.25-1.25-1.25h-5.5Z" fill="#ffffff"/> },
    { name: 'Viestit', lable:"Viestit", svg: <path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.154l-9.984-5.23a3.25 3.25 0 0 1 3.048-2.919L5.25 4h13.5-13.5Z" fill="#ffffff"/>},
    { name: 'Tyojarjestys', lable:"Työjärjestys", svg: <path d="M21 8.5v9.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18ZM7.25 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-4.75-4.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm4.75 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm1-7.5A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5Z" fill="#ffffff"/>},
    { name: 'Opinnot', lable:"Opinnot", svg: <path d="M4.249 13.995h5.876c-.349.423-.574.952-.62 1.53l-.009.22v4.5c0 .665.236 1.275.63 1.75l-.13.001c-3.42 0-5.943-1.072-7.486-3.236A2.75 2.75 0 0 1 2 17.164v-.92a2.249 2.249 0 0 1 2.249-2.249Zm10.497-2.5h3c.648 0 1.18.492 1.244 1.123l.007.127-.001 1.25h1.25c.967 0 1.75.784 1.75 1.75v4.5a1.75 1.75 0 0 1-1.75 1.75h-8a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h1.25v-1.25c0-.647.492-1.18 1.123-1.243l.127-.007h3-3Zm2.75 1.5h-2.5v1h2.5v-1ZM9.997 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="#ffffff"/>},
    { name: 'Tuntimerkinnat', lable:"Tuntimerkinnät", svg: <path d="M16.25 2a.75.75 0 0 1 .742.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25v4.328A3.752 3.752 0 0 0 14.463 12H7.248l-.102.007a.75.75 0 0 0 0 1.486l.102.007h7.01A3.74 3.74 0 0 0 15.45 16h-.951a2.5 2.5 0 0 0-2.5 2.5v.5c0 1.1.422 2.152 1.173 3.005h-7.42a2.25 2.25 0 0 1-2.25-2.25L3.5 5.75A2.25 2.25 0 0 1 5.75 3.5l.747-.001V2.75a.75.75 0 0 1 1.494-.102l.007.102v.749H11V2.75a.75.75 0 0 1 1.494-.102l.007.102v.749h2.998V2.75a.75.75 0 0 1 .75-.75Zm-5.003 14H7.248l-.102.007a.75.75 0 0 0 0 1.486l.102.007h3.999l.102-.007a.75.75 0 0 0 0-1.486L11.247 16Zm5-8H7.249l-.102.007a.75.75 0 0 0 0 1.486l.102.007h9l.101-.007a.75.75 0 0 0 0-1.486L16.248 8ZM18 10.5c.788 0 1.498.331 2 .861a2.74 2.74 0 0 1 .75 1.889 2.74 2.74 0 0 1-.75 1.888 2.75 2.75 0 1 1-2-4.638Zm-5 8a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 23 18.5v.5c0 1.971-1.86 4-5 4-1.784 0-3.154-.654-4.006-1.58C13.346 20.715 13 19.852 13 19v-.5Z" fill="#ffffff"/>},
    { name: 'TestComing', lable:"Kokeet", svg: <path d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2Zm-5 4.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm3-6a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75ZM13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5Z" fill="#ffffff"/>},
    { name: 'Tiedotteet', lable:"Tiedotteet", svg: <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.907 5.622c.062.208.093.424.093.641V17.74a2.25 2.25 0 0 1-2.891 2.156l-5.514-1.64a4.002 4.002 0 0 1-7.59-1.556L6 16.5l-.001-.5-2.39-.711A2.25 2.25 0 0 1 2 13.131V10.87a2.25 2.25 0 0 1 1.61-2.156l15.5-4.606a2.25 2.25 0 0 1 2.797 1.515ZM7.499 16.445l.001.054a2.5 2.5 0 0 0 4.624 1.321l-4.625-1.375Z" fill="#ffffff"/></svg>},

];

function Sidebar() {
    const location = useLocation();
    const [selectedButton, setSelectedButton] = useState(localStorage.getItem('selectedButton') || 'Etusivu');

    useEffect(() => {
        const currentButton = location.pathname.split('/')[1];
        setSelectedButton(currentButton.charAt(0).toUpperCase() + currentButton.slice(1));
    }, [location]);
    
    return (
        <div className='Sidebar'>
            {buttonsData.map(button => (
                <Button 
                    key={button.name}
                    name={button.name} 
                    lable={button.lable}
                    selectedButton={selectedButton} 
                    svg={button.svg}
                />
            ))}
        </div>
    );
}

const Button = ({ name, lable, selectedButton, svg }) => (
    <Link 
        to={`/${name.toLowerCase()}`} 
        className={`container ${selectedButton === name ? 'checked' : ''}`} 
    >
        <svg className='svg' width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {svg}
        </svg>
        <h3 className='h3'>{lable}</h3>
    </Link>
);

export default Sidebar;