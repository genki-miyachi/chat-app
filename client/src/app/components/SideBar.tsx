import React from "react";
import Link from "next/link";

type Room = {
	name: string;
	id: number;
};

type SideBarProps = {
	rooms: Room[];
};

export default function Sidebar({ rooms }: SideBarProps) {
	return (
		<aside className='h-screen w-64 border-r border-gray-200 overflow-y-auto bg-white shadow-sm'>
			<h2 className='px-4 py-2 text-lg font-semibold border-b border-gray-200 text-gray-700'>
				Chat Rooms
			</h2>
			<nav className='px-4 py-2 space-y-2'>
				{rooms.map((room) => (
					<Link
						key={room.id}
						href={`/rooms/${room.id}`}
						className='flex items-center gap-2 hover:bg-gray-100 rounded p-2 transition-colors duration-200'>
						<span className='text-gray-600'>{room.name}</span>
					</Link>
				))}
			</nav>
		</aside>
	);
}
