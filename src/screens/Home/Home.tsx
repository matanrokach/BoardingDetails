import { BarcodeArea, NavBar, Title } from '../../components';
import { Text } from '../../elements';
import { TextInput } from '../../elements/TextInput/TextInput';
import styles from './home.module.scss';

const details = {
	passenger: 'Frida Michele Albers',
	boardingTime: '08:45AM PST',
	gate: 'AA-23',
	class: 'ALPHA ONE',
	zone: 'AA-23',
	seat: '2A',
}

export const HomeScreen = ({}) => {
	return (
		<div className={styles.container}>
			<NavBar/>

			<div className={styles.form}>
				<Title>Alpha</Title>
				<Text>Flight 5791 - Nov. 3 2018</Text>

				<div className={styles.fields}>
					<TextInput label='PASSENGER' value={details.passenger} />
					
						<div className={styles.fieldsRow}>
							<div className={[styles.siblingField, styles.leftSideField].join(' ')}>
								<TextInput label='BOARDING TIME' value={details.boardingTime}></TextInput>
							</div>
							<div className={[styles.siblingField, styles.rightSideField].join(' ')}>
								<TextInput label='GATE' value={details.gate}></TextInput>
							</div>
						</div>
						
						<div className={styles.fieldsRow}>
							<div className={[styles.siblingField, styles.secondRowLeftField].join(' ')}>
								<TextInput label='CLASS' value={details.class}></TextInput>
							</div>
							<div className={[styles.siblingField, styles.secondRowMiddleField].join(' ')}>
								<TextInput label='ZONE' value={details.zone}></TextInput>
							</div>
							<div className={[styles.siblingField, styles.secondRowRightField].join(' ')}>
								<TextInput label='SEAT' value={details.seat}></TextInput>
							</div>
						</div>

				</div>

			</div>

			<BarcodeArea/>
		</div>
	);
}