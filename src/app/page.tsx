'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faCartPlus,
	faChevronDown,
	faMinus,
	faSmile,
	faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
	const virtualBenefitsRef = useRef<HTMLDivElement>(null);

	return (
		<div className='bg-white h-max w-full text-black flex justify-center relative'>
			<Navbar />
			<div className='w-full relative z-[1] md:mt-24 mt-12'>
				<main className='w-full flex items-center flex-col'>
					<div className='xl:w-[77rem] w-11/12 flex flex-col items-center'>
						<div className='flex lg:flex-row flex-col justify-between items-center mt-16 gap-12'>
							<section>
								<h1 className='xl:text-[90px] text-[42px] sm:text-6xl lg:text-[75px] text-dark28 leading-none'>
									Zwiększ lojalność <br />
									<b className='xl:text-[90px] text-[42px] sm:text-6xl lg:text-[75px] text-red font-medium'>klientów</b>
									.
								</h1>
								<p className='mt-7 md:text-xl text-lg lg:text-2xl'>
									Zbieraj dane, zrozum swoich klientów i nagradzaj ich za lojalność. Tworzymy{' '}
									<b className=' md:text-xl text-lg lg:text-2xl text-dark28'>personalizowane karty lojalnościowe</b>,
									które nie tylko zatrzymają klientów, ale także zmotywują ich do częstszych zakupów.
								</p>
							</section>
							<img
								className='lg:w-[29%] w-1/2 max-w-full'
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
						<div className='mt-10 w-full h-max xl:h-48 bg-white rounded-lg flex items-center xl:flex-row flex-col xl:px-32 shadow-xl xl:py-0 py-2'>
							<div className='flex gap-x-6 h-28 items-center xl:justify-normal justify-center xl:border-r-[1px] border-b-[1px] xl:border-b-[0px] w-4/5 sm:w-3/5 border-lightGray226'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faUniversalAccess} />
								<section>
									<b className='text-xl font-semibold'>10x</b>
									<h2 className='text-lg'>Wzrost retencji</h2>
								</section>
							</div>
							<div className='flex gap-x-6 h-28 items-center justify-center w-4/5 sm:w-3/5 xl:border-r-[1px] border-b-[1px] xl:border-b-[0px] border-lightGray226'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faCartPlus} />
								<section>
									<b className='text-xl font-semibold'>50%</b>
									<h2 className='text-lg'>Wzrost konwersji</h2>
								</section>
							</div>
							<div className='flex gap-x-6 items-center w-full h-28 justify-center xl:justify-end'>
								<FontAwesomeIcon className='h-10 text-dark28' icon={faSmile} />
								<section>
									<b className='text-xl font-semibold'>99%</b>
									<h2 className='text-lg'>Pozytywne opinie</h2>
								</section>
							</div>
						</div>
						<div className='h-screen flex sm:flex-row flex-col items-center justify-center w-full xl:w-[70rem] gap-16 xl:gap-32'>
							<img
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fastronaut.webp&w=640&q=75'
								className='xl:h-[28rem] sm:w-1/3 w-1/2'
								alt=''
							/>
							<section className='flex flex-col gap-y-4' ref={virtualBenefitsRef}>
								<h1 className='xl:text-6xl text-4xl text-dark28 font-semibold xl:leading-[3.4rem]'>
									Wirtualne pieczątki realne korzyści
								</h1>
								<p className='font-medium text-lg xl:text-xl text-commonText'>
									Przy każdym zakupie zbieraj wirtualne pieczątki, które wymienisz na atrakcyjne nagrody. Im więcej
									pieczątek, tym lepsze prezenty! Twój sklep, Twoje zasady, Twoje nagrody. Prosto i satysfakcjonująco!
								</p>
								<button className='flex items-center text-commonText font-medium mt-3'>
									Zobacz jak to działa <FontAwesomeIcon icon={faArrowRight} className='h-4 ml-3 text-commonText' />
								</button>
							</section>
						</div>
						<div className='h-screen flex sm:flex-row flex-col-reverse items-center justify-center w-full xl:w-[70rem] gap-16 xl:gap-32'>
							<section className='flex flex-col gap-y-4'>
								<h1 className='xl:text-6xl text-4xl text-dark28 font-semibold xl:leading-[3.4rem]'>
									Lojalność w Twoim telefonie
								</h1>
								<p className='font-medium text-lg xl:text-xl text-commonText'>
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
								className='xl:h-[34rem] sm:w-1/3 w-1/2'
								alt=''
							/>
						</div>
						<div className='h-screen flex sm:flex-row flex-col  items-center justify-center w-full xl:w-[70rem] gap-16 xl:gap-32'>
							<img
								src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fhappy-coffee.webp&w=640&q=75'
								className='xl:h-[28rem] sm:w-1/3 w-1/2'
								alt=''
							/>
							<section className='flex flex-col gap-y-4'>
								<h1 className='xl:text-6xl text-4xl text-dark28 font-semibold xl:leading-[3.4rem]'>
									Trwałe relacje to skuteczny marketing
								</h1>
								<p className='font-medium text-lg xl:text-xl text-commonText'>
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
							<h1 className='text-center text-4xl xl:text-6xl font-semibold text-dark28'>
								Jakie korzyści przynosi aplikacja lojalnościowa Stamply?
							</h1>
							<div className='lg:grid flex flex-col grid-cols-2 items-center gap-8 w-full mt-24'>
								<section className='w-full xl:h-72 h-full flex flex-col gap-y-3 p-8 xl:p-12 bg-dark28 rounded-lg'>
									<h1 className='xl:text-2xl text-xl text-white font-bold'>Pozyskaj klientów i zwiększ sprzedaż</h1>
									<p className='xl:text-xl text-lg text-lightGray247'>
										Nagradzaj klientów za każdy zakup i buduj z nimi trwałą relację. Nasz Program Lojalnościowy to klucz
										do zwiększenia liczby powracających klientów i wzrostu obrotów w Twoim biznesie.
									</p>
								</section>
								<section className='w-full xl:h-72 h-full flex flex-col gap-y-3 p-8 xl:p-12 bg-lightGray247 rounded-lg'>
									<h1 className='xl:text-2xl text-xl text-dark28 font-semibold'>
										Gotowe rozwiązania i nowości dla klientów
									</h1>
									<p className='xl:text-xl text-lg text-commonText'>
										Zapomnij o trudnościach w implementacji. Nasza platforma SaaS to kompleksowe rozwiązanie, które
										obsłuży wszystko za Ciebie. Dodatkowo, regularnie wprowadzamy nowości, dbając o to, aby Twoi klienci
										zawsze odkrywali coś świeżego. Uatrakcyjnij swoją ofertę, pozostawiając całą pracę nam!
									</p>
								</section>
								<section className='w-full  xl:h-72 h-full flex flex-col gap-y-3 p-8 xl:p-12 bg-lightGray247 rounded-lg'>
									<h1 className='xl:text-2xl text-xl text-dark28 font-semibold'>Buduj relację z klientami</h1>
									<p className='xl:text-xl text-lg text-commonText'>
										Nasza platforma umożliwia efektywny marketing, wykorzystując powiadomienia Push, SMS oraz e-mail.
										Bądź blisko swoich klientów, informując ich o najnowszych promocjach, ekskluzywnych ofertach i
										wydarzeniach. Skuteczny marketing to klucz do utrzymania ich uwagi i lojalności.
									</p>
								</section>
								<section className='w-full xl:h-72 h-full flex flex-col gap-y-3 p-8 xl:p-12 bg-lightGray247 rounded-lg'>
									<h1 className='xl:text-2xl text-xl text-dark28 font-semibold'>Dane i analizy dla rozwoju biznesu</h1>
									<p className='xl:text-xl text-lg text-commonText'>
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
						<section className='h-[30rem] flex flex-col items-center mt-24 relative px-3'>
							<h1 className='text-center text-4xl xl:text-6xl text-white font-semibold'>Sprawdź, jak to działa</h1>
							<span className='text-center text-md xl:text-lg text-white mt-3 xl:mt-6'>
								Obejrzyj ten krótki film, aby zobaczyć, jak działa aplikacja Stamply
							</span>
							<div className=' sm:w-[620px] sm:h-full h-3/5 w-11/12 sm:mt-10 mt-6'>
								<iframe
									className='rounded-lg h-full w-full'
									src='https://www.youtube.com/embed/ZQeo_HMpjdg?hl=pl'
									title='A YouTube video'></iframe>
							</div>
						</section>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
							<path
								fill='#fff'
								fillOpacity={1}
								d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
						</svg>
					</div>
					<div className='mt-16 w-11/12 xl:w-[80rem]'>
						<h1 className='xl:text-6xl text-4xl font-semibold text-dark28 text-center'>Dla kogo jest ta aplikacja?</h1>
						<div
							className='lg:grid flex flex-col-reverse items-center gap-x-20 gap-y-10 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1.4fr 1fr',
							}}>
							<section className='flex lg:text-right flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Kawiarnie</h3>
								<p className='lg:text-xl text-lg text-commonText'>
									Wybij się na tle konkurencji. Nasza aplikacja umożliwia łatwe nagradzanie klientów za każde
									zamówienie, co zwiększa retencję i zachęca do częstszych odwiedzin. Wykorzystaj możliwości
									personalizacji i promuj swoje najpopularniejsze napoje lub przekąski jako nagrody, co skutecznie
									przyciągnie uwagę potencjalnych klientów.
								</p>
							</section>
							<img
								src='https://i.ibb.co/GtghZrf/close-up-friends-with-ice-cream.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl w-11/12 md:min-w-[30rem] md:max-w-[30rem] md:max-h-[20rem] md:min-h-[20rem]'
							/>
						</div>
						<div
							className='lg:grid flex flex-col items-center gap-x-20 gap-y-10 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1fr 1.4fr',
							}}>
							<img
								src='https://i.ibb.co/GtghZrf/close-up-friends-with-ice-cream.jpg'
								alt='close-up-friends-with-ice-cream'
								className='rounded-xl w-11/12 md:min-w-[30rem] md:max-w-[30rem] md:max-h-[20rem] md:min-h-[20rem]'
							/>
							<section className='flex text-left flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Lodziarnie</h3>
								<p className='lg:text-xl text-lg text-commonText'>
									Otwórz nowe możliwości dla swojej lodziarni dzięki programowi lojalnościowemu Stamply. Dzięki Stamply
									możesz promować swoje sezonowe smaki, nowe produkty lub specjalne promocje, co przyciągnie uwagę
									klientów i zwiększy sprzedaż. Wykorzystaj potencjał programu lojalnościowego, aby budować lojalność
									marki i rozwijać swoją lodziarnię.
								</p>
							</section>
						</div>
						<div
							className='lg:grid flex flex-col-reverse items-center gap-x-20 gap-y-10 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1.4fr 1fr',
							}}>
							<section className='flex lg:text-right flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Sklepy</h3>
								<p className='lg:text-xl text-lg text-commonText'>
									Zwiększaj sprzedaż i buduj lojalność klientów dzięki programowi lojalnościowemu Stamply dla Twojego
									sklepu. Nasza aplikacja umożliwia nagradzanie klientów za każdy zakup, co skutecznie zwiększa
									częstotliwość wizyt i wartość koszyka. Wykorzystaj możliwości personalizacji i promuj swoje najlepsze
									produkty jako nagrody, co przyciągnie uwagę klientów i zmotywuje ich do zakupów.
								</p>
							</section>
							<img
								src='https://i.ibb.co/ZffFmPZ/4059.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl w-11/12 md:min-w-[30rem] md:max-w-[30rem] md:max-h-[20rem] md:min-h-[20rem]'
							/>
						</div>
						<div
							className='lg:grid flex flex-col items-center gap-x-20 gap-y-10 justify-between w-full mt-24'
							style={{
								gridTemplateColumns: '1fr 1.4fr',
							}}>
							<img
								src='https://i.ibb.co/z75QwP7/139512.jpg'
								alt='stylish-young-woman-enjoying-coffee'
								className='rounded-xl w-11/12 md:min-w-[30rem] md:max-w-[30rem] md:max-h-[20rem] md:min-h-[20rem]'
							/>
							<section className='flex text-left flex-col justify-center gap-4'>
								<h3 className='text-2xl text-dark28 font-semibold'>Usługi</h3>
								<p className='lg:text-xl text-lg text-commonText'>
									Pozyskuj nowych klientów i zwiększaj lojalność istniejących dzięki programowi lojalnościowemu Stamply.
									Nasza aplikacja umożliwia nagradzanie klientów za korzystanie z Twoich usług, co skutecznie buduje
									relacje i zachęca do powrotu. Dzięki Stamply zbudujesz silną markę i zwiększysz zaangażowanie
									klientów, co przełoży się na wzrost sprzedaży i sukces Twojego biznesu.
								</p>
							</section>
						</div>
					</div>
				</main>
				<Footer />
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
