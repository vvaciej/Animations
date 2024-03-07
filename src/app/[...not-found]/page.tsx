import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<main className='md:min-h-screen h-max w-full flex justify-center'>
				<div className='flex md:justify-between gap-y-12 items-center xl:w-9/12 w-11/12 md:flex-row flex-col md:mt-0 mt-32 md:h-screen'>
					<section className='text-center'>
						<h1 className='xl:text-8xl sm:text-6xl text-5xl text-dark28 md:mb-6 mb-3'>
							Błąd <b className='xl:text-8xl sm:text-6xl text-5xl text-red font-semibold'>404</b>.
						</h1>
						<span className='md:text-2xl text-xl text-dark28'>Strona nie znaleziona</span>
					</section>
					<img
						className='lg:h-[40rem] sm:h-[30rem] h-[25rem] w-max object-cover'
						src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Ftoilet-coffee.png&w=640&q=75'
						alt=''
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default NotFound;
