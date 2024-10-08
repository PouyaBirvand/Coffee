function CoffeHeader() {
  return (
    <div className="flex justify-between items-center">
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 relative top-[0.2rem] cursor-pointer"
      >
        <path
          d="M6.16667 20.0416C7.01811 20.0416 7.70833 19.3514 7.70833 18.4999C7.70833 17.6485 7.01811 16.9583 6.16667 16.9583C5.31523 16.9583 4.625 17.6485 4.625 18.4999C4.625 19.3514 5.31523 20.0416 6.16667 20.0416Z"
          fill="#412F26"
        />
        <path
          d="M30.9259 16.9583H12.2409C11.4405 16.9583 10.7917 17.6071 10.7917 18.4074V18.5924C10.7917 19.3928 11.4405 20.0416 12.2409 20.0416H30.9259C31.7262 20.0416 32.375 19.3928 32.375 18.5924V18.4074C32.375 17.6071 31.7262 16.9583 30.9259 16.9583Z"
          fill="#412F26"
        />
        <path
          d="M30.9258 24.6667H6.07417C5.27381 24.6667 4.625 25.3156 4.625 26.1159V26.3009C4.625 27.1013 5.27381 27.7501 6.07417 27.7501H30.9258C31.7262 27.7501 32.375 27.1013 32.375 26.3009V26.1159C32.375 25.3156 31.7262 24.6667 30.9258 24.6667Z"
          fill="#412F26"
        />
        <path
          d="M30.9258 9.25H6.07417C5.27381 9.25 4.625 9.89881 4.625 10.6992V10.8842C4.625 11.6845 5.27381 12.3333 6.07417 12.3333H30.9258C31.7262 12.3333 32.375 11.6845 32.375 10.8842V10.6992C32.375 9.89881 31.7262 9.25 30.9258 9.25Z"
          fill="#412F26"
        />
      </svg>

      <div className="flex space-x-4 items-center">
        <img
          src="/public/assets/images/vector.png"
          alt="searchbar"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          src="/public/assets/images/lets-icons_basket-alt-3.png"
          alt="basket"
          className="w-9 h-9 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CoffeHeader;
