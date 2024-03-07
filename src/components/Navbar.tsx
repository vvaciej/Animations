'use client';

import { faBars, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRef, useState } from 'react';
import getCookie from '../helpers/GetCookie';
import { useEffect } from 'react';

const Navbar = () => {
	const [isMenuDropdownActive, setMenuDropdownActive] = useState<boolean>(false);
	const [langSelected, setLangSelected] = useState<string>(`${getCookie('langChoosed')}`);

	useEffect(() => {
		document.cookie = `langChoosed=${langSelected}; path=/`;
	}, [langSelected]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = window.location.pathname;
			const urlLang = url.startsWith('/en') ? 'english' : 'polish';
			setLangSelected(urlLang);
		}
	}, []);

	const [isLangDropdownActive, setLangDropdownActive] = useState<boolean>(false);

	const langDropdownBtn = useRef<HTMLButtonElement>(null);
	const langDropdownRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<div className='before:w-full before:content-[""] before:fixed before:h-[70px] lg:before:h-[90px] before:backdrop-blur-xl before:z-10 before:top-0 before:left-0'></div>
			<header className='fixed w-full z-10 flex justify-center before:content-[""] h-[70px] lg:h-[90px] bg-headerBg'>
				<div className='xl:w-[77rem] w-11/12 h-full relative z-20'>
					<nav className='items-center flex justify-between h-full'>
						<Link
							href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`}
							className='sm:text-4xl text-3xl font-extrabold cursor-pointer text-dark28'>
							vvaciej
						</Link>
						<ul className='lg:flex hidden items-center gap-x-10 text-commonText'>
							<li>
								<Link
									href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`}
									className='cursor-pointer hover:text-red text-[18px]'>
									Oferta
								</Link>
							</li>
							<li>
								<Link
									href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/features`}
									className='cursor-pointer hover:text-red text-[18px]'>
									Funkcjonalność
								</Link>
							</li>
							<li>
								<Link
									href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/pricing`}
									className='cursor-pointer hover:text-red text-[18px]'>
									Cennik
								</Link>
							</li>
							<li>
								<Link
									href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/faq`}
									className='cursor-pointer hover:text-red text-[18px]'>
									FAQ
								</Link>
							</li>
						</ul>
						<section className='lg:flex hidden items-center gap-x-4'>
							<section className='relative'>
								<button
									className='flex items-center gap-x-2 outline outline-1 outline-lightGray226 px-4 py-2 rounded hover:bg-lightGray247'
									onClick={() => setLangDropdownActive(!isLangDropdownActive)}>
									{langSelected === 'english' ? (
										<img className='h-7' src='https://img.icons8.com/?size=96&id=15534&format=png' alt='uk flag' />
									) : (
										<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
									)}
									<span className='text-commonText'>{getCookie('langChoosed') === 'english' ? 'EN' : 'PL'}</span>
								</button>
								<div
									className={`absolute rounded-lg top-12 w-52 h-20 right-0 bg-white shadow-lg flex-col ${
										isLangDropdownActive ? 'flex' : 'hidden'
									}`}>
									<button
										onClick={() => {
											setLangDropdownActive(false);
											setLangSelected('polish');
											const currentPath = window.location.pathname;
											const newPath = currentPath.startsWith('/pl') ? currentPath.replace('/pl', '/en') : '/en';
											window.location.href = newPath;
										}}
										className={`h-full w-full text-left px-4 flex items-center gap-x-2 hover:bg-lightGray226  ${
											langSelected === 'english' ? 'bg-lightGray226' : ''
										}`}>
										<img className='h-7' src='https://img.icons8.com/?size=96&id=15534&format=png' alt='uk flag' />
										<span className='text-sm font-medium text-commonText'>English</span>
									</button>
									<button
										onClick={() => {
											setLangDropdownActive(false);
											setLangSelected('english');
											const currentPath = window.location.pathname;
											const newPath = currentPath.startsWith('/en') ? currentPath.replace('/en', '/pl') : '/pl';
											window.location.href = newPath;
										}}
										className={`h-full w-full text-left px-4 flex items-center gap-x-2 hover:bg-lightGray226 ${
											langSelected === 'english' ? '' : 'bg-lightGray226'
										}`}>
										<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
										<span className='text-sm font-medium text-commonText'>Polski</span>
									</button>
								</div>
							</section>
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
				<button className='p-2 absolute right-6 top-5' onClick={() => setMenuDropdownActive(false)}>
					<FontAwesomeIcon className='h-5 text-dark28' icon={faX} />
				</button>
				<section className='w-full text-center'>
					<h1 className='text-4xl font-extrabold cursor-pointer text-dark28 mb-7'>vvaciej</h1>
					<section className='relative w-full'>
						<button
							className='flex items-center gap-x-2 outline outline-1 outline-lightGray226 px-4 py-2 rounded hover:bg-lightGray247 w-full justify-center'
							onClick={() => setLangDropdownActive(!isLangDropdownActive)}>
							{langSelected === 'english' ? (
								<img className='h-7' src='https://img.icons8.com/?size=96&id=15534&format=png' alt='uk flag' />
							) : (
								<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
							)}
							<span className='text-commonText'>{getCookie('langChoosed') === 'english' ? 'EN' : 'PL'}</span>
						</button>
						<div
							className={`absolute rounded-lg top-12 w-full h-20 right-0 bg-white shadow-lg flex-col ${
								isLangDropdownActive ? 'flex' : 'hidden'
							}`}>
							<button
								onClick={() => {
									setLangSelected('polish');
									const currentPath = window.location.pathname;
									const newPath = currentPath.startsWith('/pl') ? currentPath.replace('/pl', '/en') : '/en';
									window.location.href = newPath;
								}}
								className={`h-full w-full text-left px-4 flex items-center gap-x-2 hover:bg-lightGray226  ${
									langSelected === 'english' ? 'bg-lightGray226' : ''
								}`}>
								<img className='h-7' src='https://img.icons8.com/?size=96&id=15534&format=png' alt='uk flag' />
								<span className='text-sm font-medium text-commonText'>English</span>
							</button>
							<button
								onClick={() => {
									setLangSelected('english');
									const currentPath = window.location.pathname;
									const newPath = currentPath.startsWith('/en') ? currentPath.replace('/en', '/pl') : '/pl';
									window.location.href = newPath;
								}}
								className={`h-full w-full text-left px-4 flex items-center gap-x-2 hover:bg-lightGray226 ${
									langSelected === 'english' ? '' : 'bg-lightGray226'
								}`}>
								<img className='h-7' src='https://img.icons8.com/?size=256&id=17964&format=png' alt='poland flag' />
								<span className='text-sm font-medium text-commonText'>Polski</span>
							</button>
						</div>
					</section>
				</section>
				<section className='w-full flex flex-col gap-y-4'>
					<Link
						onClick={() => setMenuDropdownActive(false)}
						href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Oferta</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/features`}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Funkcjonalność</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/pricing`}
						className='flex items-center justify-between gap-x-2 outline outline-1 outline-lightGray226 w-full px-6 py-3 pr-8 rounded-xl hover:bg-lightGray247'>
						<span className='text-xl text-dark28'>Cennik</span>
						<FontAwesomeIcon className='h-3 text-dark28' icon={faChevronRight} />
					</Link>
					<Link
						href={`/${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}/faq`}
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
