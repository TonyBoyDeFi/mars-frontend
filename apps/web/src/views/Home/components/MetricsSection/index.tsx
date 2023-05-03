import { useTranslation } from "@pancakeswap/localization"
import { Flex, Heading } from "@pancakeswap/uikit"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from "swiper";

const Stats = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <img src="https://i.ibb.co/jyK3BH1/logo.png" alt="logo"/>
      <Heading textAlign="center" scale="xl">
        {t('Millions of users globally.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Trusted among the biggest projects.')}
      </Heading>
      <Heading textAlign="center" color="textSubtle" mb="32px">
        {t('Marswap will become one of the biggest DEX + AMM + NFT platforms in the DeFi space.')}
      </Heading>

      <Heading textAlign="center" color="textSubtle" bold mb="32px">
        {t('Join the support of Marswap and thrive with us to grow on global scale!')}
      </Heading>

      <Swiper 
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 5,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={true}
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/jZnc2L8/Silver.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/jZnc2L8/Silver.png" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://i.ibb.co/jZnc2L8/Silver.png" />
        </SwiperSlide>
      </Swiper>


</Flex>

)}

export default Stats
