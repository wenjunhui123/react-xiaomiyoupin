import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Banner.less';

class Banner extends React.Component {
	render() {
		return <div className='swiper-container'>
			<div className='swiper-wrapper'>
				<div className="swiper-slide">
					<img src='https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&w=1080&h=450&crop=a_0_0_1080_480&t=webp' alt='' />
				</div>
				<div className="swiper-slide">
					<img src='https://shop.io.mi-img.com/app/shop/img?id=shop_7f79014b3984f9a2ca0ccd989fee960a.jpeg&amp;w=1080&amp;h=450&amp;crop=a_0_0_1080_480&amp;t=webp' alt='' />
				</div>
				<div className="swiper-slide">
					<img src='https://shop.io.mi-img.com/app/shop/img?id=shop_9334c3fd5811978f84fe7035ae54b00d.jpeg&amp;w=1080&amp;h=450&amp;crop=a_0_0_1080_480&amp;t=webp' alt='' />
				</div>
			</div>
			<div className="swiper-pagination"></div>
		</div>;
    }
     /* 第一次加载完成后，基于DOM操作完成SWIPER运动 */
	componentDidMount() {
		new Swiper('.swiper-container', {
			loop: true,
			pagination: {
				el: '.swiper-pagination',
			},
			autoplay: {
				delay: 1000,
				disableOnInteraction: false
			}
		});
	}

}

export default Banner;
