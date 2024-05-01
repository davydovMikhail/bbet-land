import blink from '../img/blink.svg'
import plane from '../img/plane.svg'
import people from '../img/people.svg'
import saving from '../img/saving.svg'
import paid from '../img/paid.svg'

const Tokenomics = () => {
    
    return (
      <>
        <a id="tokenomics" className="anchor" href=""></a>
        <div className="tokenomics"> 
            <div className="tokenomics__title">
              <img src={blink} alt="blink" className='tokenomics__blink' />
              <div className='tokenomics__text'>
                Tokenomics
              </div>
            </div>
            <div className="tokenomics__items" >
              <div className="part part__team">
                <div className="part__text">
                  <span className="part__text_percent">6%</span> Team
                </div>
                <img src={people} alt="" />
              </div>
              <div className="part part__bank">
                <div className="part__text">
                  <span className="part__text_percent">10%</span> Casino Bank
                </div>
                <img src={saving} alt="" />
              </div>
              <div className="part">
                <div className="part__text">
                  <span className="part__text_percent">84%</span> Liquidity
                </div>
                <img src={paid} alt="" />
              </div>
            </div>
          </div>
      </>
    );
  };
  
export default Tokenomics;