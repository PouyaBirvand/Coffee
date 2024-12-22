import BackButton from "./BackButton";
import MenuButton from "./MenuButton";
const NavigationButtons = ({ isCartPage , isExpanded , toggleMenu , navigate , setIsExpanded }) => {
  return isCartPage || isExpanded ? (
    <BackButton
      isCartPage={isCartPage}
      navigate={navigate}
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
    />
  ) : (
    <MenuButton toggleMenu={toggleMenu} />
  );
};

export default NavigationButtons;
