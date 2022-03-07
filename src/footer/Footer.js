import React from 'react';
import './footer.css'
export default function Footer() {
  return <div className='footer'>
      <div className='contact'>
     <h3 style={{color : 'white'}}>CONTACT</h3>
     <p style={{color : 'white'}}> 03122305984</p>
     <p style={{color : 'white'}}> umerprogrammer@gmail.com</p>
      </div>
      <div className='Follow_me'>
      <h3 style={{color : 'white'}}>Follow Me</h3>

      <a href='https://www.facebook.com/umerprogrammer' target='_blank'> <img src='https://pnggrid.com/wp-content/uploads/2021/04/facebook-white-circle-1024x1024.png'/>{'\n'}</a>
<a href='https://github.com/umerprogramm' target='_blank'><img src='data:image/webp;base64,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'/></a>
      </div>

  </div>;
}
