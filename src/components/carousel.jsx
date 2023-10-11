import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimg1 from '../assets/Images/testimonial_reviewer1.svg';
import testimg2 from '../assets/Images/testimonial_reviewer2.svg';
import star from '../assets/Images/star.svg';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text1: 'Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.',
    text2: 'Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. ',
    image: testimg1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    text1: 'Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.',
    text2: 'Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. ',
    image: testimg2,
  },
  {
    id: 3,
    name: "Smith Andrew",
    text1:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.",
    text2:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. ",
    image: testimg1,
  },
  {
    id: 4,
    name: "Andrew Tate",
    text1:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.",
    text2:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. ",
    image: testimg2,
  },
  {
    id: 5,
    name: "Peter Johnson",
    text1:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable.",
    text2:
      "Quick and adaptable, SoundPart reliably meets these key necessities. The capacity to talk straightforwardly with a senior guarantor makes this conceivable. ",
    image: testimg1,
  },
];

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      <div className="testimonialSection pt-5">
        <h2 className="text-center pt-5">Happy Clients</h2>
      </div>
      <div className="testimonial-slider mt-5">
        <Carousel
          showThumbs={false}
          selectedItem={currentTestimonial}
          emulateTouch={true}
          showStatus={false}
          showArrows={false}
          centerMode={true}
          centerSlidePercentage={100 / 1} 
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className='rating'>
                <img src={star} alt=""/>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="px-5 mt-4">{testimonial.text1}</p>
              <p className="px-5 mt-4">{testimonial.text2}</p>
              <img src={testimonial.image} alt={testimonial.name} className="mt-5 " />
              <h3 className="mt-4">{testimonial.name}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
