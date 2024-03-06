import Link from 'next/link';

const Navbar = () => {
	return (
		<>
			<div className='before:w-full before:content-[""] before:fixed before:h-[90px] before:backdrop-blur-xl before:z-10 before:top-0 before:left-0'></div>
			<header className='fixed w-full z-10 flex justify-center before:content-[""] h-[90px] bg-headerBg'>
				<div className='w-[90rem] h-full relative z-20'>
					<nav className='items-center flex justify-between h-full'>
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
								<Link href={'/features'} className='cursor-pointer hover:text-red text-[18px]'>
									Funkcjonalność
								</Link>
							</li>
							<li>
								<Link href={'/pricing'} className='cursor-pointer hover:text-red text-[18px]'>
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
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
