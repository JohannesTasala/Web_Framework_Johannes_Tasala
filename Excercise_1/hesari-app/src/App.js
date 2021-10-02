
import './App.css';
import FrontNews from './components/FrontNews';
import Notification from './components/Notification';
import SideBar from './components/SideBar';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Title />
      <Notification head='KAUPUNKI' content='Tikkurilan tuliterässä maamerkissä alkoi poikkeuksellisen laaja korjaustyö: 
      kosteutta ehti tulla jo asuntoihin saakka'/>
      <Notification head='PÄIVÄN TIMANTTI' content='Reima Launonen kiipesi työväenluokasta yliopistoon,
       mutta huomasi pian olevansa kuin norsu posliinikaupassa'/>
      <Notification head='MAINOS' content='Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!'/>
      <div className="lowerBox">
        <div>
        <FrontNews head3='BUDJETTIEHDOTUS VALMIS'/>
        <div>
        <FrontNews image='https://suomenkuvalehti.fi/wp-content/uploads/2020/09/59124873.jpg'/>
        </div>
        <FrontNews head2='Budjettiriihi | '  content2='Hallitus löysi sovun ilmastoriitaan ja sai valmiiksi ensi vuoden budjettiehdotuksen: Tämä kaikki muuttuu'/>
        </div>
        
        <div>
        <SideBar  head4='Luetuimmat'/>
        <SideBar head5='Työelämä |' content3='Eetu Karppanen tienaa viikon työllä kuukauden tulot. Palkkatöistä irtautuneet kertovat, miten ovat rakentaneet työurastaan unelmien paketin.'/>
        <SideBar head5='Koronavirus |' content3='Osa ihmisistä ei voi palata koskaan arkeen kahdenkaan rokotteen jälkeen.'/>
        <SideBar head5='Eläimet |' content3='1400 Delffiiniä surmattiin Färsaarilla: "tämä oli virhe"'/>
        <SideBar head5='Sijoittaminen |' content3='Kenen kannattaa avata osakesäästötili? Uuden tilin rajoitukset tulivat yllätyksenä osalle sijoittajista'/>
        <SideBar head5='Syntyvyys |' content3='Suomen vauvabuumi on niin poikkeuksellinen, että erot muihin maihin yllättivät tutkijankin: "Tämä on todella hämmentävää"'/>

        </div>
      </div>
    </div>
  );
}
/* test*/
export default App;
