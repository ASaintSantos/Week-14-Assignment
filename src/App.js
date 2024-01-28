import React from 'react';
import'./App.css';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <>
    <div className='container-fluid backImage'>
      <Movies />
    </div>
    </>
  );
}

export default App;