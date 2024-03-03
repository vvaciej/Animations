'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faCartPlus,
	faChevronDown,
	faMinus,
	faSmile,
	faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';

export default function Home() {
	const virtualBenefitsRef = useRef<HTMLDivElement>(null);

	return (
		<div className='bg-white h-max w-full text-black flex justify-center relative'>
			<div className='before:w-full before:content-[""] before:fixed before:h-[90px] before:backdrop-blur-xl before:z-10 before:top-0 before:left-0'></div>
			<header className='fixed w-full z-10 flex justify-center before:content-[""] h-[90px] bg-headerBg'>
				<div className='w-[90rem] h-full relative z-20'>
					<div className='items-center flex justify-between h-full'>
						<Link href='/' className='text-4xl font-extrabold cursor-pointer text-dark28'>
							vvaciej
						</Link>
						<ul className='flex items-center gap-x-10 text-commonText'>
							<li>
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
									Oferta
								</Link>
							</li>
							<li>
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
									Funkcjonalność
								</Link>
							</li>
							<li>
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
									Cennik
								</Link>
							</li>
							<li>
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
									FAQ
								</Link>
							</li>
						</ul>
						<section className='flex items-center gap-x-4'>
							<button className='flex items-center gap-x-2 outline outline-1 outline-lightGray226 px-4 py-2 rounded hover:bg-lightGray247'>
								<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
								<span className='text-commonText'>PL</span>
							</button>
							<button className='py-4 px-8 text-center rounded-xl text-white font-semibold bg-red'>Wypróbuj</button>
						</section>
					</div>
				</div>
			</header>
			<div className='w-full relative z-[1] mt-24'>
				<main className='w-full flex items-center flex-col'>
					<div className='w-[90rem] flex flex-col items-center'>
						<div className='flex justify-between items-center mt-16 gap-x-12'>
							<section className='w-4/5'>
								<h1 className='xl:text-[90px] text-[80px] text-dark28 leading-none'>
									Zwiększ lojalność <br />
									<b className='xl:text-[90px] text-[80px] text-red font-medium'>klientów</b>.
								</h1>
								<p className='mt-7 text-2xl'>
									Zbieraj dane, zrozum swoich klientów i nagradzaj ich za lojalność. Tworzymy{' '}
									<b className='text-2xl text-dark28'>personalizowane karty lojalnościowe</b>, które nie tylko
									zatrzymają klientów, ale także zmotywują ich do częstszych zakupów.
								</p>
							</section>
							<img
								className='w-[29%] max-w-full'
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fcrazy-coffee.webp&w=640&q=75'
								alt=''
							/>
						</div>
						<button
							className='mt-12 flex items-center flex-col'
							onClick={() => {
								virtualBenefitsRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
							}}>
							<div className='w-4 h-6 outline outline-2 outline-commonText rounded-xl flex justify-center items-center'>
								<FontAwesomeIcon className='animate-wiggle h-3 rotate-90 text-commonText' icon={faMinus} />
							</div>
							<section className='mt-2 text-dark28 flex flex-col'>
								<FontAwesomeIcon className='h-3  animate-opacity1' icon={faChevronDown} />
								<FontAwesomeIcon className='h-3  animate-opacity2' icon={faChevronDown} />
								<FontAwesomeIcon className='h-3  animate-opacity3' icon={faChevronDown} />
							</section>
						</button>
						<div
							className='mt-10 w-full h-48 bg-white rounded-lg flex items-center px-32'
							style={{
								boxShadow: 'rgba(50, 50, 93, 0.25) 0px 10px 20px -30px, rgba(0, 0, 0, 0.15) 0px 25px 60px 15px',
							}}>
							<div className='flex gap-x-6 h-28 items-center w-full border-r-[1px] border-lightGray226'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faUniversalAccess} />
								<section>
									<b className='text-xl font-semibold'>10x</b>
									<h2 className='text-lg'>Wzrost retencji</h2>
								</section>
							</div>
							<div className='flex gap-x-6 h-28 items-center justify-center w-full border-r-[1px] border-lightGray226'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faCartPlus} />
								<section>
									<b className='text-xl font-semibold'>50%</b>
									<h2 className='text-lg'>Wzrost konwersji</h2>
								</section>
							</div>
							<div className='flex gap-x-6 items-center w-full justify-end'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faSmile} />
								<section>
									<b className='text-xl font-semibold'>99%</b>
									<h2 className='text-lg'>Pozytywne opinie</h2>
								</section>
							</div>
						</div>
						<div className='h-screen flex items-center justify-center w-[70rem] gap-x-32'>
							<img
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fastronaut.webp&w=640&q=75'
								className='h-[28rem]'
								alt=''
							/>
							<section className='flex flex-col gap-y-4' ref={virtualBenefitsRef}>
								<h1 className='text-6xl text-dark28 font-semibold leading-[3.4rem]'>
									Wirtualne pieczątki realne korzyści
								</h1>
								<p className='font-medium text-xl text-commonText'>
									Przy każdym zakupie zbieraj wirtualne pieczątki, które wymienisz na atrakcyjne nagrody. Im więcej
									pieczątek, tym lepsze prezenty! Twój sklep, Twoje zasady, Twoje nagrody. Prosto i satysfakcjonująco!
								</p>
								<button className='flex items-center text-commonText font-medium mt-3'>
									Zobacz jak to działa <FontAwesomeIcon icon={faArrowRight} className='h-4 ml-3 text-commonText' />
								</button>
							</section>
						</div>
						<div className='h-screen flex items-center justify-center w-[70rem] gap-x-32'>
							<section className='flex flex-col gap-y-4'>
								<h1 className='text-6xl text-dark28 font-semibold leading-[3.4rem]'>Lojalność w Twoim telefonie</h1>
								<p className='font-medium text-xl text-commonText'>
									Pobierz naszą aplikację mobilną, zbieraj punkty i wymieniaj na nagrody! Sprawdzaj swoje punkty,
									odbieraj ekskluzywne oferty, i bądź na bieżąco z najnowszymi promocjami. Twoi klienci zasługują na
									wygodę obsługi w zasięgu ręki!
								</p>
								<button className='flex items-center text-commonText font-medium mt-3'>
									Zobacz jak to działa <FontAwesomeIcon icon={faArrowRight} className='h-4 ml-3 text-commonText' />
								</button>
							</section>
							<img
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fice-cream.webp&w=640&q=75'
								className='h-[34rem]'
								alt=''
							/>
						</div>
						<div className='h-screen flex items-center justify-center w-[70rem] gap-x-32'>
							<img
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fhappy-coffee.webp&w=640&q=75'
								className='h-[28rem]'
								alt=''
							/>
							<section className='flex flex-col gap-y-4'>
								<h1 className='text-6xl text-dark28 font-semibold leading-[3.4rem]'>
									Trwałe relacje to skuteczny marketing
								</h1>
								<p className='font-medium text-xl text-commonText'>
									Wykorzystaj potęgę naszej aplikacji do skutecznego marketingu. Wysyłaj spersonalizowane wiadomości
									SMS, przyciągaj uwagę za pomocą powiadomień push. Buduj trwałe relacje z klientami, informuj ich o
									promocjach i utrzymuj ich zaangażowanie w Twoją markę!
								</p>
								<button className='flex items-center text-commonText font-medium mt-3'>
									Zobacz jak to działa <FontAwesomeIcon icon={faArrowRight} className='h-4 ml-3 text-commonText' />
								</button>
							</section>
						</div>
						<div className='flex justify-center flex-col'>
							<h1 className='text-center text-6xl font-semibold text-dark28'>
								Jakie korzyści przynosi aplikacja lojalnościowa Stamply?
							</h1>
							<div className='grid grid-cols-2 items-center gap-8 w-full mt-24'>
								<section className='w-full h-72 flex flex-col gap-y-3 p-12 bg-dark28 rounded-lg'>
									<h1 className='text-2xl text-white font-bold'>Pozyskaj klientów i zwiększ sprzedaż</h1>
									<p className='text-xl text-lightGray247'>
										Nagradzaj klientów za każdy zakup i buduj z nimi trwałą relację. Nasz Program Lojalnościowy to klucz
										do zwiększenia liczby powracających klientów i wzrostu obrotów w Twoim biznesie.
									</p>
								</section>
								<section className='w-full h-72 flex flex-col gap-y-3 p-12 bg-lightGray247 rounded-lg'>
									<h1 className='text-2xl text-dark28 font-semibold'>Gotowe rozwiązania i nowości dla klientów</h1>
									<p className='text-xl text-commonText'>
										Zapomnij o trudnościach w implementacji. Nasza platforma SaaS to kompleksowe rozwiązanie, które
										obsłuży wszystko za Ciebie. Dodatkowo, regularnie wprowadzamy nowości, dbając o to, aby Twoi klienci
										zawsze odkrywali coś świeżego. Uatrakcyjnij swoją ofertę, pozostawiając całą pracę nam!
									</p>
								</section>
								<section className='w-full h-72 flex flex-col gap-y-3 p-12 bg-lightGray247 rounded-lg'>
									<h1 className='text-2xl text-dark28 font-semibold'>Buduj relację z klientami</h1>
									<p className='text-xl text-commonText'>
										Nasza platforma umożliwia efektywny marketing, wykorzystując powiadomienia Push, SMS oraz e-mail.
										Bądź blisko swoich klientów, informując ich o najnowszych promocjach, ekskluzywnych ofertach i
										wydarzeniach. Skuteczny marketing to klucz do utrzymania ich uwagi i lojalności.
									</p>
								</section>
								<section className='w-full h-72 flex flex-col gap-y-3 p-12 bg-lightGray247 rounded-lg'>
									<h1 className='text-2xl text-dark28 font-semibold'>Dane i analizy dla rozwoju biznesu</h1>
									<p className='text-xl text-commonText'>
										Dostęp do danych i analiz pozwoli Ci lepiej zrozumieć potrzeby Twoich klientów, personalizować
										oferty i podejmować strategiczne decyzje biznesowe. Odkryj nowe możliwości dzięki naszym narzędziom
										analitycznym.
									</p>
								</section>
							</div>
						</div>
					</div>
					<div className='mt-20 bg-red w-full'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
							<path
								fill='#fff'
								fillOpacity={1}
								d='M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,192C672,224,768,256,864,245.3C960,235,1056,181,1152,133.3C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
						</svg>
						<section className='h-[30rem] flex flex-col items-center mt-24 relative'>
							<h1 className='text-center text-6xl text-white font-semibold'>Sprawdź, jak to działa</h1>
							<span className='text-center text-lg text-white mt-6'>
								Obejrzyj ten krótki film, aby zobaczyć, jak działa aplikacja Stamply
							</span>
							<iframe
								className='mt-10 rounded-lg'
								src='https://www.youtube.com/embed/ZQeo_HMpjdg?hl=pl'
								width='620'
								height='450'
								title='A YouTube video'></iframe>
						</section>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
							<path
								fill='#fff'
								fillOpacity={1}
								d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
						</svg>
					</div>
					<div className='mt-16 w-[80rem]'>
						<h1 className='text-6xl font-semibold text-dark28 text-center'>Dla kogo jest ta aplikacja?</h1>
						<div
							className='grid gap-x-20 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1.4fr 1fr',
							}}>
							<section className='flex text-right flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Kawiarnie</h3>
								<p className='text-xl text-commonText'>
									Wybij się na tle konkurencji. Nasza aplikacja umożliwia łatwe nagradzanie klientów za każde
									zamówienie, co zwiększa retencję i zachęca do częstszych odwiedzin. Wykorzystaj możliwości
									personalizacji i promuj swoje najpopularniejsze napoje lub przekąski jako nagrody, co skutecznie
									przyciągnie uwagę potencjalnych klientów.
								</p>
							</section>
							<img
								src='https://i.ibb.co/D8QDwpv/stylish-young-woman-enjoying-coffee.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl min-w-[30rem] max-w-[30rem] max-h-[20rem] min-h-[20rem] object-cover'
							/>
						</div>
						<div
							className='grid gap-x-20 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1fr 1.4fr',
							}}>
							<img
								src='https://i.ibb.co/GtghZrf/close-up-friends-with-ice-cream.jpg'
								alt='close-up-friends-with-ice-cream'
								className='rounded-xl min-w-[30rem] max-w-[30rem] max-h-[20rem] min-h-[20rem]'
							/>
							<section className='flex text-left flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Lodziarnie</h3>
								<p className='text-xl text-commonText'>
									Otwórz nowe możliwości dla swojej lodziarni dzięki programowi lojalnościowemu Stamply. Dzięki Stamply
									możesz promować swoje sezonowe smaki, nowe produkty lub specjalne promocje, co przyciągnie uwagę
									klientów i zwiększy sprzedaż. Wykorzystaj potencjał programu lojalnościowego, aby budować lojalność
									marki i rozwijać swoją lodziarnię.
								</p>
							</section>
						</div>
						<div
							className='grid gap-x-20 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1.4fr 1fr',
							}}>
							<section className='flex text-right flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Sklepy</h3>
								<p className='text-xl text-commonText'>
									Zwiększaj sprzedaż i buduj lojalność klientów dzięki programowi lojalnościowemu Stamply dla Twojego
									sklepu. Nasza aplikacja umożliwia nagradzanie klientów za każdy zakup, co skutecznie zwiększa
									częstotliwość wizyt i wartość koszyka. Wykorzystaj możliwości personalizacji i promuj swoje najlepsze
									produkty jako nagrody, co przyciągnie uwagę klientów i zmotywuje ich do zakupów.
								</p>
							</section>
							<img
								src='https://i.ibb.co/D8QDwpv/stylish-young-woman-enjoying-coffee.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl min-w-[30rem] max-w-[30rem] max-h-[20rem] min-h-[20rem] object-cover'
							/>
						</div>
						<div
							className='grid gap-x-20 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1fr 1.4fr',
							}}>
							<img
								src='https://i.ibb.co/D8QDwpv/stylish-young-woman-enjoying-coffee.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl min-w-[30rem] max-w-[30rem] max-h-[20rem] min-h-[20rem] object-cover'
							/>
							<section className='flex text-left flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Usługi</h3>
								<p className='text-xl text-commonText'>
									Pozyskuj nowych klientów i zwiększaj lojalność istniejących dzięki programowi lojalnościowemu Stamply.
									Nasza aplikacja umożliwia nagradzanie klientów za korzystanie z Twoich usług, co skutecznie buduje
									relacje i zachęca do powrotu. Dzięki Stamply zbudujesz silną markę i zwiększysz zaangażowanie
									klientów, co przełoży się na wzrost sprzedaży i sukces Twojego biznesu.
								</p>
							</section>
						</div>
					</div>
				</main>
				<footer className='mt-32 w-full'>
					<div className='w-full'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' className='w-full rotate-180'>
							<path
								fill='#F7F7F7'
								fillOpacity={1}
								d='M0,224L26.7,224C53.3,224,107,224,160,218.7C213.3,213,267,203,320,181.3C373.3,160,427,128,480,128C533.3,128,587,160,640,181.3C693.3,203,747,213,800,192C853.3,171,907,117,960,96C1013.3,75,1067,85,1120,128C1173.3,171,1227,245,1280,245.3C1333.3,245,1387,171,1413,133.3L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'></path>
						</svg>
						<section className='bg-lightGray247 h-72 flex'>
							<div className='flex justify-center w-[105rem]'>
								<div className='w-[70rem] flex justify-between'>
									<section>
										<Link href='/' className='text-4xl font-extrabold cursor-pointer text-dark28'>
											vvaciej
										</Link>
										<h2 className='text-lg font-semibold text-dark28'>Collect. Reedem. Repeat.</h2>
										<div className='mt-7'>
											<span className='font-medium text-dark28'>Dołącz do nas</span>
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
									<section className='flex gap-40'>
										<section>
											<h2 className='text-lg'>Produkt</h2>
											<ul className='mt-4 text-commonText flex flex-col gap-2'>
												<li className='hover:text-red'>
													<Link href='/'>Produkt</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Cennik</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Funkcjonalność</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Pobierz aplikację</Link>
												</li>
											</ul>
											<h2 className='text-commonText mt-10'>
												Original website:{' '}
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
											<h2 className='text-lg'>Platforma</h2>
											<ul className='mt-4 text-commonText flex flex-col gap-2'>
												<li className='hover:text-red'>
													<Link href='/'>O nas</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Kontakt</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Regulamin</Link>
												</li>
												<li className='hover:text-red'>
													<Link href='/'>Polityka prywatności</Link>
												</li>
											</ul>
										</section>
									</section>
								</div>
							</div>
						</section>
					</div>
				</footer>
			</div>
			<svg className='absolute h-screen opacity-20 z-[0]' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
				<defs>
					<pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
						<rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'></rect>
						<path
							d='M3.25 10h13.5M10 3.25v13.5'
							strokeLinecap='square'
							strokeWidth='0.5'
							stroke='#a1a1a1'
							fill='none'></path>
					</pattern>
				</defs>
				<rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'></rect>
			</svg>
		</div>
	);
}
