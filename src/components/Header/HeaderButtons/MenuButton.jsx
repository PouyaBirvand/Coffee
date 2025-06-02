const MenuButton = ({ toggleMenu }) => (
  <button
    aria-label="Menu"
    className="focus:outline-none z-10"
    onClick={toggleMenu}
  >
    <lord-icon
      src="https://cdn.lordicon.com/eouimtlu.json"
      trigger="loop"
      delay="1000"
      colors="primary:#412f26"
      style={{ width: '35px', height: '35px' }}
    />
  </button>
);

export default MenuButton;
