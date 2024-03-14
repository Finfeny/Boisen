import PageTemplate from '../components/PageTemplate';
import React from 'react';
import "./Studies.css"
import Topbarbuttons from '../components/Topbarbuttons';

function Ammatilliset() {
    const buttonsData = [
        { name: 'Ammatilliset', link: './opinnot/ammatilliset'},
        { name: 'Kaksoistutkinto', link: './opinnot/ammatilliset'},
        { name: 'Yto-aineet', link: './opinnot/ammatilliset'},
        { name: 'Valinnaiset', link: './opinnot/ammatilliset'},
    ];
    
    return (
        <PageTemplate>
            <div className='sivu1'>
                <div className='topbar1'>
                    <h1 className='h111'>Opinnot</h1>
                    <Topbarbuttons buttonsData={buttonsData}/>
                </div>
                <div className='opintoluokka'>
                    <h1 className='luokan-nimi'>Tieto- ja viestintätekniikan perustehtävät</h1>
                    <div className='listapaska'>
                        <h1 className='h111'>DEMO</h1>
                    </div>
                    <div className='pisteet'>
                        <div className='opinto'>
                            <h1 className='h41'>Opintopisteet</h1>
                            <div className='obox'>
                                <h1 className='boxfont'>25</h1>
                            </div>
                        </div>
                        <div className='arvosana'>
                            <h1 className='h41'>Arvosana</h1>
                            <div className='abox'>
                                <h1 className='boxfont'>5</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='opintoluokka'>
                    <h1 className='luokan-nimi'>Ohjelmointi</h1>
                    <div className='listapaska'>
                        <h1 className='h111'>DEMO</h1>
                    </div>
                    <div className='pisteet'>
                        <div className='opinto'>
                            <h1 className='h41'>Opintopisteet</h1>
                            <div className='obox'>
                                <h1 className='boxfont'>45</h1>
                            </div>
                        </div>
                        <div className='arvosana'>
                            <h1 className='h41'>Arvosana</h1>
                            <div className='abox'></div>
                        </div>
                    </div>
                </div>
                <div className='opintoluokka'>
                    <h1 className='luokan-nimi'>Ohjelmistokehittäjänä toimiminen</h1>
                    <div className='listapaska'>
                        <h1 className='h111'>DEMO</h1>
                    </div>
                    <div className='pisteet'>
                        <div className='opinto'>
                            <h1 className='h41'>Opintopisteet</h1>
                            <div className='obox'>
                                <h1 className='boxfont'>45</h1>
                            </div>
                        </div>
                        <div className='arvosana'>
                            <h1 className='h41'>Arvosana</h1>
                            <div className='abox'></div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
};

export default Ammatilliset;