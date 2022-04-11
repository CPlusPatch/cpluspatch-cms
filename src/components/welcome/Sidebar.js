import React from "react";

function Sidebar() {
	return (
		<div className="hidden w-4/12 -mx-8 lg:block">
			<div className="px-8">
				<h1 className="px-6 mb-4 text-xl font-bold text-gray-700">Authors</h1>
				<div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
					<ul className="-mx-4">
						<SidebarAuthors/>
					</ul>
				</div>
			</div>
			<div className="px-8 mt-10">
				<h1 className="px-6 mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
				<div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
					<div className="flex items-center justify-center"><a href="#"
							className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
					</div>
					<div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
							Your New Idea with Laravel Freamwork.</a></div>
					<div className="flex items-center justify-between mt-4">
						<div className="flex items-center"><img
								src="https://cpluspatch.com/cdn/d5ac37a5-b776-437b-9034-e7e2772502c0.jpg"
								alt="avatar" className="object-cover w-8 h-8 rounded-full"></img>
						<a href="#"
							className="mx-3 text-sm text-gray-700 hover:underline">CPlusPatch</a></div><span
							className="text-sm font-light text-gray-600">Jun 1, 2020</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function SidebarAuthors()  {
	return (
		<li className="flex items-center">
			<img src="https://cpluspatch.com/cdn/d5ac37a5-b776-437b-9034-e7e2772502c0.jpg" alt="avatar"
				className="object-cover w-10 h-10 mx-4 rounded-full"></img>
			<p>
				<a href="#" className="mx-1 font-bold text-gray-700 hover:underline">CPlusPatch</a>
				<span className="text-sm font-light text-gray-700">Created 23 Posts</span></p>
		</li>
	);
}

export default Sidebar;
