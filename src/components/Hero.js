import React from 'react'
import { ReactComponent as GithubLogo } from 'svg/github.svg'
import { ReactComponent as LinkedInLogo } from 'svg/linkedin.svg'
import { ReactComponent as InstagramLogo } from 'svg/instagram.svg'
import { ReactComponent as BetterCartLogo } from 'svg/bettercart.svg'

export default () => {
	return (
		<div className="px-4 lg:px-40">
			<div className="flex flex-col items-start justify-center min-h-screen py-8 m-auto lg:py-40">
				<div className="w-full">
					<div className="mb-1 text-xl font-light text-lime">Hi, my name is</div>
					<div className="text-6xl font-light font-bold leading-none text-white">
						<div className="block lg:inline">Dan </div>
						<div className="block lg:inline">Wetherald.</div>
					</div>
					<div className="mt-4 text-6xl font-bold leading-none text-gray-500 lg:mt-2">
						<div className="block whitespace-no-wrap lg:inline">code. </div>
						<div className="block whitespace-no-wrap lg:inline">saas. </div>
						<div className="block whitespace-no-wrap lg:inline">ecomm. </div>
						<div className="block whitespace-no-wrap lg:inline">fb ads. </div>
					</div>
					<div className="mt-8 text-xl font-light text-gray-500">
						Based in Chicago. Studied computer science at Carthage College in Kenosha WI. I run multiple 7 figure online
						businesses including online stores and sass. I specialize in ecommerce based solutions. Simply put, I make
						technology that increases your conversion rates & average order value. Checkout my latest company{' '}
						<a className="text-white underline hover:text-lime" href="https://getbettercart.com" target="blank">
							Better Cart
						</a>
						.
					</div>

					<div className="w-full mt-6 lg:inline-block lg:w-auto">
						<a href="mailto:dan.wetherald@gmail.com">
							<div className="w-auto p-4 text-sm border cursor-pointer border-lime text-lime hover:text-white">
								Get In Touch
							</div>
						</a>
					</div>

					<div className="w-full mt-6">
						<div className="flex items-center">
							<div>
								<a href="https://getbettercart.com" target="blank">
									<BetterCartLogo className="w-6 h-6 mr-4 text-white fill-current hover:text-lime" />
								</a>
							</div>
							<div>
								<a href="https://github.com/dan003400" target="blank">
									<GithubLogo className="w-6 h-6 text-white fill-current hover:text-lime" />
								</a>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/dwetherald/" target="blank">
									<LinkedInLogo className="w-6 h-6 mx-4 text-white fill-current hover:text-lime" />
								</a>
							</div>
							<div>
								<a href="https://www.instagram.com/danwetherald/" target="blank">
									<InstagramLogo className="w-6 h-6 text-white fill-current hover:text-lime" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
