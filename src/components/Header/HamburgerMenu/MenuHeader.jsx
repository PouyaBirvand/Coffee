const HamburgerCoffeeicon = <svg
xmlns="http://www.w3.org/2000/svg"
width="35"
height="35"
viewBox="0 0 256 256"
>
<path
  fill="#412f26"
  d="M80 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0m40 8a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m32 0a8 8 0 0 0 8-8V24a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8m96 56v8a40 40 0 0 1-37.51 39.91a96.6 96.6 0 0 1-27 40.09H208a8 8 0 0 1 0 16H32a8 8 0 0 1 0-16h24.54A96.3 96.3 0 0 1 24 136V88a8 8 0 0 1 8-8h176a40 40 0 0 1 40 40m-48-24H40v40a80.27 80.27 0 0 0 45.12 72h69.76A80.27 80.27 0 0 0 200 136Zm32 24a24 24 0 0 0-16-22.62V136a96 96 0 0 1-1.2 15a24 24 0 0 0 17.2-23Z"
/></svg>

// eslint-disable-next-line react/prop-types
const MenuHeader = ({ closeMenu }) => (
    <div className="flex items-center space-x-2 border-b border-opacity-30 border-dark-cocoa pb-3 mt-2">
      {HamburgerCoffeeicon}
      <h2 className="text-[1.3rem] text-deep-mahogany font-bold text-center relative top-1 tracking-wide">
        Frisky coffee
      </h2>
      <button onClick={closeMenu} className="text-dark-cocoa translate-x-[5rem]">
        <lord-icon
          src="https://cdn.lordicon.com/nqtddedc.json"
          trigger="loop"
          delay="1000"
          colors="primary:#412f26"
          style={{
            width: "35px",
            height: "35px",
            position: "",
            top: "0.2rem",
            left: "",
          }}
          />
      </button>
    </div>
  );

  export default MenuHeader