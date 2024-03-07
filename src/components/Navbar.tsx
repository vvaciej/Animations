'use client';

import { faBars, faChevronRight, faHamburger, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuDropdownActive, setMenuDropdownActive] = useState<boolean>(false);

	return (
		<>
			<div className='before:w-full before:content-[""] before:fixed before:h-[70px] lg:before:h-[90px] before:backdrop-blur-xl before:z-10 before:top-0 before:left-0'></div>
			<header className='fixed w-full z-10 flex justify-center before:content-[""] h-[70px] lg:h-[90px] bg-headerBg'>
				<div className='xl:w-[77rem] w-11/12 h-full relative z-20'>
					<nav className='items-center flex justify-between h-full'>
						<Link href='/' className='sm:text-4xl text-3xl font-extrabold cursor-pointer text-dark28'>
							vvaciej
						</Link>
						<ul className='lg:flex hidden items-center gap-x-10 text-commonText'>
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
								<Link href={'/faq'} className='cursor-pointer hover:text-red text-[18px]'>
									FAQ
								</Link>
							</li>
						</ul>
						<section className='lg:flex hidden items-center gap-x-4'>
							<button className='flex items-center gap-x-2 outline outline-1 outline-lightGray226 px-4 py-2 rounded hover:bg-lightGray247'>
								<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
								<span className='text-commonText'>PL</span>
							</button>
							<button className='py-4 px-8 text-center rounded-xl text-white font-semibold bg-red'>Wypróbuj</button>
						</section>
						<section className='relative lg:hidden block'>
							<button className='p-2' onClick={() => setMenuDropdownActive(true)}>
								<FontAwesomeIcon className='h-6 text-dark28' icon={faBars} />
							</button>
						</section>
					</nav>
				</div>
			</header>
			<div
				className={`fixed inset-0 h-full w-full bg-white z-20 lg:hidden flex items-center flex-col px-4 py-12 justify-between ${
					isMenuDropdownActive ? 'flex' : 'hidden'
				}`}>
				<button className='p-2 absolute right-10 top-6' onClick={() => setMenuDropdownActive(false)}>
					<FontAwesomeIcon className='h-5 text-dark28' icon={faX} />
				</button>
				<section className='w-full text-center'>
					<h1 className='text-4xl font-extrabold cursor-pointer text-dark28 mb-7'>vvaciej</h1>
					<button className='flex items-center justify-center gap-x-2 outline outline-1 outline-lightGray226 w-full px-4 py-2 rounded hover:bg-lightGray247'>
						<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
						<span className='text-commonText'>PL</span>
					</button>
				</section>
				<section className='w-full flex flex-col gap-y-4'>
					<Link onClick={() => setMenuDropdownActive(false)}
						href={'/'}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Oferta</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={'/features'}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Funkcjonalność</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={'/pricing'}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Cennik</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={'/faq'}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>FAQ</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
				</section>
				<button className='py-4 px-8 text-center rounded-xl text-white font-semibold bg-red w-full'>Wypróbuj</button>
			</div>
		</>
	);
};

export default Navbar;
