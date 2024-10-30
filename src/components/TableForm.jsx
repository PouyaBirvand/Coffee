function TableForm() {
  return (
    <form
      action=""
      className="w-[60%] scale-[1.1] h-[369px] p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-body z-[2999]  rounded-xl border solid border-deep-mahogany"
    >
      <div>
      <p className="text-base text-center font-medium text-deep-mahogany">
        Frisky coffee
      </p>
      <h2 className="text-3xl text-dark-cocoa text-center mt-4">
        First, enter your table number
      </h2>
      <input
        className="bg-[rgb(131,90,54)] bg-opacity-50 mt-6 placeholder-dark-cocoa rounded-lg outline-none py-2 px-6 w-full"
        type="text"
        placeholder="for example : 12 ..."
      />
      <h3 className="text-base mt-7 text-center text-deep-mahogany font-normal">
        Your order will be delivered to this table
      </h3>
      <div className="flex gap-2 mt-5">
        <button
          type="submit"
          className="outline-none bg-[rgb(131,90,54)] bg-opacity-50  w-[50%] rounded-lg h-10 text-white font-semibold"
        >
          Submit
        </button>
        <button type="button" className="w-[50%] bg-dark-cocoa rounded-lg h-10 text-white font-semibold">
          Cancel
        </button>
      </div>
      </div>
    </form>
  );
}

export default TableForm;
