export function LoadingSpinner() {
    return (
      <div className=" w-[75%] md:w-[80%] lg:w-[80%] mx-auto min-h-[360px] bg-warm-wood bg-opacity-20 rounded-2xl flex flex-col items-center justify-center gap-4 relative top-12">
        <div className="relative w-24 h-24">
          <div className="absolute w-full h-full border-4 border-t-[#412F26] border-r-[#806044] border-b-[#835A36] border-l-[#5D2510] rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#5D2510] via-[#806044] to-[#835A36] rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#EDE1D2] rounded-full"></div>
        </div>
        <p className="text-lg font-medium text-[#412F26] animate-pulse">
          Brewing your experience...
        </p>
      </div>
    )
  }
  