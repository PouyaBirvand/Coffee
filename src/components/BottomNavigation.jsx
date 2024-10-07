function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-cocoa z-[999]">
      <div className="flex justify-around items-center h-14 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="bg-dark-cocoa p-2 rounded-full shadow-lg border border-white">
            <div className="bg-dark-cocoa w-[5.5rem] h-[3rem] -z-20 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
            <svg width="20" height="0" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15H0C11.4286 13.3448 16.5 4.5 20 0V15Z" fill="#412F26"/>
</svg>

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
