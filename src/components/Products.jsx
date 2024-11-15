import { register } from 'swiper/element/bundle'
register(); // Register Swiper custom elements

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import "swiper/css"
import "swiper/css/effect-coverflow"
import PropTypes from "prop-types"
import { useProducts } from "../hooks/usePrdouct"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { ProductImage } from "./ProductImage"
import { ProductInfo } from "./ProductInfo"
import { LoadingSpinner } from "./LoadingSpinner"

// eslint-disable-next-line react/prop-types
function Products({ categoryId, isExpanded, searchResults }) {

  const { data: items = [], isLoading } = useProducts(categoryId);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentItem, currentItem } = useAppContext();
  const displayItems = searchResults || items;


  useEffect(() => {
    setActiveIndex(0)
  }, [categoryId])

  useEffect(() => {
    if (items.length > 0 && !currentItem) {
      setCurrentItem(items[activeIndex]);
    }
  }, [activeIndex, items, setCurrentItem, currentItem]);
  

  const memoizedItems = useMemo(
    () => {
      if (isExpanded && currentItem) {
        return [currentItem];
      }
      return isExpanded ? [items[activeIndex]] : items.slice(0, 10);
    },
    [isExpanded, items, activeIndex, currentItem]
  );

  const renderSlide = useCallback(
    (item) => (
      <SwiperSlide
        key={item.id}
        className={`pt-12 sm:pt-16 z-0 ${isExpanded ? "pt-[3rem] sm:pt-[9rem]" : ""}`}
      >
        <div className={`relative ${!isExpanded ? "shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3" : ""} mx-auto`}>
          <ProductImage item={item} isExpanded={isExpanded} />
          <ProductInfo item={item} isExpanded={isExpanded} />
        </div>
      </SwiperSlide>
    ),
    [isExpanded]
  )

  if (isLoading) return <LoadingSpinner />

  if (isExpanded) {
    return (
      <div className="mt-[1.5rem] w-[95%] md:w-[80%] lg:w-[80%] mx-auto">
        {currentItem ? renderSlide(currentItem) : items[activeIndex] && renderSlide(items[activeIndex])}
      </div>
    );
  }
  

  return (
    <Swiper
    modules={[EffectCoverflow]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1.26}
    key={categoryId}
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
    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
  >
    {memoizedItems.map(renderSlide)}
  </Swiper>
  )
}

Products.propTypes = {
  categoryId: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
}

export default Products
