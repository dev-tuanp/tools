import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "~/app/app.tsx";
import "~/assets/css/index.css"
import GlobalStyles from "~/components/GlobalStyles/GlobalStyles.ts";
import {I18nextProvider} from "react-i18next";
import i18n from "~/i18n/i18n.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles>
			<I18nextProvider i18n={i18n}>
				<App/>
			</I18nextProvider>
		</GlobalStyles>
	</React.StrictMode>,
)
