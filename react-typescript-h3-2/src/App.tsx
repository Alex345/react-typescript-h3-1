import './assets/css/Listing.css';
import ListingType from './modules/ListingType';
import Listing from "./components/Listing";
import customData from './data/etsy.json';

function App() {
  const data: ListingType[] = customData;
  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App;
