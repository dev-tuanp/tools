import i18next from "i18next";
import Backend from "i18next-xhr-backend"
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

const options = {
	order: ["cookie", "localStorage"],
	lookupCookie: "i18next",
	lookupLocalStorage: "i18nextLng"
}

i18next
.use(Backend)
.use(initReactI18next)
.use(I18nextBrowserLanguageDetector)
.init({
	backend: {
		// path where resource get loaded from, or a function
		// return a path
		// function(lng, namespaces) {return customPath;}
		// the returned path will interpolate lng, ns if provided like giving a static path
		loadPath: "./locales/{{lng}}/{{ns}}.json"
	},
	debug: false,
	ns: "general",
	defaultNS: "general",
	fallbackNS: "en-US",
	interpolation: {
		escapeValue: false // not need for react as it escapes by default
	},
	react: {
		useSuspense: false,
		wait: false
	},
	supportedLngs: [
		"en-US",
		"vi-VN"
	],
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	detection: options
}).then(value => value);
export default i18next;