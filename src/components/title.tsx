import blink from '../img/blink.svg'

const Title = () => {
    
    return (
        <div className="title">
            <img src={blink} alt="blink" className='title__blink' />
            <div className='title__text'>
            taxes & fees
            </div>
        </div>
    );
  };
  
export default Title;