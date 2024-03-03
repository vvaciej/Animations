import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowRight,
	faCartPlus,
	faChevronDown,
	faMinus,
	faSmile,
	faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
	return (
		<div className='bg-white h-max w-full text-black flex justify-center mb-40 relative'>
			<div className='before:w-full before:fixed before:h-[90px] before:backdrop-blur before:z-10 before:top-0 before:left-0 before:opacity-95'>
				wef
			</div>
			<header className='fixed w-full z-10 flex justify-center before:content-[""] h-[90px] bg-headerBg'>
				<div className='w-[90rem] h-full relative z-20'>
					<div className='items-center flex justify-between h-full'>
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
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
									Funkcjonalność
								</Link>
							</li>
							<li>
								<Link href={'/'} className='cursor-pointer hover:text-red text-[18px]'>
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
					</div>
				</div>
			</header>
			<div className='w-[90rem]'>
				<main className='w-full relative z-[1] flex flex-col items-center pb-32 mt-24'>
					<div className='flex justify-between items-center mt-16 gap-x-12'>
						<section className='w-4/5'>
							<h1 className='xl:text-[90px] text-[80px] text-dark28 leading-none'>
								Zwiększ lojalność <br />
								<b className='xl:text-[90px] text-[80px] text-red font-medium'>klientów</b>.
							</h1>
							<p className='mt-7 text-2xl'>
								Zbieraj dane, zrozum swoich klientów i nagradzaj ich za lojalność. Tworzymy{' '}
								<b className='text-2xl text-dark28'>personalizowane karty lojalnościowe</b>, które nie tylko zatrzymają
								klientów, ale także zmotywują ich do częstszych zakupów.
							</p>
						</section>
						<img
							className='w-[29%] max-w-full'
							src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fcrazy-coffee.webp&w=640&q=75'
							alt=''
						/>
					</div>
					<button className='mt-12 flex items-center flex-col'>
						<div className='w-4 h-6 outline outline-2 outline-commonText rounded-xl flex justify-center items-center'>
							<FontAwesomeIcon className='animate-wiggle h-3 rotate-90 text-commonText' icon={faMinus} />
						</div>
						<section className='mt-2 text-dark28'>
							<FontAwesomeIcon className='h-3  animate-opacity1' icon={faChevronDown} />
							<FontAwesomeIcon className='h-3  animate-opacity2' icon={faChevronDown} />
							<FontAwesomeIcon className='h-3  animate-opacity3' icon={faChevronDown} />
						</section>
					</button>
					<div
						className='mt-10 w-full h-48 bg-white rounded-lg flex items-center px-32'
						style={{
							boxShadow: 'rgba(50, 50, 93, 0.25) 0px 10px 20px -30px, rgba(0, 0, 0, 0.15) 0px 25px 60px 15px',
						}}>
						<div className='flex gap-x-6 h-28 items-center w-full border-r-[1px] border-lightGray226'>
							<FontAwesomeIcon className='h-10 text-dark28' icon={faUniversalAccess} />
							<section>
								<b className='text-xl font-semibold'>10x</b>
								<h2 className='text-lg'>Wzrost retencji</h2>
							</section>
						</div>
						<div className='flex gap-x-6 h-28 items-center justify-center w-full border-r-[1px] border-lightGray226'>
							<FontAwesomeIcon className='h-10 text-dark28' icon={faCartPlus} />
							<section>
								<b className='text-xl font-semibold'>50%</b>
								<h2 className='text-lg'>Wzrost konwersji</h2>
							</section>
						</div>
						<div className='flex gap-x-6 items-center w-full justify-end'>
							<FontAwesomeIcon className='h-10 text-dark28' icon={faSmile} />
							<section>
								<b className='text-xl font-semibold'>99%</b>
								<h2 className='text-lg'>Pozytywne opinie</h2>
							</section>
						</div>
					</div>
					<div className='h-screen flex items-center justify-center w-[70rem] gap-x-32'>
						<img
							src='https://stamply.pl/_next/image/?url=%2Fimages%2Fcharacters%2Fastronaut.webp&w=640&q=75'
							className='h-[28rem]'
							alt=''
						/>
						<section className='flex flex-col gap-y-4'>
							<h1 className='text-6xl text-dark28 font-semibold leading-[3.4rem]'>
								Wirtualne pieczątki realne korzyści
							</h1>
							<p className='font-medium text-xl text-commonText'>
								Przy każdym zakupie zbieraj wirtualne pieczątki, które wymienisz na atrakcyjne nagrody. Im więcej
								pieczątek, tym lepsze prezenty! Twój sklep, Twoje zasady, Twoje nagrody. Prosto i satysfakcjonująco!
							</p>
							<button className='flex items-center text-commonText font-medium'>
								Zobacz jak to działa <FontAwesomeIcon icon={faArrowRight} className='h-4 ml-3 text-commonText' />
							</button>
						</section>
					</div>
				</main>
			</div>
			<svg className='absolute h-[90%] opacity-20 z-[0]' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
				<defs>
					<pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
						<rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'></rect>
						<path
							d='M3.25 10h13.5M10 3.25v13.5'
							strokeLinecap='square'
							strokeWidth='0.5'
							stroke='#a1a1a1'
							fill='none'></path>
					</pattern>
				</defs>
				<rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)'></rect>
			</svg>
		</div>
	);
}
