import React from 'react';
import NAVBAR from '../Navbar/Navbar.jsx';
function QuizPage() {
  return (
    <div>
      
    <NAVBAR/>
    <div class="content middle">
    <div className='mg'>
      <div className='spor'>
      <h1>Quiz</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
     
        
    </div>
        </div>
    </div>
    </div>
  );
}

export default QuizPage;