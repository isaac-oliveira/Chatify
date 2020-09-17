import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secundary: string;
			textPrimary: string;
			textSecundary: string;
			new: string;
			delete: string;
			messageRecieve: string;
			messageSend: string;
			activeIcon: string;
			inactiveIcon: string;
			placeholder: string;
		};
	}
}
