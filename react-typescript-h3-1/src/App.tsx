import { useState } from 'react';
import {Stars} from "./types/Stars";

function App() {

const [rating, setRating] = useState<Stars[]>([
    {'count': 1, 'title': 'Супермен', 'img': '', 'genre': 'Экшен', 'price':1299},
    {'count':0, 'title': 'Одинокий странник', 'img': '', 'genre': '', 'price': 899},
]);

  return (
    <>
        <Stars count={rating}/>
    </>
  )
}

export default App
