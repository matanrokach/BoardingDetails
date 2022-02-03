import { SVGProps } from "react";

export type ReactSVG = React.FC<SVGProps<SVGSVGElement>>

export interface INavBarItem {
	name: string;
	icon: ReactSVG;
	label: string;
}

export interface INavBarMenuItem extends INavBarItem {
	isSelected: boolean;
	onSelect(): void;
}