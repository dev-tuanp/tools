import styles from "./DefaultLayout.module.scss"
import * as classNames from "classnames/bind";
import {ReactNode} from "react";
import Sidebar from "~/layouts/Sidebar";

const cx = classNames.bind(styles);

interface DefaultLayoutProps {
	children: ReactNode
}

function DefaultLayout(props: DefaultLayoutProps) {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('container')}>
				<Sidebar />
				<div className={cx('content')}>{props.children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout;