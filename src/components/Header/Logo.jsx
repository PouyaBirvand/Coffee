import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

function ProductTitle() {
  const { isExpanded } = useAppContext();
  const location = useLocation();
  const isCartPage = location.pathname === '/cart';
  return (
    <div className="relative text-center mt-2 h-[2rem]">
      <h1 className={`inline-block font-extrabold text-deep-mahogany px-4 leading-[2rem] relative text-[2.6rem] sm:w-40 lg:text-[2rem] ${isExpanded && 'lg:text-[3.2rem] -mt-2 text-[3.4rem] leading-[3.5rem] sm:mt-3 md:!text-[2.7rem]'} ${isCartPage ? '!text-[2rem] relative bottom-[2.5rem] sm:bottom-[2rem] md:!text-[1.7rem] leading-[2.5rem]' : ''}`}>
        <span className="absolute left-[-5%] top-1 space-y-[0.4rem]">
          <span className="block w-5 h-[2px] bg-deep-mahogany transform rotate-45 mb-2"></span>
          <span className="block w-5 h-[2px] bg-deep-mahogany transform rotate-[20deg]"></span>
        </span>
        
        {isExpanded ?
        <div className="flex flex-col">
             <span>Frisky</span>
             <span>Coffee</span>     
        </div>
        :
        'Frisky coffee'
        }
        <span className="absolute right-[-5%] top-1 space-y-[0.4rem]">
          <span className="block w-5 h-[2px] bg-deep-mahogany transform -rotate-45 mb-2"></span>
          <span className="block w-4 h-[2px] bg-deep-mahogany transform -rotate-[20deg]"></span>
        </span>
      </h1>
    </div>
  );
}

export default ProductTitle;
