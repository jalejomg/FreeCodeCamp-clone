import Data from "../../data/Testimonials";
import H1Element from "../../Elements/H1Element/H1Element";
import Testimonial from "../TestimonialComponent/Testimonial";
import "./App.css";

function App() {
  const testimonialComponents = Data.map((testimonial, index) => {
    return (
      <Testimonial
        key={index}
        name={testimonial.name}
        photoName={testimonial.photoName}
        country={testimonial.country}
        position={testimonial.position}
        company={testimonial.company}
        testimonial={testimonial.testimonial}
      />
    );
  });

  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <H1Element contentText="Here is what our alumni say about freeCodeCamp:" />
          {testimonialComponents}
        </div>
      </div>
    </>
  );
}

export default App;
