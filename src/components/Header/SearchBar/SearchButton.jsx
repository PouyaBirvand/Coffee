// eslint-disable-next-line react/prop-types
const SearchButton = ({ toggleSearch }) => (
  <button
    aria-label="Search"
    className="focus:outline-none"
    onClick={toggleSearch}
  >
    <lord-icon
      src="https://cdn.lordicon.com/kkvxgpti.json"
      trigger="loop"
      delay="0"
      colors="primary:#412f26"
      style={{ width: "35px", height: "35px" }}
    />
  </button>
);

export default SearchButton;