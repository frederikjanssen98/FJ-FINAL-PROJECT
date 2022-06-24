import './App.css';
import Navbar from './components/Home/Navbar/Navbar';
import PreviewCards from './components/Home/PreviewCards/PreviewCards';
import MapContainer from './components/Home/Map/Map';


function App() {
  return (
    <>
    <Navbar/>
    <section className='mainpage'>
      <section className='leftside'>
        <PreviewCards/>
      </section>
      <section className='rightside'>
        <MapContainer/>
      </section>
    </section>
    </>
  );
}

export default App;
