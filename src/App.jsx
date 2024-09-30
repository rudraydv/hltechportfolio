import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Cases';
import ContactUs from './pages/ContactUs';
import { Toaster } from 'react-hot-toast';
import Blog from './pages/blogsections/Blog';
import Blog1 from './pages/blogsections/Blog1';
import Blog2 from './pages/blogsections/Blog2';
import Blog3 from './pages/blogsections/Blog3';
import Blog4 from './pages/blogsections/Blog4';
import Blog5 from './pages/blogsections/Blog5';
import Blog6 from './pages/blogsections/Blog6';



const App = () => {

  useEffect(() => {
    // Add the fade-in class to the body
    document.body.classList.add('fade-in');

    // Cleanup to remove class on unmount (optional)
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);
 return (
    <>
    <Router>
      <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/cases' element = {<Cases/>}/>
      <Route path='/contactus' element = {<ContactUs/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/blog1' element = {<Blog1/>}/>
      <Route path='/blog2' element = {<Blog2/>}/>
      <Route path='/blog3' element = {<Blog3/>}/>
      <Route path='/blog4' element = {<Blog4/>}/>
      <Route path='/blog5' element = {<Blog5/>}/>
      <Route path='/blog6' element = {<Blog6/>}/> 
      </Routes>
      <Toaster/>
    </Router>
    </>
  )
}

export default App;
