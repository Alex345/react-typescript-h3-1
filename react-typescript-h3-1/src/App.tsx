import './index.css';

import { useState } from 'react'
import StarsType from "./module/StarsType";
import Stars from './conponent/Stars';

function App() {

    const [rating, setRating] = useState<StarsType[]>([
        {
            'id': 1,
            'count': 3,
            'title': 'Супермен',
            'img': 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/1def1500-bcac-4210-ba18-ff78e84ce25c/300x450',
            'genre': 'Экшен',
            'genre_class': 'action',
            'price':1299,
            'url': 'https://www.kinopoisk.ru/film/7145/'
        },
        {
            'id': 2,
            'count': 1,
            'title': 'Одинокий странник',
            'img': 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/11182f77-3aff-44a6-9ede-f8151f8f3619/300x450',
            'genre': 'Вестерн',
            'genre_class': 'western',
            'price': 899,
            'url': 'https://www.kinopoisk.ru/film/5490/'
        },
    ]);

  return (
    <div className="container">
        <Stars count={rating}/>
    </div>
  )
}

export default App;
