import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className='profile-background'>
     <div className='pics'>
     <img src='/pp.jpeg' alt='My display picture' className= 'profile-pics'></img>
     </div>
     <div className= 'profile-name'>Lilian Ekechukwu</div>
     <div className= 'profile-location'>Lagos, Nigeria</div>
     <div className= 'profile-career'>"Front-end developer and avid reader."</div>

     <div className='profile-socials'>
      <div classname='socials'><a href='https://github.com/Chisirius'  target='_blank'>Github</a></div>
      <div classname='socials'><a href='https://www.frontendmentor.io/profile/Chisirius' target='_blank' >Frontend Mentor</a></div>
      <div classname='socials'><a  href='https://www.linkedin.com/in/lilian-ekechukwu?trk=contact-info' target='_blank' >Linkedin</a></div>
      <div classname='socials'><a  href='https://www.instagram.com/lil.chuks?igsh=MXVob2tjbXBsZmt4dw==' target='_blank' >Instagram</a></div>
      <div classname='socials'> <a href='https://www.facebook.com/share/19i9iyU7uN/' target='_blank'>Facebook</a></div>
     </div>
      </div>
    </div>
  );
}

export default App;
