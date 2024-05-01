import miniblink from '../img/miniblink.svg'

const Taxes = () => {
    
    return (
      <>
        <a id="taxes" className="anchor" href=""></a>
        <div className="taxes">
            <div className="taxes__item">
              <img className='taxes__blinktop' src={miniblink} alt="miniblink" />
              <img className='taxes__blinkbottom' src={miniblink} alt="miniblink" />
              <div className="taxes__text">
                <div className="taxes__title">
                  4%
                </div>
                <div className="taxes__subtitle">
                  buy
                </div>
              </div>
            </div>
            <div className="taxes__item">
              <img className='taxes__blinktop' src={miniblink} alt="miniblink" />
              <img className='taxes__blinkbottom' src={miniblink} alt="miniblink" />
              <div className="taxes__text">
                <div className="taxes__title">
                  4%
                </div>
                <div className="taxes__subtitle">
                  sell
                </div>
              </div>
            </div>
            <div className="taxes__item">
              <img className='taxes__blinktop' src={miniblink} alt="miniblink" />
              <img className='taxes__blinkbottom' src={miniblink} alt="miniblink" />
              <div className="taxes__text">
                <div className="taxes__title">
                  0.5%
                </div>
                <div className="taxes__subtitle">
                  fee for bets in $BBET
                </div>
              </div>
            </div>
            <div className="taxes__item">
              <img className='taxes__blinktop' src={miniblink} alt="miniblink" />
              <img className='taxes__blinkbottom' src={miniblink} alt="miniblink" />
              <div className="taxes__text">
                <div className="taxes__title">
                  2%
                </div>
                <div className="taxes__subtitle">
                  fee for bets in ETH
                </div>
              </div>
            </div>
          </div>
      </>
    );
  };
  
export default Taxes;