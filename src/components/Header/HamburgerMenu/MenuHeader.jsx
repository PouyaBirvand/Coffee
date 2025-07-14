const MenuHeader = ({ closeMenu }) => (
  <div className="flex items-center space-x-1 border-b border-opacity-30 border-dark-cocoa pb-3">
    <img
      className="w-[4rem] object-cover"
      src="./icon.jpg"
      alt="لوگو کافه کهن"
    />
    <h2 className="text-[1.3rem] text-deep-mahogany font-bold text-center relative top-1 tracking-wide">
      کافه کهن
    </h2>
    <button
      onClick={closeMenu}
      className="text-dark-cocoa absolute left-4"
      aria-label="بستن منو"
    >
      <lord-icon
        src="https://cdn.lordicon.com/nqtddedc.json"
        trigger="loop"
        delay="1000"
        colors="primary:#412f26"
        style={{ width: '35px', height: '35px' }}
      />
    </button>
  </div>
);

export default MenuHeader;
