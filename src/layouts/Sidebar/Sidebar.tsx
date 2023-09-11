// import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import React from "react";
import Menu, {MenuItem} from "~/layouts/Sidebar/Menu";
import * as classNames from "classnames/bind";
import {
	HomeActiveIcon,
	HomeIcon,
	SearchActiveIcon, SearchIcon,
} from "~/components/Icons";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);
function Sidebar(){
	return (
		<aside className={cx('wrapper')}>
			<Menu>
				<MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
				<MenuItem
					title="Search"
					to={config.routes.search}
					icon={<SearchIcon />}
					activeIcon={<SearchActiveIcon />}
				/>
			</Menu>
		</aside>
	)
}
export default Sidebar;