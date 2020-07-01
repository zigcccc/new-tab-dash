import React from 'react';

import Icons from '../../Icons';

import { StyledPhotoAuthorTag } from './Styles';

export interface PhotoAuthorTagProps {
	authorName?: string;
	authorUrl?: string;
}

export const PhotoAuthorTag = ({
	authorName,
	authorUrl,
}: PhotoAuthorTagProps) => {
	return (
		<StyledPhotoAuthorTag
			href={authorUrl}
			target="_blank"
			rel="noopener"
			className="photo-author-tag"
		>
			<Icons.User />
			<span className="author--name">Photo by: {authorName}</span>
		</StyledPhotoAuthorTag>
	);
};
