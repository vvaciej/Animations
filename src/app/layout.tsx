'use client';

import { Inter } from 'next/font/google';
import './../../styles/globals.css';
import './../../styles/css/global.css';
import '../data/i18n';
import { useEffect } from 'react';
import getCookie from '../helpers/GetCookie';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsentComponent from '../components/cookie/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = window.location.pathname;
			const urlLang = url.startsWith('/en') ? 'english' : 'polish';
			document.cookie = `langChoosed=${urlLang}; path=/`;
		}

		const scrollYPosition = Number(getCookie('scrollY'));

		window.scrollTo(0, scrollYPosition);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollYPosition = window.scrollY;
		document.cookie = `scrollY=${scrollYPosition}; path=/`;
	};

	return (
		<>
			<html lang={`${getCookie('langChoosed') === 'english' ? 'en' : 'pl'}`} className='light h-max relative'>
				<head>
					<link rel='icon' href='/next.svg' />
					<meta name='theme-color' content='#E81948' />
					<meta property='og:title' content='Program lojalnościowy | vvaciej' />
					<meta property='og:image' content='/next.svg' />
					<meta
						name='description'
						content=''
					/>
					<meta
						name='keywords'
						content=''
					/>
				</head>
				<body className={inter.className}>{children}</body>
			</html>
			<CookieConsentComponent />
		</>
	);
}