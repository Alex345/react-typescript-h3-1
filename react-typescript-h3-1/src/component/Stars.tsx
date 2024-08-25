import '../assets/stars.css';
import Star from "./Star";

function Stars({count}) {
  return (
    <>
      <div className="films">
        {count.map((item, key) => {
          return (
            <div key={item.id} className="filmItem">

              <div className="filmItem__row">
                <img src={item.img} alt={item.title}/>

                <div className={item.genre_class + ' genre'}>
                  {item.genre}
                </div>
              </div>

              <div className="filmItem__row">

                <div className="filmItem__row-icons">
                  <a className="filmItem__row-icon-favorite" href="src/conponent/Stars#">
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                            stroke="#000000" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="src/conponent/Stars#">
                    <svg width="50px" height="50px" viewBox="0 0 512 512" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="icon" fill="#000000" transform="translate(42.666667, 42.666667)">
                          <path
                            d="M352,277.333333 C330.312533,277.333333 310.953173,286.729173 297.312427,301.494827 L148.109227,236.136747 C148.763093,232.164053 149.333333,228.157653 149.333333,224 C149.333333,216.23168 147.8112,208.889387 145.610667,201.8464 L297.605547,125.527467 C311.231787,140.096427 330.477867,149.333333 352,149.333333 C393.236907,149.333333 426.666667,115.903573 426.666667,74.6666667 C426.666667,33.42976 393.236907,3.55271368e-14 352,3.55271368e-14 C310.763093,3.55271368e-14 277.333333,33.42976 277.333333,74.6666667 C277.333333,79.0065067 277.899733,83.2004267 278.610773,87.3371733 L121.455787,166.246187 C108.619733,155.832107 92.4829867,149.333333 74.6666667,149.333333 C33.42976,149.333333 3.55271368e-14,182.763093 3.55271368e-14,224 C3.55271368e-14,265.236907 33.42976,298.666667 74.6666667,298.666667 C96.3541333,298.666667 115.713493,289.270827 129.35424,274.505173 L278.55744,339.863253 C277.903573,343.835947 277.333333,347.842347 277.333333,352 C277.333333,393.236907 310.763093,426.666667 352,426.666667 C393.236907,426.666667 426.666667,393.236907 426.666667,352 C426.666667,310.763093 393.236907,277.333333 352,277.333333 Z"
                            id="Shape">

                          </path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>

                <div className="filmItem__row-title">
                  {item.title}
                </div>

                <ul className="card-body-stars u-clearfix">
                  <Star
                    raiting={(typeof item.count !== "number" || item.count < 0) ? 0 : ((item.count > 5) ? 5 : item.count)}/>
                </ul>

                <div className="filmItem__row-actions">
                  <button>
                    Купить
                    <span className="filmItem__row-actions-price">{item.price}</span>
                    <span className="filmItem__row-actions-currency">₽</span>
                  </button>
                  <a href={item.url}>Подробнее &#129122;</a>
                </div>


              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default Stars;
