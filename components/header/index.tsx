import Link from 'next/link';
import { useCallback, useState } from 'react';
import cn from 'classnames';
import Button from '../button';
import Image from 'next/image';
import Logo from './images/logo.svg';
import Menubar from './images/bar.svg';
import Close from './images/close.svg';
import style from './header.module.scss';
import FadeInAnimation from '../../animation/fade';

const Header: React.FC<any> = (props: any) => {
	const navigation = [
		{ name: 'Blog', href: '/blog/', current: true },
		{ name: 'Team', href: '/about/', current: false },
		{ name: 'Case Studies', href: '#', current: false },
		{ name: 'Jobs', href: '/job/', current: false },
	]
	const mobilenavigation = [
		{ name: 'Privacy Policy for Merchants', href: '#', current: false },
		{ name: 'Terms of Service for Merchants', href: '#', current: false },
		{ name: 'Copyright Policy', href: '#', current: false },
		{ name: 'Data Processing Addendum', href: '#', current: false },
		{ name: 'Terms of Service for end users', href: '#', current: false },
		{ name: 'Privacy Policy for end users', href: '#', current: false },
	]
	const [MenuOpen, setMenuOpen] = useState(false);
	const toggleMenu = useCallback(
		() => {
			setMenuOpen(!MenuOpen);
		},
		[MenuOpen],
	);
	return (
		<>
			<FadeInAnimation
				wrapperElement="div"
				direction="down"
				className={style['site-header']}
			>
				<div className='custom-container'>
					<div className='flex justify-between items-center'>
						<Link href="/">
							<a className='inline-flex'>
								<Image
									src={Logo}
									alt="Techmonk"
								/>
							</a>
						</Link>
						<Button
							className={cn('sm:hidden', style['menu-bar'])}
							onClick={toggleMenu}
						>
							<Image
								src={Menubar}
								alt="Techmonk"
							/>
						</Button>
						<div className={cn(MenuOpen ? style.open : '', style['mobile-header'])}>
							<div className={cn(style['menu-header'], 'sm:hidden flex justify-between items-center')}>
								<Link href="/">
									<a className='inline-flex'>
										<Image
											src={Logo}
											alt="Techmonk"
										/>
									</a>
								</Link>
								<Button
									onClick={toggleMenu}
									className={style['close-icon']}
								>
									<Image
										src={Close}
										alt="Techmonk"
									/>
								</Button>
							</div>
							<ul className={cn(style.menu, 'flex')}>
								{navigation.map((item) => (
									<li
										key={item.name}
										className={style['menu-item']}>
										<a
											key={item.name}
											href={item.href}
											className={cn(
												item.current ? 'font-bold' : '', 'inline-block',
												style['menu-link']
											)}
											aria-current={item.current ? 'page' : undefined}
										>
											{item.name}
										</a>
									</li>
								))}
								<li className={cn(style['meta-text'], 'uppercase font-medium')}>Legal</li>
								<li className={style['hide-in-mobile']}>
									<ul className={style['mobile-menu']}>
										{mobilenavigation.map((item) => (
											<li
												key={item.name}
												className={style['menu-item']}>
												<a
													key={item.name}
													href={item.href}
													className={cn(
														item.current ? 'font-bold' : '', 'inline-block',
														style['menu-link']
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</FadeInAnimation>
		</>
	);
};
export default Header;