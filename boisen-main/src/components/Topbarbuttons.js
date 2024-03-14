import React, { useState, useEffect } from 'react';
import { Link, useLocation} from 'react-router-dom';
import "../studies/Studies.css"

function Topbarbuttons({ buttonsData }) {
    const location = useLocation();
    const [selectedButton, setSelectedButton] = useState(localStorage.getItem('selectedButton') || 'Ammatilliset');

    useEffect(() => {
        const currentButton = location.pathname.substring(1);
        setSelectedButton(currentButton.charAt(0).toUpperCase() + currentButton.slice(1));
    }, [location]);

    useEffect(() => {
        localStorage.setItem('selectedButton', selectedButton);
    }, [selectedButton]);

    return (
        <div className='buttons-container'>
            {buttonsData.map(button => (
                <Button 
                    key={button.name}
                    name={button.name} 
                    selectedButton={selectedButton} 
                    link={button.link}
                />
            ))}
        </div>
    );
};

const Button = ({ name, selectedButton, link}) => (
    <Link 
        to={`/${link}`} 
        className={`container1 ${selectedButton === name ? 'checked' : ''}`} 
        id='button1'
    >
        <span className='h41'>{name}</span>
    </Link>
);

export default Topbarbuttons;