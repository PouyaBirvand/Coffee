import { register } from "swiper/element/bundle";
register();

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useProducts } from "../../../hooks/useProduct";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppContext } from "../../../context/AppContext";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { LoadingSpinner } from "../../../ui/Loader/LoadingSpinner";
import { CATEGORIES } from "../../../utils/categoryMapping";
import { PersonalFoodsList } from "./PersonalFoodList";

function Products({ categoryId, isExpanded, searchResults }) {
  const { data: items = [], isLoading } = useProducts(categoryId);
  const activeIndexRef = useRef(0);
  const { setCurrentItem, currentItem, selectionSource, setSelectionSource } =
    useAppContext();
  const swiperRef = useRef(null);

  const displayItems = useMemo(
    () => searchResults || items,
    [searchResults, items]
  );

  const memoizedItems = useMemo(() => {
    if (!isExpanded && selectionSource === "search") {
      return displayItems.slice(0, 10);
    }
    if (isExpanded && currentItem && selectionSource === "search") {
      return [currentItem];
    }
    if (isExpanded) {
      return [items[activeIndexRef.current]];
    }
    return displayItems.slice(0, 10);
  }, [isExpanded, items, currentItem, displayItems, selectionSource]);

  const handleSlideChange = useCallback(
    (swiper) => {
      const newIndex = swiper.activeIndex;
      activeIndexRef.current = newIndex;
      if (items[newIndex]) {
        const newItem = items[newIndex];
        setCurrentItem(newItem);
        setSelectionSource("products");
      }
    },
    [items, setCurrentItem, setSelectionSource]
  );

  const handleSwiperInit = useCallback(
    (swiper) => {
      swiperRef.current = swiper;
      if (items[0]) {
        setCurrentItem(items[0]);
        setSelectionSource("products");
      }
    },
    [items, setCurrentItem, setSelectionSource]
  );

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0);
      activeIndexRef.current = 0;
    }
  }, [categoryId]);

  const renderSlide = useCallback(
    (item) => (
      <SwiperSlide
        key={item.id}
        virtualIndex={item.id}
        className={`pt-12 sm:pt-16 z-0 mb-[3rem] ${
          isExpanded ? "pt-[3rem] sm:pt-[9rem]" : ""
        }`}
      >
        <div
          className={`relative ${
            !isExpanded
              ? "shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3"
              : ""
          } mx-auto`}
        >
          <ProductImage item={item} isExpanded={isExpanded} />
          <ProductInfo item={item} isExpanded={isExpanded} />
        </div>
      </SwiperSlide>
    ),
    [isExpanded]
  );

  if (isLoading) return <LoadingSpinner />;

  if (isExpanded) {
    return (
      <div className="mt-[1.5rem] w-[95%] md:w-[80%] lg:w-[80%] mx-auto">
        {currentItem
          ? renderSlide(currentItem)
          : items[activeIndexRef.current] &&
            renderSlide(items[activeIndexRef.current])}
      </div>
    );
  }

  if (categoryId === CATEGORIES.PERSONALFOODS && !isExpanded) {
    return <PersonalFoodsList items={items} />;
  }

  return (
    <Swiper
      onSwiper={handleSwiperInit}
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.26}
      speed={400}
      resistance={false}
      watchSlidesProgress={true}
      preventInteractionOnTransition={false}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }}
      className="w-[95%] md:w-[100%] lg:w-[100%] transition-all duration-300"
      spaceBetween={40}
      initialSlide={0}
      key={categoryId}
      onSlideChange={handleSlideChange}
      touchRatio={1}
      threshold={5}
      breakpoints={{
        320: {
          slidesPerView: 1.26,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 1.7,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 80,
        },
      }}
    >
      {memoizedItems.map(renderSlide)}
    </Swiper>
  );
}

export default Products;
