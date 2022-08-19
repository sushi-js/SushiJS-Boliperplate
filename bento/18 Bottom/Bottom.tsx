import Link from 'next/link'
import { useRouter } from 'next/router'

const BottomNav = () => {
	const router = useRouter()

	return (
		<div className='sm:hidden'>
			<nav className='fixed bottom-0 w-full border-t bg-zinc-100 pb-safe dark:border-zinc-800 dark:bg-zinc-900'>
				<div className='mx-auto flex h-16 max-w-md items-center justify-around px-6'>
					{links.map(({ href, label, icon }) => (
						<Link key={label} href={href}>
							<a
								className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
									router.pathname === href
										? 'text-indigo-500 dark:text-indigo-400'
										: 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
								}`}
							>
								{icon}
								<span className='text-xs text-zinc-600 dark:text-zinc-400'>
									{label}
								</span>
							</a>
						</Link>
					))}
				</div>
			</nav>
		</div>
	)
}

export default BottomNav

const links = [
	{
		label: 'Portfolio',
		href: 'https://github.com/miguelgargallo',
		icon: (
<svg width="24px" height="24px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <g id="Group_91" data-name="Group 91" transform="translate(-317 -316)">
    <path id="Path_130" data-name="Path 130" d="M372.68,378H323.32a5.32,5.32,0,0,1-5.32-5.32V330l11-4h37l12,4v42.68A5.32,5.32,0,0,1,372.68,378Z" fill="#FFFFFF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_131" data-name="Path 131" d="M355,367l-7,7-7-7,4-29-4-12h14l-4,12Z" fill="#fff1b6" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <rect id="Rectangle_74" data-name="Rectangle 74" width="24" height="11" transform="translate(336 317)" fill="#FFFFFF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_132" data-name="Path 132" d="M338,338l-8-12,6-9,12,10Z" fill="#FFFFFF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_133" data-name="Path 133" d="M358,338l8-12-6-9-12,10Z" fill="#FFFFFF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <line id="Line_138" data-name="Line 138" x2="6" transform="translate(345.167 338)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_139" data-name="Line 139" x2="12" transform="translate(360 350)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_140" data-name="Line 140" y1="10.667" x2="10.667" transform="translate(343.833 360)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_141" data-name="Line 141" y1="11.236" x2="11.236" transform="translate(341.611 353)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_142" data-name="Line 142" y1="9.64" x2="9.64" transform="translate(342.541 345.931)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
    <line id="Line_143" data-name="Line 143" y1="7.555" x2="7.555" transform="translate(343.583 339.972)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="2"/>
  </g>
</svg>
),
},
{
		label: 'Learn',
		href: 'https://github.com/itamaesanorg',
		icon: (
			<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path fill="#FFFFFF" fill-rule="evenodd" d="M5.962 2.513a.75.75 0 01-.475.949l-.816.272a.25.25 0 00-.171.237V21.25c0 .138.112.25.25.25h14.5a.25.25 0 00.25-.25V3.97a.25.25 0 00-.17-.236l-.817-.272a.75.75 0 01.474-1.424l.816.273A1.75 1.75 0 0121 3.97v17.28A1.75 1.75 0 0119.25 23H4.75A1.75 1.75 0 013 21.25V3.97a1.75 1.75 0 011.197-1.66l.816-.272a.75.75 0 01.949.475z"/>
			<path fill="#FFFFFF" fill-rule="evenodd" d="M7 1.75C7 .784 7.784 0 8.75 0h6.5C16.216 0 17 .784 17 1.75v1.5A1.75 1.75 0 0115.25 5h-6.5A1.75 1.75 0 017 3.25v-1.5zm1.75-.25a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25h-6.5z"/>
			</svg>
		),
	},
	{
		label: 'News',
		href: 'https://newsroom.pencil.domains/',
		icon: (
			<svg width="24" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
			<path fill="#FFFFFF" d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"/></svg>
			),
		},
		{
		label: 'Telegram',
		href: 'https://web.telegram.org/k/',
		icon: (
			<svg width="24" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<path fill="#229ED9" d="M16 0.5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zM23.613 11.119l-2.544 11.988c-0.188 0.85-0.694 1.056-1.4 0.656l-3.875-2.856-1.869 1.8c-0.206 0.206-0.381 0.381-0.781 0.381l0.275-3.944 7.181-6.488c0.313-0.275-0.069-0.431-0.482-0.156l-8.875 5.587-3.825-1.194c-0.831-0.262-0.85-0.831 0.175-1.231l14.944-5.763c0.694-0.25 1.3 0.169 1.075 1.219z"/>
		  </svg>
		  ),
		},
		{
		label: 'Whatsapp',
		href: 'https://wa.me/14077067844',
		icon: (
			<svg width="24" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path fill="none" d="M0 0h24v24H0z"/>
				<path fill="#25D366" fill-rule="nonzero" d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/>
			</g>
		</svg>
		),
	},
]
