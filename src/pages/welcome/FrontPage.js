import React, { useEffect } from "react";
import "https://unpkg.com/typewriter-effect@latest/dist/core.js";
import ProjectCard from "./ProjectCard";

export default function FrontPage() {
	useEffect(() => {
		var typewriter = new Typewriter("#main-title", {
			loop: false,
			delay: 75
		});
		typewriter
			.pauseFor(500)
			.typeString('<span class="text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">CPlusPatch</span>')
			.typeString('<span class="inline text-4xl sm:text-7xl"> Web dev and gaming </span>')
			.start();
	}, []);
	return (
		<main className="relative h-screen overflow-scroll bg-gray-900">
			<header className="z-30 flex items-center w-full h-24 sm:h-32">
				<div className="container flex items-center justify-between px-6 mx-auto">
					<div className="text-3xl font-black text-white uppercase">
						CPLUSPATCH
					</div>
				</div>
			</header>
			
			<div className="relative z-20 flex items-center overflow-hidden font-['Exo_2']">
				<div className="container relative flex px-6 py-16 mx-auto">
					<div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
						<span className="w-20 h-2 mb-12 bg-white">
						</span>
						<h1 id="main-title" className="inline text-5xl font-black leading-none text-white uppercase sm:text-8xl">
							<span className="text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">CPlusPatch</span>
							<span className="text-4xl sm:text-7xl">
								Web dev and gaming
							</span>
						</h1>
						<p className="mt-8 font-mono text-sm text-white sm:text-base">
							Official page for my projects and stuff
						</p>
						<div className="flex flex-wrap gap-4 mt-8">
							<a href="/projects"
								className="px-4 py-2 text-white uppercase transition-all duration-200 bg-transparent border-2 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white text-md hover:scale-105">
								Check out my stuff
							</a>
							
							<a href="#footer"
								className="px-4 py-2 text-white uppercase transition-all duration-200 bg-transparent border-2 border-indigo-500 rounded-lg hover:bg-indigo-500 hover:text-white text-md hover:scale-105">
								My socials
							</a>
						</div>
					</div>
					<div className="relative hidden lg:block sm:w-1/3 lg:w-3/5">
						<img src="/assets/macbook-hero.png" className="m-auto translate-x-56 h-[31rem]" />
					</div>
				</div>

			</div>

			<div className="relative max-w-screen-xl p-4 px-4 mx-auto mt-6 sm:px-6 lg:px-8 py-26 lg:mt-20 font-['Exo_2']">
				<div className="relative">
					<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<div className="ml-auto lg:col-start-2 lg:max-w-2xl">
							<p className="text-xl font-semibold leading-6 text-indigo-500 uppercase">
								Skills
							</p>
							<h4 className="mt-2 text-3xl font-extrabold leading-8 text-white sm:text-3xl sm:leading-9 font-bebas-neue">
								Multiple languages and many core design elements
							</h4>
							<p className="mt-4 font-mono text-lg leading-6 text-gray-300">
								I can use many different frameworks and languages, as well as numerous design concepts such as oriented-object programming and proper UI/UX design
							</p>
							<ul className="gap-6 mt-8 font-mono md:grid md:grid-cols-2">
								<li className="mt-6 transition-all duration-200 lg:mt-0 hover:scale-105">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-full drark:bg-transparent">
											<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
												</path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-200">
											PHP, Python, C++, SwiftUI, MySQL
										</span>
									</div>
								</li>
								<li className="mt-6 transition-all duration-200 lg:mt-0 hover:scale-105">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-full drark:bg-transparent">
											<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
												</path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-200">
											HTML, CSS, JavaScript, React, Node.js
										</span>
									</div>
								</li>
								<li className="mt-6 transition-all duration-200 lg:mt-0 hover:scale-105">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-full drark:bg-transparent">
											<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
												</path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-200">
											jQuery, Zepto.js, Bootstrap, Tailwind CSS, Laravel
										</span>
									</div>
								</li>
								<li className="mt-6 transition-all duration-200 lg:mt-0 hover:scale-105">
									<div className="flex">
										<span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-full drark:bg-transparent">
											<svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
												<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
												</path>
											</svg>
										</span>
										<span className="ml-4 text-base font-medium leading-6 text-gray-200">
											Extensive knowledge of Linux and its innerworkings (setup, usage, CLI, management)
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
							<div className="relative space-y-4">
								<div className="flex items-end justify-center space-x-4 lg:justify-start">
									<img className="w-32 transition-all duration-200 rounded-lg shadow-lg md:w-56 hover:scale-105" width="200" src="/assets/laravel.jpg" alt="1"/>
									<img className="w-40 transition-all duration-200 rounded-lg shadow-lg md:w-64 hover:scale-105" width="260" src="/assets/swiftui.jpeg" alt="2"/>
								</div>
								<div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
									<img className="w-24 transition-all duration-200 rounded-lg shadow-lg md:w-40 hover:scale-105" width="170" src="/assets/linux.jpg" alt="3"/>
									<img className="w-32 transition-all duration-200 rounded-lg shadow-lg md:w-56 hover:scale-105" width="200" src="/assets/javascript.png" alt="4"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="relative p-4 px-4 mt-10 sm:px-6 lg:px-8 font-['Exo_2']">
				<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-36 lg:items-center">
					<div className="relative mt-10 -mx-4 overflow-hidden md:-mx-12 lg:mt-0 lg:col-start-2 max-h-[40rem]">
						<img src="/assets/servers.png" alt="illustration" className="relative w-auto mx-auto rounded shadow-lg"/>
					</div>
					<div className="mt-8 lg:col-start-1 md:px-28 lg:mt-0">
						<h4 className="text-3xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
							My experience with general IT and Linux servers
						</h4>
						<ul className="mt-10">
							<li className="transition-all duration-500 hover:translate-x-2">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-6 h-6 bi bi-wrench" viewBox="0 0 16 16">
												<path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-bold leading-6 text-white">
											Installation
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-300">
											Setting up and installing Linux on your machine has become fairly simple nowadays, but using a command line can sometimes confuse people. I know how a computer works and how to install just about any OS to one.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 transition-all duration-500 hover:translate-x-2">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-6 h-6 bi bi-terminal" viewBox="0 0 16 16">
												<path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
												<path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-bold leading-6 text-white">
											<b>CLI</b>
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-300">
											<b className="text-transparent bg-gradient-to-tl from-fuchsia-500 via-red-600 to-orange-400 bg-clip-text">The CLI is a tool</b>,
											and just like any other it takes time and practice to learn the usage of it. I know my way around it and I can use it to my advantage.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 transition-all duration-500 hover:translate-x-2">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
											<svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
												<path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
												</path>
											</svg>
										</div>
									</div>
									<div className="ml-4">
										<h5 className="text-lg font-bold leading-6 text-white">
											PC experience
										</h5>
										<p className="mt-2 text-base leading-6 text-gray-300">
											Experience with Windows, Linux, MacOS, Android and iOS (at least 1 year of use of each)
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="relative p-4 px-4 mt-10 sm:px-6 lg:px-8 font-['Exo_2']">
				<div className="md:px-28">
					<h4 className="text-3xl font-extrabold leading-8 tracking-tight text-white sm:leading-9">
						Projects
					</h4>
				</div>
				<div className="mt-10 md:grid md:grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:gap-16 md:px-28">
					<ProjectCard name="CPlusPatch CMS" desc="A quick CMS system to create webpages" icon="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png">
						<div className="w-full my-2 overflow-hidden rounded">
							<img src="https://camo.githubusercontent.com/3249de77606cfa3c6cdd4faf2b350d82c317acd1dbd79383e98e56e03ebd0dbd/68747470733a2f2f692e696d6775722e636f6d2f717a72786a364c2e706e67" alt="CMS Editor" />
						</div>
						<div className="block m-auto">
							<div>
								<span className="inline-block text-sm text-gray-100">
									Basic features : <span className="font-bold text-white">100</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
							</div>
						</div>
						<div className="block m-auto">
							<div>
								<span className="inline-block text-sm text-gray-100">
									Advanced editor functionality : <span className="font-bold text-white">40</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-2/5 h-full text-xs text-center text-white rounded-full bg-gradient-to-l from-yellow-600 to-red-600"></div>
							</div>
						</div>
						<div className="flex items-center justify-start my-4 space-x-4">
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">JAVASCRIPT</span>
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md">BLOGS</span>
							<a href="https://github.com/CPlusPatch/cpluspatch-cms" className="text-gray-400 transition-colors duration-200 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
								</svg>
							</a>
						</div>
					</ProjectCard>
				
					<ProjectCard name="cpluspatch.com" desc="My personal website (this page)" icon="/assets/laravel.jpg">
						<div className="w-full my-2 overflow-hidden rounded">
							<img src="/assets/cppweb-banner.jpg" alt="Old image of the website" />
						</div>
						<div className="block m-auto">
							<div>
								<span className="inline-block text-sm text-gray-100">
									Website completion : <span className="font-bold text-white">100</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
							</div>
						</div>
						<div className="flex items-center justify-start my-4 space-x-4">
							<span className="flex items-center px-2 py-1 text-xs font-semibold rounded-md text-sky-700 bg-sky-200">TAILWINDCSS</span>
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-pink-700 bg-pink-200 rounded-md">LARAVEL</span>
							<a href="https://github.com/CPlusPatch/cpluspatch-web" className="text-gray-400 transition-colors duration-200 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
								</svg>
							</a>
						</div>
					</ProjectCard>

					<ProjectCard name="Mini CPlusPatch" desc="A Discord bot for my servers" icon="/assets/discord.webp">
						<div className="w-full my-2 overflow-hidden rounded">
							<img src="/assets/discord-bot-demo.png" className="w-full" alt="Discord bot goofing around" />
						</div>
						<div className="block m-auto">
							<ul className="text-sm text-gray-100 list-disc list-inside text-bold">
								<li>Reaction roles</li>
								<li>Custom commands</li>
								<li>Goofy responses</li>
								<li>Moderation</li>
								<li><span className="line-through">Music</span> (deprecated)</li>
							</ul>
						</div>
						<div className="flex items-center justify-start my-4 space-x-4">
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">JAVASCRIPT</span>
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-300 rounded-md">DISCORD</span>
							<a href="https://github.com/CPlusPatch/cpluspatch-cms" className="text-gray-400 transition-colors duration-200 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
								</svg>
							</a>
						</div>
					</ProjectCard>

					<ProjectCard name="Suicide Prevention Bot" desc="A Discord bot to dispend help to those in need" icon="https://spbot.ml/siround.png">
						<div className="w-full my-2 overflow-hidden rounded">
							<img src="/assets/spbot-banner.png" className="w-full" alt="https://spbot.ml"/>
						</div>
						<div className="block m-auto">
							<div>
								<span className="inline-block text-sm text-gray-100">
									Localisation API : <span className="font-bold text-white">100</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
							</div>

							<div>
								<span className="inline-block text-sm text-gray-100">
									Full functionality : <span className="font-bold text-white">100</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
							</div>
							<div>
								<span className="inline-block text-sm text-gray-100">
									Discord.JS 13 features : <span className="font-bold text-white">100</span>/100
								</span>
							</div>
							<div className="w-full h-2 mt-2 bg-gray-500 rounded-full">
								<div className="w-full h-full text-xs text-center text-white rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"></div>
							</div>
						</div>
						<div className="flex items-center justify-start my-4 space-x-4">
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">NODE.JS</span>
							<span className="flex items-center px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-300 rounded-md">DISCORD</span>
							<a href="https://github.com/Bobrobot1/Suicide-Prevention-Bot" className="text-gray-400 transition-colors duration-200 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
								</svg>
							</a>
							<a href="https://spbot.ml" className="text-gray-400 transition-colors duration-200 hover:text-white">
								<svg xmlns="http://www.w3.org/2000/svg" alt="GitHub" width="20" height="20" fill="currentColor" className="text-xl transition-colors bi bi-github hover:text-white duration-200d" viewBox="0 0 16 16">
									<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
								</svg>
							</a>
						</div>
					</ProjectCard>
				</div>
			</div>
		</main>
	);
}