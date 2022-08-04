import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaStarHalfAlt, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const Cards = () => {
	const arr = [
		{
			title: 'Mysore Road,',
			src: '	http://truevalue.kalyanimotors.com/static/media/TVN.9db9a614.jpg',
			location: 'bangalore',
			phone: '080-46837065',
			address:
				'#3, Sriranga Nagar, Ring Road, Pantharapalya, Nayandahalli Junction, Bengaluru, Karnataka 560039.',
		},
		{
			title: 'Uttarahalli,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TVUttrahalli.399078f0.png',
			location: 'Bangalore',
			phone: '080-47486075',
			address:
				'#153 , CHANNASANDRA VILLAGE, Uttarahalli Main Rd, Bengaluru, Karnataka 560098',
		},
		{
			title: 'Brookefield,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TV%20Brookefield.b24928e7.jpg',
			location: 'Bangalore',
			phone: '080-47486073',
			address:
				'SY -123/1Kalyani Platina Tech Park, Kundalahalli Village Post, Kundalahalli, Bengaluru, Karnataka 560037.',
		},
		{
			title: 'KR Puram,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TV%20KRpuram.cd95c869.jpg',
			location: 'Bengaluru',
			phone: '080-47486074',
			address:
				'SY 58/1A,Avalahalli, Old Madras Road,Virgonagar Post, Bengaluru, Karnataka 560049.',
		},
		{
			title: 'Bannerghatta Road,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TV%20Bannerughatta%20Road.c85f1139.jpg',
			location: 'Bengaluru',
			phone: '080-46837065',
			address:
				'No.250/1, Bilekahalli, Bannerghatta Main Road, Bengaluru, Karnataka 560076.',
		},
		{
			title: 'Magadi Road,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TVN.9db9a614.jpg',
			location: 'Bengaluru',
			phone: '080-46837065',
			address:
				'Kalyani Motors, #29/4, Herohalli, Magadi main Road, Bengaluru, Karnataka - 560091.',
		},
		{
			title: 'Karmanghat,',
			src: 'http://truevalue.kalyanimotors.com/static/media/TV%20Karmanghat.7c171ff9.png',
			location: 'Hyderabad',
			phone: '040-71326842',
			address:
				'No:- 8-4-15, Survey No 239 & 240, Karmanghat Village, Saroor Nagar, Telangana 500079.',
		},
	];
	return (
		<div>
			<div className="cardcontainer">
				{arr.map((v) => {
					return (
						<div className="container">
							<div className="card">
								<div className="image">
									<img src={v.src} alt="" className="img" />
								</div>
								<div className="content">
									<div className="title">
										<h2>{v.title}</h2>
										<span>{v.location}</span>
									</div>
									<div className="contact">
										<span>
											<FaPhoneAlt />
										</span>
										080-46837065
									</div>
									<div className="stars">
										<span>
											<FaStar />
										</span>
										<span>
											<FaStar />
										</span>
										<span>
											<FaStar />
										</span>
										<span>
											<FaStar />
										</span>
										<span>
											<FaStarHalfAlt />
										</span>
									</div>
									<div className="address">
										<div className="icon">
											<FaMapMarkerAlt />
										</div>
										<div> {v.address}</div>
									</div>
									<div className="button">
										<button className="btn">
											<a href="http://www.truevalueofkarmanghat.com/buy-car">
												VIEW CARS
											</a>
										</button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
