import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import { faNewspaper, faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<div className='relative'>
			<Navbar />
			<div className="h-96 w-full bg-no-repeat absolute bg-cover top-0 bg-[url('https://stamply.pl/images/lets-talk.webp')] flex justify-center items-center flex-col text-center gap-6 pt-14">
				<h1 className='text-6xl font-semibold text-lightGray247'>Kontakt</h1>
				<p className='text-lightGray247 text-lg w-[43rem]'>
					Twój głos jest dla nas ważny, dlatego chętnie nawiążemy z Tobą dialog i wspólnie stworzymy jeszcze lepsze
					doświadczenie z Stamply.pl.
				</p>
			</div>
			<main className='min-h-screen relative'>
				<div className='w-[88rem] backdrop-blur h-[40rem] z-10 absolute right-1/2 bottom-[-30px] rounded-xl translate-x-1/2 p-16 shadow-md bg-headerBg flex justify-between gap-24'>
					<section className='w-full'>
						<h1 className='text-4xl font-semibold text-dark28'>Napisz do nas</h1>
						<form className='mt-8 flex flex-col gap-y-12'>
							<input
								type='text'
								className='w-full h-12 bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5  text-dark28'
							/>
							<input
								type='text'
								className='w-full h-12 bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5  text-dark28'
							/>
							<textarea className='h-32 w-full bg-lightGray247 outline outline-[1px] outline-lightGray226 rounded-xl pl-5'></textarea>
							<button className='bg-red text-white font-semibold h-14 rounded-xl'>Wyślij</button>
						</form>
					</section>
					<section className='w-full flex gap-6'>
						<FontAwesomeIcon className='h-8 text-dark28' icon={faAddressCard} />
						<section>
							<h3 className='font-semibold text-dark28 mb-2'>Adres e-mail</h3>
							<span>maciejskok2004@gmail.com</span>
						</section>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
