import { InputHTMLAttributes } from "react";
import { Text } from '../';
import styles from './text-input.module.scss';

interface Props {
	value: string;
	onChange?(value: InputHTMLAttributes<HTMLElement>): void;
	label: string;
}

export const TextInput = ({ value, onChange, label }: Props) => {
	return (
		<div className={styles.container}>
			<input {...{ value, onChange }} className={styles.input} />
			<Text className={styles.label}>{label}</Text>
		</div>
	);
}