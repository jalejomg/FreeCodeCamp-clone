import "./H1Element.css";

interface H1Properties {
  contentText: string;
}

function H1Element(props: H1Properties) {
  return <h1>{props.contentText}</h1>;
}

export default H1Element;
