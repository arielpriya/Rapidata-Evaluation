import React from 'react';
import Image from '../../assets/images/thankyou.png';

//empty for now
type Props = {

}
const Thankyou = (props: Props) => {
    
  return (
    <div className='thankyou'>
      <div className='thankyou-image'>
         <img src={Image} alt='thankYou' width="100%"/>
      </div>
        <h1 className='heading'>
            Thankyou for submission!
        </h1>
    </div>
  )
}

export default Thankyou;