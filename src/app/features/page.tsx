import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faMedal, faQrcode, faRocket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Features = () => {
	return (
		<div>
			<Navbar />
			<main className='min-h-screen pt-32 flex items-center flex-col'>
				<h1 className='text-6xl font-semibold text-dark28 text-center'>Jak to działa?</h1>
				<p className='text-center mt-7 text-lg text-commonText max-w-[40rem]'>
					Odkryj, jak możesz skutecznie wzmacniać relacje z klientami, zwiększać sprzedaż i wyróżniać się na rynku
					dzięki aplikacji Stamply.
				</p>
				<div className='mt-12 relative max-w-[65rem] pt-6'>
					<div className='after:h-full after:absolute after:w-1 after:bg-red after:right-1/2 after:transform-x-1/2 flex flex-col w-full h-full gap-x-28 gap-y-6'>
						<div></div>
						<div className='w-full relative right-0 mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute right-1/2 translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-7 text-red' icon={faRocket}></FontAwesomeIcon>
							</div>
							<section className='w-1/2 float-right pl-16'>
								<h2 className='font-semibold text-dark28 text-2xl mb-4'>Rejestracja i konfiguracja</h2>
								<p className='text-commonText text-xl'>
									Zarejestruj swój biznes w kilku prostych krokach. Dostęp do intuicyjnego panelu administracyjnego
									umożliwi łatwą konfigurację i personalizację programu lojalnościowego.
								</p>
							</section>
						</div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute right-1/2 translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-7 text-red' icon={faQrcode}></FontAwesomeIcon>
							</div>
							<section className='text-right w-1/2 pr-16'>
								<h2 className='font-semibold text-dark28 text-2xl mb-4'>Otrzymaj naklejki</h2>
								<p className='text-commonText text-xl'>
									Otrzymaj spersonalizowane naklejki z unikalnymi kodami QR. Wystarczy je umieścić w swoim lokalu, by
									klienci mogli łatwo zainstalować aplikację i zacząć zbierać punkty.
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute right-1/2 translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faUserPlus}></FontAwesomeIcon>
							</div>
							<section className='text-left w-1/2 pl-16 float-right'>
								<h2 className='font-semibold text-dark28 text-2xl mb-4'>Łatwa rejestracja klienta</h2>
								<p className='text-commonText text-xl'>
									Twoi klienci dokonują szybkiej rejestracji w zaledwie jednym kroku. Każdy zakup to nowe punkty, które
									mogą wymieniać na atrakcyjne nagrody.
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-12'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute right-1/2 translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faMedal}></FontAwesomeIcon>
							</div>
							<section className='text-right w-1/2 pr-16 float-left'>
								<h2 className='font-semibold text-dark28 text-2xl mb-4'>Zbieraj punkty i wymieniaj</h2>
								<p className='text-commonText text-xl'>
									Klienci korzystają z aplikacji, skanując kody QR i gromadząc punkty, które później wymieniają na
									atrakcyjne nagrody.
								</p>
							</section>
						</div>
						<div></div>
						<div className='w-full relative mb-2'>
							<div className='h-12 flex items-center justify-center w-12 outline outline-[3px] outline-red rounded-[50%] absolute right-1/2 translate-x-1/2 z-[5] bg-white top-16'>
								<FontAwesomeIcon className='h-6 text-red' icon={faArrowUp}></FontAwesomeIcon>
							</div>
							<section className='text-left w-1/2 pl-16 float-right'>
								<h2 className='font-semibold text-dark28 text-2xl mb-4'>Analizy i marketing</h2>
								<p className='text-commonText text-xl'>
									Otrzymuj raporty i analizy, które pomagają zrozumieć preferencje klientów. Wykorzystuj zdobyte dane do
									skutecznych działań marketingowych i powiadomień, zwiększając zaangażowanie klientów.
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
