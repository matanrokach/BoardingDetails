import { ReactSVG } from "../../types";
import { Text } from '../';
import styles from './button.module.scss';

interface Props {
	icon: ReactSVG;
	text: string;
	extraInfo: string;
}

export const Button = ({ icon: Icon, text, extraInfo }: Props) => {
	return (
		<div className={styles.container}>
			<Icon className={styles.icon} />
			<Text className={styles.text}>{text}</Text>
			{!!extraInfo && <>
				<div className={styles.verticalSeparator} />
				<Text className={styles.text}>{extraInfo}</Text>
			</>}
		</div>
	);
}