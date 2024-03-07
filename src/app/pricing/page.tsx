import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Pricing = () => {
	return (
		<div>
			<Navbar />
			<main className='min-h-screen pt-32 flex items-center flex-col'>
				<h1 className='lg:text-6xl sm:text-5xl text-3xl font-semibold text-dark28 text-center px-4'>
					Znajdź idealny plan dla
					<br /> swojego biznesu
				</h1>
				<p className='md:text-center mt-7 text-md md:text-lg text-commonText max-w-[40rem] px-5'>
					Odkryj nasze elastyczne pafkiety cenowe, stworzone z myślą o różnorodnych potrzebach biznesowych. Wybierz
					plan, który przyspieszy wzrost Twojej firmy i wprowadzi Twoją strategię lojalności na nowy poziom sukcesu.
				</p>
				<div className='mt-12 flex flex-col items-center gap-8 mx-3 sm:mx-10'>
					<article
						className='p-2 sm:pb-4 lg:pl-6 px-3 mb:pl-10 gap-x-12 max-w-[84rem] outline outline-[1px] outline-red rounded-3xl lg:grid flex flex-col'
						style={{
							gridTemplateColumns: '2fr 1fr',
						}}>
						<section className='py-7 px-2 lg:px-0'>
							<h2 className='text-red font-semibold text-2xl'>Pakiet standard</h2>
							<p className='mt-5 text-commonText'>
								Odkryj potencjał naszego podstawowego pakietu, stworzonego z myślą o małych biznesach. Zbieraj punkty,
								buduj lojalność klientów i zwiększ sprzedaż bez zbędnych komplikacji
							</p>
							<div className='text-red relative mt-10'>
								<b className='text-sm font-semibold relative bg-white z-10 pr-2'>W cenie</b>
								<hr className='absolute top-1/2 translate-y-1/2 border-red w-11/12 right-0 z-0' />
							</div>
							<ul className='mt-8 w-full flex flex-col sm:grid grid-cols-2 h-max gap-y-7 gap-x-3'>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>Aplikacja mobilna dla klientów</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>Personalizacja karty lojalnościowej</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>Powiadomienia Push</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-red' />
									<span className='text-sm text-commonText'>Wsparcie Techniczne</span>
								</li>
							</ul>
						</section>
						<div className='h-full lg:w-[26rem] bg-red flex items-center justify-center flex-col rounded-2xl lg:py-0 py-10'>
							<b className='text-white'>Miesięcznie</b>
							<h1 className='text-5xl text-white font-semibold'>
								79.99 <b>zł</b>
							</h1>
							<button className='py-4 px-7 bg-white rounded-xl font-semibold text-red mt-6'>Zaczynamy</button>
							<span className='text-xs text-white mt-5'>Wystawiamy faktury VAT</span>
						</div>
					</article>
					<article
						className='p-2 sm:pb-4 lg:pl-6 mb:pl-10 gap-x-12 max-w-[84rem] outline outline-[1px] outline-dark28 rounded-3xl lg:grid flex flex-col'
						style={{
							gridTemplateColumns: '2fr 1fr',
						}}>
						<section className='py-7 px-2 lg:px-0'>
							<h2 className='text-dark28 font-semibold text-2xl'>Pakiet Premium</h2>
							<p className='mt-5 text-commonText'>
								Odkryj pełen potencjał naszego pakietu Premium, dostosowanego do potrzeb rozwijających się biznesów.
								Maksymalizuj lojalność klientów i czerp korzyści z zaawansowanych funkcji
							</p>
							<div className='text-dark28 relative mt-10'>
								<b className='text-sm font-semibold relative bg-white z-10 pr-2'>W cenie</b>
								<hr className='absolute z-0 top-1/2 translate-y-1/2 border-dark28 w-full right-0' />
							</div>
							<ul className='mt-8 w-full flex flex-col sm:grid grid-cols-2 h-max gap-y-7 gap-x-3'>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>Aplikacja mobilna dla klientów</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>Personalizacja karty lojalnościowej</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>Powiadomienia Push</span>
								</li>
								<li className='flex items-center gap-x-4'>
									<FontAwesomeIcon icon={faCheck} className='h-4 text-dark28' />
									<span className='text-sm text-commonText'>Wsparcie Techniczne</span>
								</li>
							</ul>
						</section>
						<div className='h-full lg:w-[26rem] bg-dark28 flex items-center justify-center flex-col rounded-2xl lg:py-0 py-10'>
							<b className='text-white'>Miesięcznie</b>
							<h1 className='text-5xl text-white font-semibold'>
								149.99 <b>zł</b>
							</h1>
							<button className='py-4 px-7 bg-red rounded-xl font-semibold text-white mt-6'>Wkrótce</button>
							<span className='text-xs text-white mt-5'>Wystawiamy faktury VAT</span>
						</div>
					</article>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Pricing;
