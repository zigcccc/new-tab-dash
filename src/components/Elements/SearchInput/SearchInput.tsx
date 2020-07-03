import React, { MutableRefObject } from 'react';

import cs from 'classnames';

import Icons from '../../Icons';

import { StyledSearchInput } from './Styles';

export interface SearchInputProps {}

export const SearchInput = ({}: SearchInputProps) => {
	const [query, setQuery] = React.useState('');
	const [focused, setFocused] = React.useState(false);
	const inputRef = React.useRef() as MutableRefObject<HTMLInputElement>;

	const focusInput = () => {
		inputRef.current.focus();
	};
	const handleTextChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>): void => {
		setQuery(value);
	};

	const handleKeyPress = ({
		charCode,
	}: React.KeyboardEvent<HTMLInputElement>) => {
		if (charCode === 13) {
			submitQuery();
		}
	};

	const hasValue = React.useMemo(() => query.length > 0, [query]);

	const submitQuery = () => {
		window.open(`https://www.google.com/search?q=${query}`, '_blank');
		setQuery('');
	};

	return (
		<StyledSearchInput className="search-input" onClick={focusInput}>
			<span className={cs('search-icon', { 'search-icon--active': focused })}>
				<Icons.Search />
			</span>
			<input
				className="input"
				placeholder="What would you like to find today?"
				type="text"
				ref={inputRef}
				value={query}
				onKeyPress={handleKeyPress}
				onChange={handleTextChange}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>
			<span
				onClick={submitQuery}
				className={cs('submit', { 'submit--enabled': hasValue })}
			>
				<span className="submit-text">Search</span>
				<span className="submit-icon">
					<Icons.ExternalLink />
				</span>
			</span>
		</StyledSearchInput>
	);
};
