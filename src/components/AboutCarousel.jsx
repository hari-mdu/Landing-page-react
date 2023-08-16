import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const boxContent = [
    <img src='https://tecnologia.vamtam.com/wp-content/uploads/elementor/thumbs/google@2x-q5jijcf6b8eydn973xaiefgq9kbsungkcdg27bhips.png'/>,

    <img src="https://tecnologia.vamtam.com/wp-content/uploads/elementor/thumbs/clutch-top1000-q5jip6z0u4f6marcygaxwybzbvi0quoftbktpatc00.png"/>,

    <img src="https://tecnologia.vamtam.com/wp-content/uploads/elementor/thumbs/forbes2022-q5jip53cggclz2u39fhoryt253rabggz529uqqw4cg.png" />,

    <img src="https://tecnologia.vamtam.com/wp-content/uploads/elementor/thumbs/ny_nyc_managed-service-providers_2022_transparent-q5jijeauowhj0v6gsy3rjezngc2ja1o10mr15veqdc.png"/>,

    <img src="https://tecnologia.vamtam.com/wp-content/uploads/elementor/thumbs/top_clutch-q5jip7wv0yggxwpzsypkhg3fx9ddyjs65g8b6krxts.png" />
  ];

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

const AboutCarousel = () => {
  return (
    <div className="carousel-container">
    <Carousel
       responsive={responsive}
        swipeable={false}
        draggable={false}
        arrows={false}
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000} 
        infinite={true} 
      
    >
      {boxContent.map((content, index) => (
        <div key={index} className="box">
          {content}
        </div>
      ))}
    </Carousel>
  </div>
  )
}



export default AboutCarousel


