import BackButton from "./BackButton";
import MenuButton from "./Menu/MenuButton";
// eslint-disable-next-line react/prop-types
const HeaderButtons = ({ isCartPage , isExpanded , toggleMenu , navigate , setIsExpanded }) => {
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

export default HeaderButtons;
