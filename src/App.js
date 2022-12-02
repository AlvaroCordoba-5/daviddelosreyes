import logo from './logo.svg';
import './App.css';
import Video from '../src/videoportada.mp4'

function App() {
  
  return (
    <>

    <div className='header'>
        <video  autoplay='autoplay' muted loop   id="vid">
         <source type="video/mp4" src={Video} ></source>
         
</video>
        
          <div className='name'>
        <h1>David De Los Reyes</h1>
        <h4>-Parapsicologo-</h4>
        </div> 
      
   </div>
        
 

<div className='ytvideo'>

<iframe  src="https://www.youtube.com/embed/fzcweyZXUgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


    </>
  );
}

export default App;
