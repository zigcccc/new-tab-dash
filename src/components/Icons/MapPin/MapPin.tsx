import React from 'react';

export const MapPin = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={1.25}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="prefix__feather prefix__feather-map-pin"
		{...props}
	>
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
		<circle cx={12} cy={10} r={3} />
	</svg>
);
