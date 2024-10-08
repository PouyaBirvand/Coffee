function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-cocoa z-[999]">
      <div className="flex justify-around items-center h-14 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-dark-cocoa p-2 rounded-full shadow-lg border border-white">
            <div className="bg-dark-cocoa w-[5.5rem] h-[3rem] -z-20 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
        

            <img
              src="/public/assets/images/ion_restaurant-outline.png"
              alt="Restaurant icon"
              className="w-10 h-10 cursor-pointer relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;
