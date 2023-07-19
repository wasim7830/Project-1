import React from 'react';
import './style.css';
import Navbar from './component/Navbar';
import Bannar from './component/bannar';
import Expert from './component/Expert';
import News from './component/News';
import Plans from './component/Plans';
import Footer from './component/footer';
export default function App() {
  return (
    <div>
      <Navbar />
      <Bannar />
      <Expert />
      <News/>
      <Plans/>
      <Footer/>
    </div>
  );
}
