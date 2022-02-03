import { Button } from '../../elements';
import { Location } from '../../components';
import styles from './barcode-area.module.scss';
import { ReactComponent as Barcode } from '../../assets/svgs/barcodes/FJKtoMCO.svg';
import { ReactComponent as InfoCircle } from '../../assets/svgs/InfoCircle.svg';
import { ReactComponent as AlarmIcon } from '../../assets/svgs/AlarmIcon.svg';
import { Locations } from '../Location/Location';


export const BarcodeArea = ({}) => {

	return (
		<div className={styles.container}>
			<div className={styles.row}>

				<div className={styles.column}>
						<Location type='origin' location={Locations.NewYork} />
						<Location type='destination' location={Locations.Orlando} />
				</div>

				<div className={styles.column}>
					<div className={styles.barcodeContainer}>
						<Barcode/>
					</div>
				</div>

			</div>
			<div className={styles.row}>
				<InfoCircle />
				<Button icon={AlarmIcon} text='Add to Wallet' extraInfo='31' />
			</div>
		</div>
	);
}