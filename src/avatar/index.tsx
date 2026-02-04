import React from 'react';
import { AvatarWrapper } from './styles';
import { AvatarProps } from './interfaces';

export const Avatar: React.FC<AvatarProps> = ({
	img,
	placeholder,
}): React.ReactElement => {
	return (
		<AvatarWrapper>
			{img ? (
				<img src={img} alt={placeholder} />
			) : (
				<div className="avatar-letters">{placeholder}</div>
			)}
		</AvatarWrapper>
	);
};
