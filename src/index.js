import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const style = { backgroundColor: "orangered", fontSize: "40px" };

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Brand />
      <NavLinks />
    </div>
  );
}

function Brand() {
  return (
    <div className="brand__container">
      <img className="brand__logo" src="logo192.png" alt="logo" />
      <span>React</span>
    </div>
  );
}

function NavLinks() {
  return (
    <ul className="nav__container">
      <li className="nav__item">Home</li>
      <li className="nav__item">Products</li>
      <li className="nav__item">About Us</li>
    </ul>
  );
}

function Main() {
  return (
    <div>
      Est in exercitation proident laboris elit nulla magna ipsum. Velit
      deserunt esse esse sit fugiat ex ullamco amet et officia. Esse sint
      consequat pariatur aliqua non aliquip proident amet. Mollit eu minim eu
      consectetur aliquip consectetur est consectetur aute commodo minim. Velit
      voluptate pariatur laboris esse eu fugiat labore ex consequat deserunt
      deserunt do. Fugiat occaecat tempor eiusmod duis cillum aliqua. Amet do
      nisi Lorem eiusmod do. Tempor excepteur dolor dolore nisi ut deserunt anim
      laborum amet. Aliqua non laboris laboris laboris cillum exercitation.
      Fugiat occaecat sunt dolor minim et duis non qui fugiat tempor irure
      magna. Nostrud fugiat consequat aliquip consequat et amet magna enim
      ullamco enim reprehenderit. Irure veniam consequat consectetur adipisicing
      labore officia commodo. Occaecat cillum labore do amet amet ipsum nostrud.
      Pariatur nulla in reprehenderit est cillum nulla pariatur do fugiat
      veniam. Minim anim incididunt ad irure nulla ut et laborum fugiat
      voluptate tempor aliqua duis. Fugiat aliquip mollit nulla non velit
      consequat eiusmod consectetur occaecat. Dolore in esse cillum mollit. Esse
      laborum et aliquip sit sunt ullamco nostrud culpa sit. Voluptate nisi
      irure eiusmod enim aliqua aute eu. Aliquip exercitation proident officia
      in exercitation. In qui eiusmod pariatur culpa. Cupidatat aliquip magna
      nostrud ipsum veniam veniam consequat. Sit sint id exercitation irure
      eiusmod laborum velit ut voluptate tempor. Elit et aliquip Lorem
      reprehenderit. Ex deserunt ex aliquip exercitation mollit minim amet duis
      aliquip ad Lorem. Deserunt veniam enim aliquip nisi in excepteur
      consectetur laborum culpa nisi occaecat. Sit elit dolor eiusmod dolor
      velit proident voluptate non fugiat. Laborum aute et commodo ullamco ad
      veniam non laboris duis dolore nostrud aliquip velit pariatur. Labore
      dolor ipsum magna aliquip anim amet occaecat consequat nostrud esse.
      Laborum consequat proident eu adipisicing adipisicing officia aute
      adipisicing occaecat velit. Anim sint aute aliquip sit qui tempor fugiat
      dolor commodo magna duis aliqua adipisicing commodo. Commodo mollit minim
      Lorem sunt labore commodo nostrud adipisicing est nisi. Pariatur occaecat
      ex consequat fugiat mollit id cillum dolore. Ipsum labore nulla deserunt
      sit enim eu pariatur occaecat tempor veniam laboris. Exercitation in ut id
      id minim pariatur pariatur id. Nostrud dolor culpa quis et velit tempor
      sunt sunt et et ea ad mollit. Do elit nisi magna duis aliquip elit et
      nostrud proident dolore aliquip quis laborum. Voluptate cillum adipisicing
      quis exercitation elit dolor nostrud adipisicing excepteur dolore
      cupidatat proident culpa. Sint elit elit Lorem dolor nisi commodo
      adipisicing non cillum reprehenderit. Duis id et pariatur aliquip quis
      laboris ad culpa quis do. Enim irure elit sint tempor amet laborum sunt
      proident anim laborum sit aliquip ea. Nulla eiusmod aliqua labore fugiat
      enim ut officia labore minim deserunt anim minim veniam quis. Adipisicing
      ut proident ad irure ex veniam magna eu nulla consequat aliquip ad.
      Adipisicing veniam aliquip culpa duis consectetur minim commodo quis.
      Consectetur laboris adipisicing cupidatat ipsum. Magna ullamco cupidatat
      consectetur aliqua laboris officia sunt officia. Esse non consequat qui
      dolor veniam elit commodo. Magna pariatur consequat proident nulla
      pariatur cupidatat. Deserunt fugiat mollit ut minim ex culpa cillum id
      aliquip dolor laboris excepteur do exercitation. Esse nulla anim labore
      nulla sunt aliquip sit veniam. Reprehenderit est do ea Lorem minim nostrud
      pariatur.
    </div>
  );
}

function Footer() {
  return <div>Footer</div>;
}

// function App() {
//   return (
//     <div style={style}>
//       <h1 className="message">Welcome to React!</h1>
//       <h2>This is great. </h2>
//       <span>Time: {new Date().toDateString()}</span>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
