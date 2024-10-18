import { useAppContext } from "../context/AppContext";

function BottomNavigation() {
    const { isExpanded, toggleExpanded, addToCart, currentItem } = useAppContext();

    const handleAddToCart = () => {
      if (currentItem) {
        addToCart(currentItem);
        toggleExpanded();
      }
    };

  return (
    <>
      {isExpanded && (
        <div className="fixed bottom-[3.2rem] left-1/2 transform -translate-x-1/2 w-[4.8rem] h-[2.2rem] bg-body rounded-t-full z-[1999]"></div>
      )}
      <nav className="fixed bottom-0 left-0 right-0 bg-dark-cocoa z-[2000]">
        <div className="flex justify-around items-center h-[3.2rem] relative">
          <div className="relative w-[100px] h-[52px] bg-dark-cocoa rounded-t-[2.6rem] bottom-[0.7rem] -z-50"></div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <div className="bg-dark-cocoa p-2 rounded-full shadow-lg border border-white">
              <div className="bg-dark-cocoa w-[4.5rem] h-[3rem] -z-20 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-full"></div>
              {isExpanded ? (
                <div 
                  className="w-10 h-10 flex items-center justify-center cursor-pointer relative z-10 text-white text-3xl font-bold"
                  onClick={handleAddToCart}
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z" fill="white"></path> </g></svg>
                </div>
              ) : (
                <img
                  src="/assets/images/ion_restaurant-outline.png"
                  alt="Restaurant icon"
                  className="w-10 h-10 cursor-pointer relative z-10"
                  onClick={toggleExpanded}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default BottomNavigation;
