import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<main className='min-h-screen w-full flex justify-center'>
				<div className='flex justify-between items-center w-9/12 h-screen'>
					<section>
						<h1 className='text-8xl text-dark28 mb-6'>
							Błąd <b className='text-8xl text-red font-semibold'>404</b>.
						</h1>
						<span className='text-2xl text-dark28'>Strona nie znaleziona</span>
					</section>
					<img className='h-[40rem]' src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Ftoilet-coffee.png&w=640&q=75' alt='' />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default NotFound;
