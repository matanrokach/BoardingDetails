import styles from './location.module.scss';
import { Text } from '../../elements';

export enum Locations {
	NewYork = 'NewYork',
	Orlando = 'Orlando',
}

interface ILocation {
	code: string;
	description: string;
}

const locations: { [key: string]: ILocation } = {
	[Locations.NewYork]: {
		code: 'FJK',
		description: 'New York, NY',
	},
	[Locations.Orlando]: {
		code: 'MCO',
		description: 'Orlando, FL',
	},
}

interface Props {
	type: 'origin' | 'destination';
	location: Locations;
}

export const Location = ({ location, type }: Props) => {

	const smallTitle = type === 'origin' ? "FROM" : "TO";
	
	return (
		<div className={styles.container}>
			<Text className={styles.smallTitle} >{smallTitle}</Text>
			<Text className={styles.text} >{locations[location].code}</Text>
			<Text className={styles.description} >{locations[location].description}</Text>
		</div>
	);
}