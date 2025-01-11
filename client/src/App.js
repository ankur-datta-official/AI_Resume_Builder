import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Both from './components/Both';
import AboutUs from './components/About';
import Home from './components/Home';
import Firstpage from './components/Firstpage';
import Suggestions from './components/Suggestion';
import Faq from './components/Faq';
import UploadPage from './components/UploadPage';
import Templates from './components/Templates';
import TemplateCard from './components/TemplateCard';
// import Form from './components/ValidationForm';

function App() {
  return (
    <div>
      <Router>
      {/* <Navbar/> */}
      <Routes>
     
     <Route exact path='/privacy' element={ <Both/>}/>
     <Route exact path='/about' element={ <AboutUs/>}/>
     
     <Route exact path='/faq' element={   <Faq/>}/>
     <Route exact path='/suggestion' element={ <Suggestions/>}/>
     <Route exact path='/firstpage' element={ <Firstpage/>}/>
     {/* <Route exact path='/form' element={ <Form/>}/> */}
     <Route exact path='/' element={ <Home/>}/>
     <Route exact path='/firstpage' element={ <Firstpage/>}/>
     <Route exact path='/upload' element={ <UploadPage/>}/>
     <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/templates' element={<Templates/>}/>
     </Routes>
      {/* <Form/> */}
     {/* <UploadPage/> */}
     {/* <Templates/> */}
     {/* <TemplateCard/> */}
    
      </Router>
    </div>
  );
}

export default App;
