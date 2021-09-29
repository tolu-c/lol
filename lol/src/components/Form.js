import React from "react";

export default function Form() {
  return <FormContainer />;
}

function SubmitButton() {
  return (
    <div className="flex justify-end px-6">
      <button className="bg-blue-600 lg:w-64 py-4 text-center font-bold text-xl text-gray-200 rounded-full hover:bg-blue-800 hover:shadow-lg sm:w-full">
        Send Message
      </button>
    </div>
  );
}
function MessageArea() {
  return (
    <div className="mb-5 px-6">
      <textarea
        className="w-full border border-gray-300 rounded-md h-32 placeholder-gray-600 focus:placeholder-black font-semibold items-center focus:outline-none px-4 py-2"
        name="message"
        placeholder="Message"
      ></textarea>
    </div>
  );
}

function InputFields() {
  return (
    <div className="flex lg:justify-between mb-3 flex-nowrap px-6">
      <input
        className="border border-gray-300 rounded-md px-4 py-1 lg:w-5/12 h-12 w-full placeholder-gray-600 focus:placeholder-black font-semibold items-center focus:outline-none mr-auto"
        type="text"
        name="First Name"
        placeholder="First Name"
      />
      <input
        className="border border-gray-300 rounded-md px-4 py-1 lg:w-5/12 h-12 w-full placeholder-gray-600 focus:placeholder-black font-semibold items-center focus:outline-none"
        type="text"
        name="Last Name"
        placeholder="Last Name"
      />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="container w-32 min-w-3/4 mx-auto bg-gray-300 rounded-md my-8">
      <form className="p-4">
        <InputFields />
        <MessageArea />
        <SubmitButton />
      </form>
    </div>
  );
}
