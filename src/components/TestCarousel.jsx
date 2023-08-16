import React, { useState, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const TestCarousel = () => {
  const boxContent = [
        <div >
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/photo.png" alt=""/>
                        <p>Tecnologia implemented such a powerful platform that we had no break in service when our
                            employees had to work from home due to the COVID-19 pandemic. We weren’t concerned about how
                            to shift to a remote working environment because Integris facilitated a seamless transition.
                        </p>

                        <div className="organization">
                            <h5>Amanda Parks</h5>
                            <p>Network Manager, Healthcare Organization</p>
                        </div>
                    </div>,

                    <div >
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/nespresso-logo.png" alt=""/>
                        <p>Tecnologia has been an outstanding partner. Their team is professional, knowledgeable and
                            customer-service driven. Tecnologia proactive collaborative approach has been critical in
                            helping us build an IT infrastructure that enables our success today and supports our
                            long-term positioning strategy. </p>

                        <div className="organization">
                            <h5>John Labkins</h5>
                            <p>Partner & CEO, Telecommunication Company</p>
                        </div>
                    </div>,

                    <div >
                        <img src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/logo-R.svg" alt=""/>
                        <p>I’ve been a customer for more than a decade. Tecnologia is an example of the way Managed
                            Services should be done. They do their very best to make sure you succeed. If there’s an
                            issue, they step in immediately. We will continue to be a customer for years to come. </p>

                        <div className="organization">
                            <h5>Daniel Legrante</h5>
                            <p>CIO, Restaurant Product Supplier</p>
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
    <ArrowLeftCircle size={30} type="button" className="custom-prev-button carousel-btn-1 me-3 m-5 mb-0" onClick={handlePrev}/>
    <ArrowRightCircle type="button" size={30}  className="custom-next-button carousel-btn-2 ms-3 m-5 mb-0" onClick={handleNext}/>
  </div>
);

export default TestCarousel;
