import React from 'react';

export const User = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="prefix__feather prefix__feather-user"
		{...props}
	>
		<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
		<circle cx={12} cy={7} r={4} />
	</svg>
);
