import './CoffeeLoader.css'; // برای انیمیشن‌های سفارشی

const CoffeeLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-100">
      <div className="relative w-24 h-24">
        <div className="absolute bottom-0 w-24 h-20 bg-white rounded-b-full shadow-[0_0_0_6px_#6f4e37]">
          <div className="absolute bottom-0 w-full h-0 bg-[#6f4e37] rounded-b-full animate-fill"></div>
        </div>
        <div className="absolute -top-5 w-full">
          <span className="absolute w-2 h-5 bg-white rounded-full opacity-0 left-5 animate-steam"></span>
          <span className="absolute w-2 h-5 bg-white rounded-full opacity-0 left-12 animate-steam animation-delay-300"></span>
          <span className="absolute w-2 h-5 bg-white rounded-full opacity-0 right-5 animate-steam animation-delay-600"></span>
        </div>
      </div>
      <p className="mt-5 text-lg text-[#6f4e37] font-sans">Brewing your experience...</p>
    </div>
  );
};

export default CoffeeLoader;
