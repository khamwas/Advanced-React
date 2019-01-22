import React from 'react';
import Link from 'next/link';
function Nav(props) {
	return (
		<div>
			<Link href='/sell'>Sell!</Link>
			<Link href='/'>Home</Link>
		</div>
	);
}

export default Nav;
