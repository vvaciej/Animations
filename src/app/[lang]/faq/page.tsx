import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FAQ = () => {
	return (
		<div>
			<Navbar />
			<main className='min-h-screen pt-32 flex items-center flex-col'>
				<h1 className='md:text-6xl text-5xl font-semibold text-dark28 text-center'>FAQ</h1>
				<p className='text-center mt-7 text-md md:text-lg text-commonText max-w-[40rem] px-4'>
					Gotowe odpowiedzi na Twoje pytania czekają, aby ułatwić Ci drogę do sukcesu biznesowego z aplikacją Stamply.
				</p>
				<div className='mt-12 h-full w-11/12 xl:w-[77rem]'>
					<hr className='border-red border-[1px] w-full' />
					<div className='mt-6 grid lg:grid-cols-2 w-full h-full gap-6'>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>Co to jest program lojalnościowy</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Program lojalnościowy to strategia marketingowa, która nagradza stałych klientów za ich lojalność
									wobec marki. W naszym przypadku, to zbieranie pieczątek za zakupy, co wpływa korzystnie na
									doświadczenie zakupowe.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Dlaczego warto mieć program lojalnościowy w swojej firmie?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Program lojalnościowy pomaga zwiększyć zaangażowanie klientów, budować trwałe relacje i zwiększać
									sprzedaż. Klienci oczekują nagród, a program lojalnościowy jest kluczowym narzędziem do pozyskania i
									utrzymania klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Jakie są oczekiwania klientów wobec programu lojalnościowego?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Klienci oczekują atrakcyjnych nagród, prostego systemu zbierania punktów, oraz korzyści dostępnych
									tylko dla uczestników programu. Dodatkowo, oczekują szybkich i klarownych informacji na temat swojego
									konta i dostępnych nagród.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Jakie są zalety mobilnej aplikacji lojalnościowej?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Aplikacja mobilna to wygoda dla klientów! Umożliwia im zbieranie punktów i korzystanie z nagród
									bezpośrednio za pomocą telefonu. To również efektywny sposób na utrzymanie interakcji z klientami,
									informując ich o nowościach i promocjach poprzez powiadomienia push.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Jak działa aplikacja do zbierania pieczątek?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Aplikacja umożliwia klientom zbieranie pieczątek za każdy zakup. Po osiągnięciu określonej liczby
									pieczątek, klient otrzymuje dostęp do określonych nagród. Aplikacja jest intuicyjna i łatwa w użyciu,
									co przekłada się na zwiększenie lojalności klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Czy mogę dostosować program lojalnościowy do specyfiki mojego biznesu?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Tak, nasza platforma umożliwia dostosowanie programu lojalnościowego do unikalnych potrzeb Twojego
									biznesu. Możesz definiować zasady zbierania znaczków, okresy promocyjne oraz personalizować nagrody,
									aby lepiej odpowiadały oczekiwaniom Twoich klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Jakie są korzyści z programu lojalnościowego dla małych firm?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Program lojalnościowy dla małych firm umożliwia budowanie trwałych relacji z klientami, pomaga w
									zwiększeniu ich wartości i zachęca do częstszych zakupów. To narzędzie, które pomoże Ci zyskać
									lojalność klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Czy program lojalnościowy pomaga w budowaniu marki?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Tak, program lojalnościowy jest skutecznym narzędziem w budowaniu marki. Daje klientom dodatkowy
									powód, aby pozostać wiernymi Twojej marce, jednocześnie zwiększając rozpoznawalność marki wśród
									potencjalnych klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Czy program lojalnościowy wpływa na zdobywanie nowych klientów?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Tak, program lojalnościowy nie tylko utrzymuje obecnych klientów, ale także przyciąga nowych. Klienci
									są bardziej skłonni wybrać firmę, która oferuje atrakcyjne programy nagród, co przekłada się na
									zdobywanie nowych klientów.
								</p>
							</main>
						</article>
						<article className='p-4 px-5 bg-lightGray247 rounded-xl'>
							<header className='flex justify-between items-center gap-x-2'>
								<h1 className='lg:text-xl text-lg text-dark28 font-semibold'>
									Jakie są trendy w dziedzinie programów lojalnościowych?
								</h1>
								<FontAwesomeIcon className='h-5 text-dark28' icon={faCircleQuestion} />
							</header>
							<main>
								<p className='mt-4 text-commonText text-md md:text-lg'>
									Obecnie trendy obejmują personalizację nagród, wykorzystanie technologii mobilnych, integrację z
									mediami społecznościowymi oraz zrównoważone i społeczne aspekty programów lojalnościowych. Nasza
									platforma jest na bieżąco z tymi trendami, aby sprostać oczekiwaniom rynku.
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
