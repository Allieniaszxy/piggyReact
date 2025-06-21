import Nav from "./components/navbar/Nav";
import Main from "./components/main/Main";
import Security from "./components/security/Security";
import Card from "./components/card/Card";
import Investment from "./components/investment/Investment";
import Video from "./components/video/Video";
import Customer from "./components/customers/Customer";

const App = () => {
  return (
    <div>
      <Nav />
      <Main />
      <Security />
      <Card />
      <Investment />
      <Video />
      <Customer />
    </div>
  );
};
export default App;
