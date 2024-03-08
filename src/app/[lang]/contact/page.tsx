'use client';

import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const { t } = useTranslation();

	return (
		<div className='relative'>
			<Navbar />
			<div className="h-96 w-full bg-no-repeat absolute bg-cover top-0 bg-[url('https://stamply.pl/images/lets-talk.webp')] flex justify-center items-center flex-col text-center gap-6 pt-10 lg:pt-14">
				<h1 className='lg:text-6xl text-4xl font-semibold text-lightGray247'>{t('Contact')}</h1>
				<p className='text-lightGray247 text-md lg:text-lg lg:w-[43rem] w-full px-8'>
					{t(
						"Your voice is important to us, so we'd be happy to engage in a dialogue with you and together create an even better experience with Stamply.pl."
					)}
				</p>
			</div>
			<main className='min-h-screen relative'>
				<div className='xl:w-[78rem] w-11/12 backdrop-blur h-max lg:h-[40rem] z-10 absolute right-1/2 top-0 sm:mt-80 mt-[21rem] rounded-xl translate-x-1/2 lg:p-16 sm:p-10 p-6 pt-8 sm:pt-12 shadow-md bg-headerBg flex justify-between gap-12 lg:gap-24'>
					<section className='w-full'>
						<h1 className='sm:text-4xl text-2xl font-semibold text-dark28'>{t('Contact Us')}</h1>
						<form className='mt-8 flex flex-col gap-y-12'>
							<input
								type='text'
								className='w-full h-12 bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5  text-dark28'
							/>
							<input
								type='text'
								className='w-full h-12 bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5  text-dark28'
							/>
							<textarea className='h-32 w-full bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5'></textarea>
							<button className='bg-red text-white font-semibold h-14 rounded-xl'>{t('Send')}</button>
						</form>
					</section>
					<section className='w-3/4 lg:flex hidden gap-6'>
						<FontAwesomeIcon className='h-8 text-dark28' icon={faAddressCard} />
						<section>
							<h3 className='font-semibold text-dark28 mb-2'>{t('Email Address')}</h3>
							<span>maciejskok2004@gmail.com</span>
						</section>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
