import React from 'react'
import Header from './components/Header';
import CEOMessage from './components/CEOMessage';
import Footer from './components/Footer';
import Pattern1 from './components/Pattern1';
import CallToAction from './components/CallToAction';
import BizStatistics from './components/BizStatistics';

const App = () => {
  return (
    <div className="container mx-auto min-h-screen p-5 flex flex-col  gap-10 bg-custom-cream md:gap-16 lg:px-44">
      <Header />
      <Pattern1 />

      <div className='lg:flex lg:justify-between lg:items-center space-y-10'>
        <CallToAction />
        <BizStatistics />
      </div>

      <div>
        <CEOMessage />
        <Footer />
      </div>
      
    </div>
  );
}

export default App