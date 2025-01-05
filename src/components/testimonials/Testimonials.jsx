import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Sharjeel UR Rehman",
			subtitle: "Frontend Engineer @ Maksof ",
			comment: "Greg worked at Entrostat as a full-stack developer. He was excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something - Greg was our goto man!",
		},
		{
			id: 2,
			image: Image3,
			title: "Zain Imam",
			subtitle: "SQA Engineer @ Avialdo ",
			comment: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
		},
		{
			id: 3,
			image: Image4,
			title: "Faizan Ahmed",
			subtitle: "Backend Engineer @ Avialdo ",
			comment: "I had the privilege of working with Sameer, a talented Junior Frontend Engineer who combines technical expertise with a keen eye for design. He consistently delivers high-quality, user-friendly web applications, demonstrates proactive learning, and fosters a positive team environment. I highly recommend Sameer for any team seeking a skilled and motivated frontend developer.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials