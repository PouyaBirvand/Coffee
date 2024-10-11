// eslint-disable-next-line react/prop-types
function Categories({ onCategoryChange, selectedCategory }) {
  const images = [
    { src: "/assets/images/ph_ice-cream-light.png", alt: "iceCreams" },
    { src: "/assets/images/hugeicons_drink.png", alt: "Drinks" },
    { src: "/assets/images/hugeicons_soft-drink-01.png", alt: "Soft Drinks" },
    { src: "/assets/images/ph_coffee-light.png", alt: "Coffee" },
    { src: "/assets/images/fluent_food-pizza-20-regular.png", alt: "Pizza" },
  ];

  return (
    <div className="className=mt-16 xl:mt-10 lg:mt-12 md:mt-10 sm:mt-8 xs:mt-6 mx-auto w-[75%] max-w-2xl xl:max-w-[20rem] lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-xs">
      <div className="bg-warm-wood bg-opacity-60 rounded-full flex justify-between items-center py-1 px-1 xl:px-1 lg:px-2 md:px-1 sm:px-1 xs:px-0.5">
        {images.map((image, index) => (
          <div key={index} onClick={() => onCategoryChange(image.alt)}>
            <img
              src={image.src}
              alt={image.alt}
              className={`
                w-12 h-12 xl:w-11 xl:h-11 lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8 xs:w-7 xs:h-7
                p-2.5 xl:p-2 lg:p-2 md:p-1.5 sm:p-1.5 xs:p-1
                rounded-full transition duration-300 cursor-pointer
                ${
                  selectedCategory === image.alt
                    ? "bg-deep-mahogany"
                    : "bg-soft-cream bg-opacity-50 hover:bg-deep-mahogany"
                }
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
