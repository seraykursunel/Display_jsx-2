import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const user = {
  name: "Namık Korona",
  location: "Las Vegas",
  foodType: "Kebap",
  age: 28,
  likes: "Araba Yarışı"
};

const pageDetails = {
  title: "React Tornado",
  desc: "React code challenge"
};

function App() {
  return (
    <div className="App">
      <h1 className="page-deets">{pageDetails.title}</h1>
      <h3 className="page-deets">{pageDetails.desc}</h3>
      <section className="user-deets">
        <p>
          <b>{user.name}</b>
        </p>
        <p>Location: {user.location}</p>
        <p>Eats: {user.foodType}</p>
        <p>Age: {user.age}</p>
        <p>Likes: {user.likes}</p>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
