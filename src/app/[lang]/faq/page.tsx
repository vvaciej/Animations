'use client';

import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
	const { t } = useTranslation();

	return (
		<div>
			<Navbar />
			<main className='min-h-screen pt-32 flex items-center flex-col'>
				<h1 className='md:text-6xl text-5xl font-semibold text-dark28 text-center'>FAQ</h1>
				<p className='text-center mt-7 text-md md:text-lg text-commonText max-w-[40rem] px-4'>
					{t(
						'Ready answers to your questions are waiting to help you on the road to business success with the Stamply app.'
					)}
				</p>
				<div className='mt-12 h-full w-11/12 xl:w-[77rem]'>
					<hr className='border-red border-[1px] w-full' />
					<div className='mt-6 grid lg:grid-cols-2 w-full h-full gap-6'>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>{t('What is a loyalty program?')}</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'A loyalty program is a marketing strategy that rewards loyal customers for their loyalty to the brand. In our case, it involves collecting stamps for purchases, positively impacting the shopping experience.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('Why is it worth having a loyalty program in my business?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'A loyalty program helps increase customer engagement, build lasting relationships, and boost sales. Customers expect rewards, and a loyalty program is a key tool for acquiring and retaining customers.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t("What are customers' expectations from a loyalty program?")}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'Customers expect attractive rewards, a simple points collection system, and benefits available only to program participants. Additionally, they expect quick and clear information about their account and available rewards.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('How does a mobile loyalty app benefit businesses?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'A mobile app is convenient for customers! It allows them to collect points and redeem rewards directly through their phones. It is also an effective way to maintain interactions with customers, informing them about news and promotions through push notifications.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('How does the stamp collection app work?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'The app enables customers to collect stamps for every purchase. Upon reaching a specified number of stamps, the customer gains access to certain rewards. The app is intuitive and easy to use, translating into increased customer loyalty.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t("Can I customize the loyalty program for my business's specifics?")}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										"Yes, our platform allows you to customize the loyalty program to the unique needs of your business. You can define stamp collection rules, promotional periods, and personalize rewards to better meet your customers' expectations."
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('What are the benefits of a loyalty program for small businesses?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										"A loyalty program for small businesses enables building lasting relationships with customers, helps increase their value, and encourages more frequent purchases. It's a tool that will help you gain customer loyalty."
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('Does a loyalty program help in building a brand?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'Yes, a loyalty program is an effective tool in building a brand. It gives customers an additional reason to remain loyal to your brand, while also increasing brand recognition among potential customers.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('Does a loyalty program impact acquiring new customers?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'Yes, a loyalty program not only retains existing customers but also attracts new ones. Customers are more likely to choose a company offering attractive reward programs, translating into acquiring new customers.'
									)}
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									{t('What are the trends in loyalty programs?')}
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									{t(
										'Current trends include reward personalization, the use of mobile technologies, integration with social media, and sustainable and social aspects of loyalty programs. Our platform stays updated with these trends to meet market expectations.'
									)}
								</p>
							</main>
						</article>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default FAQ;
