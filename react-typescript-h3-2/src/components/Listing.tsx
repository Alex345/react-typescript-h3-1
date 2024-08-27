
function Listing({items}) {

  return (
    <>
      <div className="item-list">

        {items.map( (item, key) => {

          if(item.state === 'removed') {
            return (
              <></>
            );
          }

          let quantityClass = 'item-quantity ';
          quantityClass += (item.quantity <= 10) ? 'level-low' : ( (item.quantity > 10 && item.quantity <= 20) ? 'level-medium' : 'level-high' )

          let currentPrice = ((item.currency_code === 'USD') ? ('$' + item.price) : ( (item.currency_code === 'EUR') ? '€' + item.price : item.price + ' GBP'));

          return (
            <div key={item.listing_id} className="item">
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt={item.title} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{ (item.title.length > 50) ? item.title.substring(0, 50) + ' ...' : item.title}</p>
                <div className="item-info">
                  <p className="item-price">{currentPrice}</p>
                  <p className={quantityClass}>{item.quantity} left</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </>
  );
}

export default Listing;
