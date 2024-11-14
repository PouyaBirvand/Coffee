// eslint-disable-next-line react/prop-types
const BackButton = ({ isCartPage, navigate, isExpanded, setIsExpanded }) => (
    <button
      aria-label="Arrow"
      className="focus:outline-none z-10"
      onClick={() => isCartPage ? navigate(-1) : setIsExpanded(!isExpanded)}
    >
      <lord-icon
        src="https://cdn.lordicon.com/vduvxizq.json"
        trigger="loop"
        delay="0"
        colors="primary:#412f26"
        style={{
          width: "35px",
          height: "35px",
          transform: "rotate(180deg)",
        }}
      />
    </button>
  );
  
  export default BackButton;

