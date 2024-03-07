import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const getLanguageFromUrl = () => {
	if (typeof window !== 'undefined') {
		const url = window.location.pathname;
		return url.startsWith('/en') ? 'en' : 'pl';
	}
	return 'pl';
};

i18next.use(initReactI18next).init({
	resources: {
		pl: {
			translation: {
				'Boost customer': 'Zwiększ lojalność',
				'Collect data, understand your customers, and reward them for loyalty. We create':
					'Zbieraj dane, zrozum swoich klientów i nagradzaj ich za lojalność. Tworzymy',
				'personalized loyalty cards': 'personalizowane karty lojalnościowe',
				'which not only retain customers but also motivate them to make more frequent purchases.':
					'które nie tylko zatrzymają klientów, ale także zmotywują ich do częstszych zakupów.',
				loyalty: 'lojalność',
			},
		},
	},
	lng: getLanguageFromUrl(),
});

export default i18next;
