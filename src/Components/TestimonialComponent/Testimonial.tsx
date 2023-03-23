import { Testimonial } from "../../data/Testimonials";
import "./Testimonial.css";

function App(props: Testimonial) {
  const imgPath = `../../../images/testimonial-${props.photoName}.png`;
  return (
    <>
      <div className="testimonial-container">
        <img
          className="testimonial-img"
          src={imgPath}
          alt={`${props.name}'s picture`}
        />
        <div className="testimonial-text-container">
          <p className="testimonial-name">
            <strong>{props.name}</strong> in {props.country}
          </p>
          <p className="testimonial-position">
            {props.position} at <strong>{props.company}</strong>
          </p>
          <p className="testimonial-text">{props.testimonial}</p>
        </div>
      </div>
    </>
  );
}

export default App;
