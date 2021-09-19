import React, { Component } from "react";

import { ShoppingCartIcon } from "@heroicons/react/solid";

export default class Button extends Component {
  render() {
    return (
      <div class="inline-block mx-auto bg-blue-500 p-3 text-center rounded-md text-white hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 font-sans font-medium hover:shadow-md">
        Add To Cart <ShoppingCartIcon className="inline w-6 h-6 ml-1" />
      </div>
    );
  }
}
