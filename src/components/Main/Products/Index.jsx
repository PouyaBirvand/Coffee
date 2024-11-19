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
import { useProducts } from "../../../hooks/useProduct"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useAppContext } from "../../../context/AppContext"
import { ProductImage } from "./ProductImage"
import { ProductInfo } from "./ProductInfo"
import { LoadingSpinner } from "../../../ui/Loader/LoadingSpinner"

// eslint-disable-next-line react/prop-types
function Products({ categoryId, isExpanded, searchResults }) {

  const { data: items = [], isLoading } = useProducts(categoryId);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentItem, currentItem , selectionSource , setSelectionSource } = useAppContext();
  const displayItems = searchResults || items;

  const [selectedItemId, setSelectedItemId] = useState(null);




  useEffect(() => {
    if (selectionSource === 'search') {
      setActiveIndex(0);
    }
  }, [selectionSource]);
  

  useEffect(() => {
    setActiveIndex(0);
  }, [categoryId, selectionSource]);
  
  useEffect(() => {
    if (items.length > 0 && selectionSource === 'products') {
      const newItem = JSON.parse(JSON.stringify(items[activeIndex]));
      setCurrentItem(newItem);
    }
  }, [activeIndex, items, selectionSource]);
  
  useEffect(() => {
    if (items.length > 0 && selectionSource === 'products') {
      const initialItem = JSON.parse(JSON.stringify(items[0])); // Always start with first item
      setSelectedItemId(items[0].id);
      setCurrentItem(initialItem);
      setActiveIndex(0);
    }
  }, [items, selectionSource]); 
  

  
  
  

  const memoizedItems = useMemo(
    () => {
      // When returning from search view to all products
      if (!isExpanded && selectionSource === 'search') {
        setSelectionSource('products'); // Reset selection source
        return displayItems.slice(0, 10); // Show all products
      }
      
      // Current expanded view logic
      if (isExpanded && currentItem && selectionSource === 'search') {
        return [currentItem];
      }
      if (isExpanded) {
        return [items[activeIndex]];
      }
      
      return displayItems.slice(0, 10);
    },
    [isExpanded, items, activeIndex, currentItem, displayItems, selectionSource]
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
    coverflowEffect={{
      rotate: 40,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    }}
    className="w-[95%] md:w-[100%] lg:w-[100%] transition-all duration-300"
    spaceBetween={40}
    initialSlide={activeIndex}
    key={categoryId}
    onSlideChange={(swiper) => {
      const newIndex = swiper.activeIndex;
      setActiveIndex(newIndex);
      if (items[newIndex]) {
        const newItem = JSON.parse(JSON.stringify(items[newIndex]));
        setCurrentItem(newItem);
        setSelectionSource('products');
      }
    }}
    onInit={(swiper) => {
      // Ensure initial slide is properly set
      if (items[0]) {
        const initialItem = JSON.parse(JSON.stringify(items[0]));
        setCurrentItem(initialItem);
        setSelectionSource('products');
      }
    }}
>
    {memoizedItems.map(renderSlide)}
  </Swiper>


);
}

Products.propTypes = {
  categoryId: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
}

export default Products


