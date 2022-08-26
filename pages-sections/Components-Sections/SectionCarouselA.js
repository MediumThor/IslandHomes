import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const App = () => {
  const images = [1, 2, 5, 6].map((number) => ({
    src: `https://i.imgur.com/aUvlF87.jpg`

  },
  {
    src: `https://i.imgur.com/yM5c93L.jpg`

  },
  {
    src: `https://i.imgur.com/aUvlF87.jpg`

  },
  {
    src: `https://i.imgur.com/yM5c93L.jpg`

  }
 ));

  return (
    <Carousel images={images} style={{ height: 500, width: 800 }} />
  );
};

export default App;