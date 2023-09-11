import config from "~/config";

// Pages
import HomePage from "~/pages/Home";
import Search from "~/pages/Search";

interface RoutesType {
	path: string
	component: Element
	layout?: Element | null
}

const publicRoutes: RoutesType = [
	{ path: config.routes.home, component: HomePage },
	{ path: config.routes.search, component: Search },
]


export {publicRoutes};