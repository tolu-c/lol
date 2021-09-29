import "./App.css";

import Example from "./components/Disclosure";
import Button from "./components/Button";
import Product from "./components/Product";
import Grid from "./components/Grid";
import Form from "./components/Form";

import pancake from './assets/pancake.jpg'



function App() {
  return (
    <div className="container mx-auto">
      <Grid />
      <Form />
      <Flex />
      <Example />
      <Button className="mt-6" />
      <Product />
      <p
        className="w-4/12 p-6 mx-auto mb-5 font-extrabold text-xl bg-local bg-cover"
        style={{backgroundImage: `url(${pancake})`}}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
        blanditiis et repudiandae atque ipsam explicabo cum recusandae commodi
        esse maxime voluptates sequi ipsum, accusamus assumenda cumque
        laudantium, praesentium aspernatur enim?
      </p>
    </div>
  );
}

function Flex() {
  return (
    <div className="mt-4 flex justify-evenly container w-24 min-w-3/4 mx-auto p-3 bg-gray-200">
      <div className="bg-red-500 rounded-md border-none w-36 h-auto p-4 text-center font-sans font-normal text-xl subpixel-antialiased stacked-fractions">
        3/4
      </div>
      <div className="bg-red-500 rounded-md border-none w-36 h-auto p-4 text-center font-sans font-thin text-xl antialiased tracking-wider">
        a boy ate an apple
      </div>
      <div className="bg-red-500 rounded-md border-none w-36 h-auto p-4 text-center font-sans font-semibold text-xl antialiased not-italic oldstyle-nums slashed-zero">
        0123456789
      </div>
    </div>
  );
}

export default App;
