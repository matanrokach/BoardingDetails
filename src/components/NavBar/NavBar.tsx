import styles from './nav-bar.module.scss';
import {ReactComponent as DestinationIcon} from '../../assets/svgs/DestinationIcon.svg';
import {ReactComponent as CalendarIcon} from '../../assets/svgs/CalendarIcon.svg';
import {ReactComponent as ClockHistoryIcon} from '../../assets/svgs/ClockHistoryIcon.svg';
import {ReactComponent as ChatDotsIcon} from '../../assets/svgs/ChatDotsIcon.svg';
import { INavBarItem } from '../../types';
import { NavBarItem } from './parts';
import { useState } from 'react';

const NavBarItems = {
	Destination: {
		name: 'destination',
		icon: DestinationIcon,
		label: 'Destination',
	},
	Dates: {
		name: 'dates',
		icon: CalendarIcon,
		label: 'Dates',
	},
	Hours: {
		name: 'hours',
		icon: ClockHistoryIcon,
		label: 'Hours',
	},
	Chat: {
		name: 'chat',
		icon: ChatDotsIcon,
		label: 'Chat with us',
	},
}

const items: INavBarItem[] = [
	NavBarItems.Destination,
	NavBarItems.Dates,
	NavBarItems.Hours,
	NavBarItems.Chat,
]

export const NavBar = ({}) => {
	const [selectedItem, setSelectedItem] = useState(NavBarItems.Dates)


	return (
		<div className={styles.container}>
			<div className={styles.row}>
				{items.map((item) => <NavBarItem {...item} isSelected={item.name === selectedItem.name} onSelect={() => setSelectedItem(item)} />)}
			</div>

			<div className={styles.separator}></div>
		</div>
	);
}