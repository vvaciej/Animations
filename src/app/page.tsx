import Link from 'next/link';

export default function Home() {
	return (
		<div className='bg-white h-screen w-full text-black flex justify-center'>
			<div className='w-[calc(100%-32rem)]'>
				<div>
					<header className='h-[90px] items-center flex justify-between'>
						<Link href='/' className='text-3xl font-extrabold cursor-pointer'>
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
					</header>
				</div>
			</div>
		</div>
	);
}
