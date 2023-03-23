export interface Testimonial {
  name: string;
  photoName: string;
  country: string;
  position: string;
  company: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shawn Wang",
    photoName: "shawn",
    country: "Singapore",
    position: "Software Engineer",
    company: "Amazon",
    testimonial:
      '"It\'s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."',
  },
  {
    name: "Sarah Chima",
    photoName: "sarah",
    country: "Nigeria",
    position: "Software Engineer",
    company: "ChatDesk",
    testimonial:
      '"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."',
  },
  {
    name: "Emma Bostian",
    photoName: "emma",
    country: "Sweden",
    position: "Software Engineer",
    company: "Spotify",
    testimonial:
      "\"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.\"",
  },
];

export default testimonials;
