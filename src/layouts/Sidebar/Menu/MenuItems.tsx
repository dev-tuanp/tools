import {NavLink} from "react-router-dom";
import * as classNames from "classnames/bind";
import styles from "~/layouts/Sidebar/Menu/Menu.module.scss";
import {ReactSVG} from "react";

interface MenuItemsType  {
	title: string
	to: string
	icon: ReactSVG
	activeIcon: ReactSVG
}

const cx = classNames.bind(styles);
function MenuItems(props: MenuItemsType) {
	const {icon, activeIcon, to, title} = props;
	return (
		<NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
			<span className={cx('icon')}>{icon}</span>
			<span className={cx('active-icon')}>{activeIcon}</span>
			<span className={cx('title')}>{title}</span>
		</NavLink>
	);
}
export default MenuItems;