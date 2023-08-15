import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeftCircleFill, ArrowRightCircleFill, PlusCircle } from 'react-bootstrap-icons';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BoxCarousel = () => {
  const boxContent = [
    <div className="content">
      <h2>Datacenter & Hosting</h2>
      <p>Our facility – Data Center – is the first in the USA that meets the strict ANSI/TIA-942 rated
        4 certificate requirements for design, build and operate.</p>
      <div className="view">
        <PlusCircle/>
        <p>View more</p>
      </div>
    </div>,
    <div className="content" id="content-1">
      <h2>Collaboration</h2>
      <p>Despite modern cloud technology, your users operate in a familiar Microsoft Office
        environment and benefit from broad compatibility and low-threshold access.</p>
      <div className="view">
        <PlusCircle/>
        <p>View more</p>
      </div>
    </div>,
    <div className="content" id="content-2">
      <h2>Cloud Platform</h2>
      <p>Customized cloud platform designed to improve performance, lower IT costs, and provide secure
        and reliable access to your company data from any device, anytime, anywhere.</p>
      <div className="view">
        <PlusCircle/>
        <p>View more</p>
      </div>
    </div>,
    <div className="content" id="content-3">
      <h2>Network & Connectivity</h2>
      <p>Network topologies include hub, linear, tree, and star designs, each of which is set up differently to promote connectivity between computers or devices.</p>
      <div className="view">
        <PlusCircle/>
        <p>View more</p>
      </div>
    </div>
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = (activeIndex + 1) % boxContent.length;
      setActiveIndex(nextIndex);
      carouselRef.current.goToSlide(nextIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const prevIndex = (activeIndex - 1 + boxContent.length) % boxContent.length;
      setActiveIndex(prevIndex);
      carouselRef.current.goToSlide(prevIndex);
    }
  };

  return (
    <div>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        arrows={false}
        showDots={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButtonGroup handleNext={handleNext} handlePrev={handlePrev} />}
        beforeChange={(nextSlide) => setActiveIndex(nextSlide)}
        selectedItems={[activeIndex]}
      >
        {boxContent.map((content, index) => (
          <div key={index} className={`box ${index === activeIndex ? 'active' : ''}`}>
            {content}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const CustomButtonGroup = ({ handleNext, handlePrev }) => (
  <div className="custom-button-group">
    <ArrowLeftCircleFill type='button' size={30} color='grey' className="custom-prev-button me-3 m-5 mb-0" onClick={handlePrev}/>
    <ArrowRightCircleFill type='button'  size={30} color='grey' className="custom-next-button ms-3 m-5 mb-0" onClick={handleNext}/>
  </div>
);

export default BoxCarousel;
