'use client';

import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faMedal, faQrcode, faRocket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Features = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar />
			<main
				className='min-h-screen lg:pt-32 pt-24 flex items-center flex-col xl:w-full w-11/12'
				style={{
					margin: '0 auto',
				}}>
				<h1 className='xl:text-6xl text-5xl font-semibold text-dark28 text-center'>{t('How Does it Work?')}</h1>
				<p className='text-center mt-7 text-md xl:text-lg text-commonText max-w-[40rem]'>
					{t(
						'Discover how you can effectively strengthen customer relationships, increase sales, and stand out in the market with the Stamply app.'
					)}
				</p>
				<div className='mt-12 relative max-w-[65rem] pt-6 md:px-0 sm:pl-2 pl-4'>
					<div className='after:h-full after:absolute after:w-1 after:bg-red md:after:right-1/2 md:after:transform-x-1/2 flex flex-col w-full h-full gap-x-28 gap-y-6'>
						<div></div>
						<div className='w-full relative right-0 mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute md:left-auto left-[-21px] md:right-1/2 md:translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-7 text-red' icon={faRocket}></FontAwesomeIcon>
							</div>
							<section className='md:w-1/2 md:float-right xl:pl-16 pl-12'>
								<h2 className='font-semibold text-dark28 xl:text-2xl text-xl mb-4'>
									{t('Registration and Configuration')}
								</h2>
								<p className='text-commonText text-lg xl:text-xl'>
									{t(
										'Register your business in a few simple steps. Access the intuitive administrative panel for easy configuration and personalization of the loyalty program.'
									)}
								</p>
							</section>
						</div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute md:left-auto left-[-21px] md:right-1/2 md:translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-7 text-red' icon={faQrcode}></FontAwesomeIcon>
							</div>
							<section className='md:text-right md:w-1/2 xl:pr-16 md:pr-12 md:pl-0 pl-12'>
								<h2 className='font-semibold text-dark28 xl:text-2xl text-xl mb-4'>{t('Receive Stickers')}</h2>
								<p className='text-commonText text-lg xl:text-xl'>
									{t(
										'Receive personalized stickers with unique QR codes. Simply place them in your establishment so customers can easily install the app and start collecting points.'
									)}
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute  md:left-auto left-[-21px] md:right-1/2 md:translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faUserPlus}></FontAwesomeIcon>
							</div>
							<section className='md:w-1/2 md:float-right xl:pl-16 pl-12'>
								<h2 className='font-semibold text-dark28 xl:text-2xl text-xl mb-4'>
									{t('Easy Customer Registration')}
								</h2>
								<p className='text-commonText text-lg xl:text-xl'>
									{t(
										'Your customers complete a quick registration in just one step. Every purchase means new points that they can exchange for attractive rewards.'
									)}
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute  md:left-auto left-[-21px] md:right-1/2 md:translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faMedal}></FontAwesomeIcon>
							</div>
							<section className='md:text-right md:w-1/2 xl:pr-16 md:pr-12 md:pl-0 pl-12'>
								<h2 className='font-semibold text-dark28 xl:text-2xl text-xl mb-4'>{t('Collect Points and Redeem')}</h2>
								<p className='text-commonText text-lg xl:text-xl'>
									{t(
										'Customers use the app, scan QR codes, and accumulate points, which they can later exchange for attractive rewards.'
									)}
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-2'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute  md:left-auto left-[-21px] md:right-1/2 md:translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faArrowUp}></FontAwesomeIcon>
							</div>
							<section className='md:w-1/2 md:float-right xl:pl-16 pl-12'>
								<h2 className='font-semibold text-dark28 xl:text-2xl text-xl mb-4'>{t('Analytics and Marketing')}</h2>
								<p className='text-commonText text-lg xl:text-xl'>
									{t(
										'Receive reports and analytics that help understand customer preferences. Use the acquired data for effective marketing actions and notifications, increasing customer engagement.'
									)}
								</p>
							</section>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Features;
