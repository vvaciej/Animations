'use client';

import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar />
			<main className='min-h-screen pt-32 flex items-center flex-col'>
				<h1 className='lg:text-6xl sm:text-5xl text-3xl font-semibold text-dark28 text-center px-4'>
					{t('Find the perfect plan for')}
					<br /> {t('your business')}
				</h1>
				<p className='md:text-center mt-7 text-md md:text-lg text-commonText max-w-[40rem] px-5'>
					{t(
						"Discover our flexible pricing packages designed for diverse business needs. Choose a plan that will accelerate your company's growth and take your loyalty strategy to a new level of success."
					)}
				</p>
				<div className='mt-12 flex flex-col items-center gap-8 mx-3 sm:mx-10'>
					<article
						className='p-2 sm:pb-4 lg:pl-6 px-3 mb:pl-10 gap-x-12 max-w-[84rem] outline outline-[1px] outline-red rounded-3xl lg:grid flex flex-col'
						style={{
							gridTemplateColumns: '2fr 1fr',
						}}>
						<section className='py-7 px-2 lg:px-0'>
							<h2 className='text-red font-semibold text-2xl'>{t('Standard package')}</h2>
							<p className='mt-5 text-commonText'>
								{t(
									'Uncover the potential of our basic package, designed for small businesses. Collect points, build customer loyalty, and increase sales without unnecessary complications.'
								)}
							</p>
							<div className='text-red relative mt-10'>
								<b className='text-sm font-semibold relative bg-white z-10 pr-2'>{t('Included in the price')}</b>
								<hr className='absolute top-1/2 translate-y-1/2 border-red w-11/12 right-0 z-0' />
							</div>
							<ul className='mt-8 w-full flex flex-col sm:grid grid-cols-2 h-max gap-y-7 gap-x-3'>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>{t('Mobile app for customers')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>{t('Personalization of loyalty card')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>{t('Push notifications')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>{t('Technical support')}</span>
								</li>
							</ul>
						</section>
						<div className='h-full lg:w-[26rem] bg-red flex items-center justify-center flex-col rounded-2xl lg:py-0 py-10'>
							<b className='text-white'>{t('Monthly')}</b>
							<h1 className='text-5xl text-white font-semibold'>
								79.99 <b>{t('PLN')}</b>
							</h1>
							<button className='py-4 px-7 bg-white rounded-xl font-semibold text-red mt-6'>{t('Get started')}</button>
							<span className='text-xs text-white mt-5 px-24 text-center'>
								{t('Invoices available for easy company reimbursement')}
							</span>
						</div>
					</article>
					<article
						className='p-2 sm:pb-4 lg:pl-6 mb:pl-10 gap-x-12 max-w-[84rem] outline outline-[1px] outline-dark28 rounded-3xl lg:grid flex flex-col'
						style={{
							gridTemplateColumns: '2fr 1fr',
						}}>
						<section className='py-7 px-2 lg:px-0'>
							<h2 className='text-dark28 font-semibold text-2xl'>{t('Premium package')}</h2>
							<p className='mt-5 text-commonText'>
								{t(
									'Explore the full potential of our Premium package, tailored to the needs of growing businesses. Maximize customer loyalty and benefit from advanced features.'
								)}
							</p>
							<div className='text-dark28 relative mt-10'>
								<b className='text-sm font-semibold relative bg-white z-10 pr-2'>{t('Included in the price')}</b>
								<hr className='absolute z-0 top-1/2 translate-y-1/2 border-dark28 w-full right-0' />
							</div>
							<ul className='mt-8 w-full flex flex-col sm:grid grid-cols-2 h-max gap-y-7 gap-x-3'>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>{t('Multilevel loyalty program')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>{t('Data analytics')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>{t('Marketing campaigns')}</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>{t('Priority technical support')}</span>
								</li>
							</ul>
						</section>
						<div className='h-full lg:w-[26rem] bg-dark28 flex items-center justify-center flex-col rounded-2xl lg:py-0 py-10'>
							<b className='text-white'>{t('Monthly')}</b>
							<h1 className='text-5xl text-white font-semibold'>
								149.99 <b>{t('PLN')}</b>
							</h1>
							<button className='py-4 px-7 bg-red rounded-xl font-semibold text-white mt-6'>{t('Coming soon')}</button>
							<span className='text-xs text-white mt-5 px-24 text-center'>
								{t('Invoices available for easy company reimbursement')}
							</span>
						</div>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Pricing;
