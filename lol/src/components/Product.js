import React, { Component } from "react";

import Pancake from "../assets/pancake.jpg";

import { StarIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";

export default class Product extends Component {
  render() {
    return (
      <div className="container md:flex md:max-w-screen-md max-w-sm sm:mx-auto bg-gray-100 rounded-md p-6 md:p-0 md:rounded-md my-4">
        <img
          src={Pancake}
          alt="Pancake"
          className="h-28 w-32 rounded-sm mx-auto relative md:h-auto md:rounded-none md:object-cover md:w-2/6"
        />
        {/* <span className='relative bottom-0 right-0'>99.99</span> */}

        <div className="p-4 text-center md:text-left md:p-6 md:space-y-4 w-auto md:w-4/6">
          <p className="font-sans text-2xl text-black md:text-gray-800 font-bold">
            Pancake
          </p>
          <div>
            <p className="text-xs md:text-gray-800 text-black">
              <StarIcon className="w-8 h-6 inline-block fil-red" />{" "}
              <span>4.6</span> View all 156 reviews
            </p>
          </div>
          <p className="text-gray-400 text-md">
            If you're unhappy with your purchase for any reason, email us within
            90 days and we'll refund you in full, no questions asked.
          </p>
          <div className="md:flex justify-around">
            <div className="md:rounded-md md:w-4/6 md:h-12 text-white text-md font-semibold text-center md:py-2.5 border-none md:bg-blue-800 hover:border hover:bg-blue-900 hover:border-blue-500 hover:shadow-md">
              Buy Now
            </div>
            <div className="md:rounded-md md:w-2/6 md:h-12 text-blue-800 border border-blue-600 md:ml-6 bg-blue-100 group-hover:border-none py-2 hover:text-blue-200 hover:bg-blue-800">
              <HeartIcon className="md:h-8 md:w-8 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
