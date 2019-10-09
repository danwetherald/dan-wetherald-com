import React from 'react'
import { ReactComponent as GithubLogo } from 'svg/github.svg'
import { ReactComponent as LinkedInLogo } from 'svg/linkedin.svg'
import { ReactComponent as InstagramLogo } from 'svg/instagram.svg'

export default () => {
	return (
		<div className="px-4 lg:px-40">
			<div className="flex min-h-screen flex-col items-start justify-center m-auto py-8 lg:py-40">
				<div className="w-full">
					<div className="text-lime text-xl font-light mb-1">Hi, my name is</div>
					<div className="font-bold text-white text-6xl font-light leading-none">
						<div className="block lg:inline">Dan </div>
						<div className="block lg:inline">Wetherald.</div>
					</div>
					<div className="font-bold text-gray-500 text-6xl leading-none mt-4 lg:mt-2">
						<div className="block lg:inline whitespace-no-wrap">code. </div>
						<div className="block lg:inline whitespace-no-wrap">saas. </div>
						<div className="block lg:inline whitespace-no-wrap">ecomm. </div>
						<div className="block lg:inline whitespace-no-wrap">fb ads. </div>
					</div>
					<div className="font-light text-gray-500 text-lg mt-8">
						Based in Chicago. Studied computer science at Carthage College in Kenosha WI. I run multiple 7 figure online
						businesses including online stores and sass. I specialize in ecommerce based solutions. Simply put, I make
						technology that increases conversion rate & average order value.
					</div>

					<div className="w-full mt-6 lg:inline-block lg:w-auto">
						<a href="mailto:dan.wetherald@gmail.com">
							<div className="w-auto border border-lime p-4 text-lime text-sm cursor-pointer hover:text-white">
								Get In Touch
							</div>
						</a>
					</div>

					<div className="w-full mt-6">
						<div className="flex items-center">
							<div>
								<a href="https://github.com/dan003400" target="blank">
									<GithubLogo className="h-6 w-6 fill-current text-white hover:text-lime" />
								</a>
							</div>
							<div>
								<a href="https://www.linkedin.com/in/dwetherald/" target="blank">
									<LinkedInLogo className="h-6 w-6 mx-4 fill-current text-white hover:text-lime" />
								</a>
							</div>
							<div>
								<a href="https://www.instagram.com/dan003400/" target="blank">
									<InstagramLogo className="h-6 w-6 fill-current text-white hover:text-lime" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}