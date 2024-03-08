import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import getCookie from '../helpers/GetCookie';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className='mt-32 w-full'>
			<div className='w-full'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-full rotate-180'>
					<path
						fill='#F7F7F7'
						fillOpacity={1}
						d='M0,224L26.7,224C53.3,224,107,224,160,218.7C213.3,213,267,203,320,181.3C373.3,160,427,128,480,128C533.3,128,587,160,640,181.3C693.3,203,747,213,800,192C853.3,171,907,117,960,96C1013.3,75,1067,85,1120,128C1173.3,171,1227,245,1280,245.3C1333.3,245,1387,171,1413,133.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'></path>
				</svg>
				<section className='bg-lightGray247 h-max sm:h-72 flex'>
					<div className='flex justify-center w-[105rem]'>
						<div className='xl:w-[70rem] w-11/12 sm:pr-5 flex justify-between sm:flex-row flex-col gap-12 sm:pb-0 pb-8 sm:pt-0 pt-6'>
							<section>
								<Link
									href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`}
									className='text-4xl font-extrabold cursor-pointer text-dark28'>
									vvaciej
								</Link>
								<h2 className='text-lg font-semibold text-dark28'>Collect. Reedem. Repeat.</h2>
								<div className='mt-7'>
									<span className='font-medium text-dark28'>{t('Join to us')}</span>
									<section className='flex gap-x-3 mt-2'>
										<button
											className='p-2 bg-white flex items-center justify-center rounded-3xl hover:bg-red transition-all'
											style={{
												boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
											}}>
											<FontAwesomeIcon className='h-6' icon={faTiktok} />
										</button>
										<button
											className='p-2 flex items-center justify-center bg-white rounded-3xl hover:bg-red transition-all'
											style={{
												boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
											}}>
											<FontAwesomeIcon className='h-6' icon={faInstagram} />
										</button>
									</section>
								</div>
							</section>
							<nav className='flex justify-between sm:flex-row flex-col gap-8 md:w-1/2'>
								<section>
									<h2 className='text-lg'>{t('Product')}</h2>
									<ul className='mt-4 text-commonText flex flex-col gap-2'>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`}>{t('Product')}</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/pricing`}>
												{t('Pricing')}
											</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/features`}>
												{t('Features')}
											</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/app`}>
												{t('Download the app')}
											</Link>
										</li>
									</ul>
									<h2 className='text-commonText sm:mt-10 mt-2'>
										{t('Original website')}:{' '}
										<a
											href='https://www.stamply.pl'
											target='_blank'
											rel='noopener noreferrer'
											className='text-red underline'>
											Stamply
										</a>
									</h2>
								</section>
								<section>
									<h2 className='text-lg'>{t('Platform')}</h2>
									<ul className='mt-4 text-commonText flex flex-col gap-2'>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/aboutus`}>
												{t('About us')}
											</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/contact`}>
												{t('Contact')}
											</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/terms-and-conditions`}>
												{t('Terms and conditions')}
											</Link>
										</li>
										<li className='hover:text-red'>
											<Link href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/privacy-policy`}>
												{t('Privacy policy')}
											</Link>
										</li>
									</ul>
								</section>
							</nav>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
