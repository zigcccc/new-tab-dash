import React from 'react';

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width="1em"
		height="1em"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className="prefix__feather prefix__feather-arrow-right"
		{...props}
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);
