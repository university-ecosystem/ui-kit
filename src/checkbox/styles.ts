import styled from '@emotion/styled';

export const StyledCheckbox = styled('div')`
	width: fit-content;
	display: flex;

	gap: 12px;
	text-align: center;
	align-items: center;

	& > input[type='checkbox'] {
		-webkit-appearance: none;
		appearance: none;

		/* creating a custom design */
		margin: 0 !important;
		width: 1.6em;
		height: 1.6em;
		border-radius: 0.15em;
		border: 1px solid #adb5bd;
		outline: none;
		cursor: pointer;
	}

	& > input[type='checkbox']:disabled {
		border-color: #c0c0c0;
		background-color: #c0c0c0;
	}

	& > input[type='checkbox']:hover:not(:disabled) {
		border-color: ${(props) => props.theme.colors.primary[400]};
	}

	& > input[type='checkbox']:active:not(:disabled) {
		border-color: ${(props) => props.theme.colors.primary[200]};
		background-color: ${(props) => props.theme.colors.primary[200]};
	}

	& > input[type='checkbox']:focus:not(:disabled) {
		box-shadow: 0 0 0 0.2rem rgba(201, 196, 255, 1);
	}

	& > input[type='checkbox']:focus:not(:checked) {
		border: 1px solid #adb5bd;
		box-shadow: none;
	}

	& > input[type='checkbox']:checked {
		position: relative;
		border-color: ${(props) => props.theme.colors.primary[400]};
		background-color: ${(props) => props.theme.colors.primary[400]};
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
	}
`;
