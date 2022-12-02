
import './App.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Video from '../src/videoportada.mp4'
import Photo from '../src/david.jpg'

function App() {
  
  return (
    <>
<FloatingWhatsApp
phoneNumber='+5491140575858'
accountName='David De Los Reyes'
statusMessage='En linea'
chatMessage='Hola, como te puedo ayudar?'
placeholder='Escribe un mensaje...'
avatar={Photo}
/>
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
<h1>Conferencia Corazon disco</h1>
<iframe  src="https://www.youtube.com/embed/fzcweyZXUgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


    </>
  );
}

export default App;
