import styles from './text.module.scss';

interface Props {
	children: string;
	size?: number;
	className?: string;
}

export const Text = ({ children, size, className = '' }: Props) => {

	return (
		<div className={[styles.text, className].join(' ')} style={{ fontSize: size }}>{children}</div>
	);
}