import React from 'react';
import HEADER from '../Header/Header.jsx';
import NAVBAR from '../Navbar/Navbar.jsx';
function ContentPage() {
  return (
    <div>
      
    <NAVBAR/>
    <div class="content middle">
    <div className='mg'>
      <div className='spor'>
      <h1>ContentPage</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
     
        
    </div>
        </div>
    </div>
    </div>
  );
}

export default ContentPage;