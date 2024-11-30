import { register } from 'swiper/element/bundle';
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import PropTypes from "prop-types";
import { useProducts } from "../../../hooks/useProduct";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { LoadingSpinner } from "../../../ui/Loader/LoadingSpinner";
import { CATEGORIES } from '../../../utils/categoryMapping';
import { PersonalFoodsList } from './PersonalFoodList';

function Products({ categoryId, isExpanded, searchResults }) {
  const { data: items = [], isLoading } = useProducts(categoryId);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setCurrentItem, currentItem, selectionSource, setSelectionSource } = useAppContext();
  const displayItems = searchResults || items;
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0, 0);
    }
    setActiveIndex(0);
  }, [categoryId, swiperInstance]);

  useEffect(() => {
    if (selectionSource === 'search') {
      setActiveIndex(0);
    }
  }, [selectionSource]);
  
  useEffect(() => {
    setActiveIndex(0);
  }, [categoryId, selectionSource]);
  
  useEffect(() => {
    if (!isExpanded && selectionSource === 'search') {
      setSelectionSource('products');
    }
  }, [isExpanded, selectionSource, setSelectionSource]);
  
  useEffect(() => {
    if (items.length > 0 && selectionSource === 'products') {
      const newItem = JSON.parse(JSON.stringify(items[activeIndex]));
      setCurrentItem(newItem);
    }
  }, [activeIndex, items, selectionSource, setCurrentItem]);

  const memoizedItems = useMemo(() => {
    if (!isExpanded && selectionSource === 'search') {
      return displayItems.slice(0, 10);
    }

    if (isExpanded && currentItem && selectionSource === 'search') {
      return [currentItem];
    }

    if (isExpanded) {
      return [items[activeIndex]];
    }

    return displayItems.slice(0, 10);
  }, [isExpanded, items, activeIndex, currentItem, displayItems, selectionSource]);

  const renderSlide = useCallback(
    (item) => (
      <SwiperSlide
        key={item.id}
        className={`pt-12 sm:pt-16 z-0 mb-[3rem] ${isExpanded ? "pt-[3rem] sm:pt-[9rem]" : ""}`}
      >
        <div className={`relative ${!isExpanded ? "shadow-md bg-[#835a36] bg-opacity-50 rounded-2xl p-3" : ""} mx-auto`}>
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
        {currentItem ? renderSlide(currentItem) : items[activeIndex] && renderSlide(items[activeIndex])}
      </div>
    );
  }

  if (categoryId === CATEGORIES.PERSONALFOODS && !isExpanded) {
    return <PersonalFoodsList items={items} />;
  }



  return (
    <Swiper
      // Add onSwiper prop
      onSwiper={setSwiperInstance}
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
      initialSlide={0}
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
        setSwiperInstance(swiper);
        if (items[0]) {
          const initialItem = JSON.parse(JSON.stringify(items[0]));
          setCurrentItem(initialItem);
          setSelectedItemId(items[0].id);
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
  searchResults: PropTypes.array
};

export default Products;
