import React from 'react'
import { Carousel as CarouselAntd } from 'antd';
const contentStyle = {
   height: '550px',
   width: '100%',
   objectFit: 'cover'
};

export default function Carousel() {
   const onChange = (currentSlide) => {
      console.log(currentSlide);
   };

   return (
      <CarouselAntd afterChange={onChange} autoplay>
         <div>
            <img style={contentStyle} src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/11072804/thiet-ke-poster-phim-009.jpg" alt="" />
         </div>
         <div>
            <img style={contentStyle} src="https://upload.wikimedia.org/wikipedia/vi/8/83/Poster_phim_Ph%C3%B9_th%E1%BB%A7y_t%E1%BA%ADp_s%E1%BB%B1.jpg" alt="" />
         </div>
         <div>
            <img style={contentStyle} src="https://www.elleman.vn/wp-content/uploads/2018/04/25/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg" alt="" />
         </div>
      </CarouselAntd>
   );
}
