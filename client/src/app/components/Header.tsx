import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

const Header: React.FC = () => {
	return (
		<header className='flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white shadow-sm'>
			<div className='flex items-center gap-4'>
				<h1 className='text-xl font-bold text-gray-700'>ChatApp</h1>
			</div>
			<div className='flex items-center gap-4'>
				<FontAwesomeIcon icon={faBell} />
				<FontAwesomeIcon icon={faUser} />
			</div>
		</header>
	);
};

export default Header;
