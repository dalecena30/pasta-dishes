import "./App.css";

const pastaData = [
  {
    name: "Bolognese",
    description:
      "My robust ragu combines ground beef, sausage and chicken. Serve it over any type of pasta, or baked or fried polenta.",
    price: 5,
    photoName: "pasta/bolognese.jpg",
    soldOut: false,
  },
  {
    name: "Cheese Burger Pasta",
    description:
      "When the weather’s too chilly to grill burgers, I whip up a big pot of this cheesy pasta.",
    price: 7,
    photoName: "pasta/cheeseburgerpasta.jpg",
    soldOut: false,
  },
  {
    name: "Grilled Chicken",
    description:
      "A few years back, I was looking for a simple yet delicious salad for a picnic",
    price: 3,
    photoName: "pasta/grilledchicken.jpg",
    soldOut: false,
  },
  {
    name: "Ham Ravioli",
    description:
      "Very easy recipe and something a little different to change up ravioli",
    price: 12,
    photoName: "pasta/hamravioli.jpg",
    soldOut: false,
  },
  {
    name: "Macaroni",
    description:
      "When fresh tomatoes and basil are abundant in the summer, I like to make this wonderful Caprese macaroni salad.",
    price: 7,
    photoName: "pasta/macaroni.jpg",
    soldOut: true,
  },
  {
    name: "Tuscan Chicken",
    description:
      "If you’re looking for a quick and easy dinner, this Tuscan chicken pasta recipe is just the ticket.",
    price: 11,
    photoName: "pasta/tuscanchicken.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="header">
      <h1>Pasta Perfetto</h1>
    </div>
  );
}

function Footer() {
  const time = new Date().getHours;
  console.log(time);

  if (time >= 12 && time < 22) {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "red" }}>
        We are OPEN. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  } else {
    return (
      <footer className="footer" style={{ textAlign: "center", color: "red" }}>
        We are CLOSED. We're open from 12:00 to 22:00. Come visit us or order
        online.
      </footer>
    );
  }
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        We've gathered up our best pasta recipes all in one place. From cheesy
        and hearty to fresh and seasonal, these dinners showcase just how
        versatile noodles can be.
      </p>
      <ul className="pasta">
        {pastaData.map((pasta) => (
          <Pasta pastaObj={pasta} />
        ))}
      </ul>
    </div>
  );
}

function Pasta(props) {
  return (
    <li className="pastas">
      <img src={props.pastaObj.photoName} alt={props.pastaObj.name}></img>
      <div>
        <h3>{props.pastaObj.name}</h3>
        <p>{props.pastaObj.ingredients}</p>
        <span>{props.pastaObj.price}</span>
      </div>
    </li>
  );
}

function Button() {
  return <button className="btn">Order</button>;
}
