import styles from './title.module.scss';

interface Props {
	children: string;
}

export const Title = ({ children }: Props) => {
	return (
		<div className={styles.text}>{children}</div>
	);
}