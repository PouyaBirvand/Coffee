function ProductTitle() {
  return (
    <div className="relative text-center mt-3">
      <h1 className="inline-block   font-extrabold text-deep-mahogany px-4 relative text-[2.1rem] sm:w-40 lg:text-3xl">
        <span className="absolute left-[-5%] top-1 space-y-[0.4rem]">
          <span className="block w-5 h-[2px] bg-deep-mahogany transform rotate-45 mb-2"></span>
          <span className="block w-5 h-[2px] bg-deep-mahogany transform rotate-[20deg]"></span>
        </span>
        Frisky coffee
        <span className="absolute right-[-5%] top-1 space-y-[0.4rem]">
          <span className="block w-5 h-[2px] bg-deep-mahogany transform -rotate-45 mb-2"></span>
          <span className="block w-4 h-[2px] bg-deep-mahogany transform -rotate-[20deg]"></span>
        </span>
      </h1>
    </div>
  );
}

export default ProductTitle;
