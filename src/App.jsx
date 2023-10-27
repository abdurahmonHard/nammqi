import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to update the scroll position
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Navbar />
        <div className={`fixed right-5 bottom-4 bg-sky-500 hover:bg-[#ffb400] cursor-pointer py-4 pb-3 px-5 rounded-lg text-white ${scrollPosition > 400 ? 'block' : 'hidden'}`}
          onClick={handleScrollToTop}
        >
          ^
        </div>
    </div>
  );
};

export default App;
