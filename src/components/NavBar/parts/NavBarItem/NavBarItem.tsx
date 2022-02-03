import { Text } from '../../../../elements';
import { INavBarMenuItem } from "../../../../types";
import styles from './nav-bar-item.module.scss';

export const NavBarItem = ({ name, icon: Icon, label, isSelected, onSelect }: INavBarMenuItem) => {
	return (
		<div className={[styles.container, isSelected ? styles.itemSelected : ''].join(' ')} onClick={onSelect}>
			<Icon className={styles.icon} />
			<Text className={styles.text}>{label}</Text>
		</div>
	);
}