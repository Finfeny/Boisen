import './Home.css';
import PageTemplate from './components/PageTemplate';



function Home() {
  return (
    <PageTemplate children={
      <div className='home-sivu'>

        <div class='home-työjärjestys'>
          <div class='home-työjärjestys-otsikko'>
            <h2 class='home-h2'>Työjärjestys tänään</h2>
            <h2 class='home-h2'>26.10.</h2>
          </div>
          <div class='home-container'>

            <div class='home-grid-80-20'>
              <h3 class='home-h3-2'>10.00 - 11.45</h3>
              <h3 class='home-h3-2'>JKA302</h3>
              <div class='home-yhteen'>
                <h4 class='home-h3-2'>Tietovies20.pt0707 Projekti</h4>
                <h4 class='home-h4'>Kairinen Marko</h4>
              </div>
            </div>

            <div class='home-grid-80-20'>
              <h3 class='home-h3-2'>12:30 - 14:15</h3>
              <h3 class='home-h3-2'>JKA302</h3>
              <div class='home-yhteen'>
                <h4 class='home-h3-2'>Tietovies20.pt0707 Projekti</h4>
                <h4 class='home-h4'>Kairinen Marko</h4>
              </div>
            </div>

          </div>
        </div>

        <div class='home-ilmoitus-puoli'>
          <div class='home-ilmoitukset'>
            <h2 class='home-h2'>Lukemattomat ilmoitukset</h2>

            <div class='home-container'>
              <h3 class='home-h3-3'>Viesti</h3>
              <div class='home-grid-80-20'>
                <h4 class='home-h4'>Oppimo sitä oppimo tätä</h4>
                <h4 class='home-h4'>Niinistö Sauli</h4>
              </div>
            </div>

            <div class='home-container'>
              <h3 class='home-h3-3'>Tiedote</h3>
              <div class='home-grid-80-20'>
                <h4 class='home-h4'>Oppimo sitä oppimo tätä</h4>
                <h4 class='home-h4'>Niinistö Sauli</h4>
              </div>
            </div>

          </div>

          <div class='home-kokeet-ruoka'>
            <div class='home-kokeet'>
              <h2 class='home-h2'>Tulevat kokeet</h2>

              <div class='home-container'>
                <div class='home-grid-80-20'>
                  <h4 class='home-h3-2'>Matematiikka</h4>
                  <h4 class='home-h3-2'>30.10.</h4>
                </div>

                <h3 class='home-h4'>Matematiikan perustaitojen syventäminen</h3>
                <h3 class='home-h4'>Koealuetta</h3>
                <h3 class='home-h4'>Opettaja</h3>
              </div>
            </div>

            <div class='home-ruoka'>
              <h2 class='home-h2'>Päivän ruoka</h2>

              <div class='home-container'>
                <div class='home-grid-80-20'>
                  <h4 class='home-h3-2'>Torstai</h4>
                  <h4 class='home-h3-2'>26.10.</h4>
                </div>

                <h3 class='home-h4'>Pääruoka</h3>
                <h3 class='home-h4'>Kasvisruoka</h3>
                <h3 class='home-h4'>Jälkiruoka</h3>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    }/>
  );
};

export default Home;