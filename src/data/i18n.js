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
				// home page
				'Boost customer': 'Zwiększ lojalność',
				'Collect data, understand your customers, and reward them for loyalty. We create':
					'Zbieraj dane, zrozum swoich klientów i nagradzaj ich za lojalność. Tworzymy',
				'personalized loyalty cards': 'personalizowane karty lojalnościowe',
				'which not only retain customers but also motivate them to make more frequent purchases.':
					'które nie tylko zatrzymają klientów, ale także zmotywują ich do częstszych zakupów.',
				loyalty: 'lojalność',
				'Increase in Retention': 'Wzrost retencji',
				'Increase in Conversion': 'Wzrost konwersji',
				'Positive Feedback': 'Pozytywne opinie',
				'Virtual stamps, real benefits': 'Wirtualne pieczątki realne korzyści',
				'With every purchase, collect virtual stamps that you can exchange for attractive rewards. The more stamps, the better the gifts! Your store, your rules, your rewards. Simple and satisfying!':
					'Przy każdym zakupie zbieraj wirtualne pieczątki, które wymienisz na atrakcyjne nagrody. Im więcej pieczątek, tym lepsze prezenty! Twój sklep, Twoje zasady, Twoje nagrody. Prosto i satysfakcjonująco!',
				'See how it works': 'Zobacz jak to działa',
				'How Does it Work?': 'Jak to działa?',
				'Loyalty on your phone': 'Lojalność w Twoim telefonie',
				'Download our mobile app, collect points, and redeem rewards! Check your points, receive exclusive offers, and stay up-to-date with the latest promotions. Your customers deserve convenient service at their fingertips!':
					'Pobierz naszą aplikację mobilną, zbieraj punkty i wymieniaj na nagrody! Sprawdzaj swoje punkty, odbieraj ekskluzywne oferty, i bądź na bieżąco z najnowszymi promocjami. Twoi klienci zasługują na wygodę obsługi w zasięgu ręki!',
				'Long-lasting relationships for effective marketing': 'Trwałe relacje to skuteczny marketing',
				'Harness the power of our app for effective marketing. Send personalized SMS messages, grab attention with push notifications. Build lasting relationships with customers, inform them about promotions, and keep them engaged with your brand!':
					'Wykorzystaj potęgę naszej aplikacji do skutecznego marketingu. Wysyłaj spersonalizowane wiadomości SMS, przyciągaj uwagę za pomocą powiadomień push. Buduj trwałe relacje z klientami, informuj ich o promocjach i utrzymuj ich zaangażowanie w Twoją markę!',
				'Why Stamply loyalty app?': 'Jakie korzyści przynosi aplikacja lojalnościowa Stamply?',
				'Acquire customers and increase sales': 'Pozyskaj klientów i zwiększ sprzedaż',
				'Reward customers for every purchase and build a lasting relationship with them. Our loyalty program is the key to increasing repeat customers and business growth.':
					'Nagradzaj klientów za każdy zakup i buduj z nimi trwałą relację. Nasz Program Lojalnościowy to klucz do zwiększenia liczby powracających klientów i wzrostu obrotów w Twoim biznesie.',
				'Ready solutions and innovations for customers': 'Gotowe rozwiązania i nowości dla klientów',
				'Forget implementation difficulties. Our SaaS platform is a comprehensive solution that handles everything for you. Additionally, we regularly introduce innovations, ensuring your customers always discover something fresh. Make your offer more attractive, leaving all the work to us!':
					'Zapomnij o trudnościach w implementacji. Nasza platforma SaaS to kompleksowe rozwiązanie, które obsłuży wszystko za Ciebie. Dodatkowo, regularnie wprowadzamy nowości, dbając o to, aby Twoi klienci zawsze odkrywali coś świeżego. Uatrakcyjnij swoją ofertę, pozostawiając całą pracę nam!',
				'Build customer relationships': 'Buduj relację z klientami',
				'Our platform enables effective marketing using push notifications, SMS, and email. Stay close to your customers, informing them about the latest promotions, exclusive offers, and events. Effective marketing is the key to maintaining their attention and loyalty.':
					'Nasza platforma umożliwia efektywny marketing, wykorzystując powiadomienia Push, SMS oraz e-mail. Bądź blisko swoich klientów, informując ich o najnowszych promocjach, ekskluzywnych ofertach i wydarzeniach. Skuteczny marketing to klucz do utrzymania ich uwagi i lojalności.',
				'Data and analytics for business growth': 'Dane i analizy dla rozwoju biznesu',
				"Access to data and analytics will help you better understand your customers' needs, personalize offers, and make strategic business decisions. Discover new possibilities with our analytical tools.":
					'Dostęp do danych i analiz pozwoli Ci lepiej zrozumieć potrzeby Twoich klientów, personalizować oferty i podejmować strategiczne decyzje biznesowe. Odkryj nowe możliwości dzięki naszym narzędziom analitycznym.',
				'Check how it works': 'Sprawdź, jak to działa',
				'Watch this short video to see how Stamply application works':
					'Obejrzyj ten krótki film, aby zobaczyć, jak działa aplikacja Stamply',
				'Who is this app for?': 'Dla kogo jest ta aplikacja?',
				Cafes: 'Kawiarnie',
				'Stand out from the competition. Our application allows easy rewarding of customers for every order, increasing retention and encouraging more frequent visits. Utilize customization options and promote your most popular drinks or snacks as rewards, effectively attracting the attention of potential customers.':
					'Wybij się na tle konkurencji. Nasza aplikacja umożliwia łatwe nagradzanie klientów za każde zamówienie, co zwiększa retencję i zachęca do częstszych odwiedzin. Wykorzystaj możliwości personalizacji i promuj swoje najpopularniejsze napoje lub przekąski jako nagrody, co skutecznie przyciągnie uwagę potencjalnych klientów.',
				'Ice cream shops': 'Lodziarnie',
				'Open up new possibilities for your ice cream parlor with the Stamply loyalty program. With Stamply, you can promote your seasonal flavors, new products, or special promotions, attracting the attention of customers and increasing sales. Harness the potential of the loyalty program to build brand loyalty and grow your ice cream parlor.':
					'Otwórz nowe możliwości dla swojej lodziarni dzięki programowi lojalnościowemu Stamply. Dzięki Stamply możesz promować swoje sezonowe smaki, nowe produkty lub specjalne promocje, co przyciągnie uwagę klientów i zwiększy sprzedaż. Wykorzystaj potencjał programu lojalnościowego, aby budować lojalność marki i rozwijać swoją lodziarnię.',
				Stores: 'Sklepy',
				'Increase sales and build customer loyalty with the Stamply loyalty program for your store. Our application enables rewarding customers for every purchase, effectively increasing visit frequency and basket value. Utilize customization options and promote your best products as rewards, attracting the attention of customers and motivating them to make purchases.':
					'Zwiększaj sprzedaż i buduj lojalność klientów dzięki programowi lojalnościowemu Stamply dla Twojego sklepu. Nasza aplikacja umożliwia nagradzanie klientów za każdy zakup, co skutecznie zwiększa częstotliwość wizyt i wartość koszyka. Wykorzystaj możliwości personalizacji i promuj swoje najlepsze produkty jako nagrody, co przyciągnie uwagę klientów i zmotywuje ich do zakupów.',
				Services: 'Usługi',
				"Acquire new customers and increase loyalty among existing ones with the Stamply loyalty program. Our application enables rewarding customers for using your services, effectively building relationships and encouraging return visits. With Stamply, you'll build a strong brand and increase customer engagement, translating into sales growth and success for your business.":
					'Pozyskuj nowych klientów i zwiększaj lojalność istniejących dzięki programowi lojalnościowemu Stamply. Nasza aplikacja umożliwia nagradzanie klientów za korzystanie z Twoich usług, co skutecznie buduje relacje i zachęca do powrotu. Dzięki Stamply zbudujesz silną markę i zwiększysz zaangażowanie klientów, co przełoży się na wzrost sprzedaży i sukces Twojego biznesu.',
				// features page
				'How Does It Work?': 'Jak to działa?',
				'Discover how you can effectively strengthen customer relationships, increase sales, and stand out in the market with the Stamply app.':
					'Odkryj, jak możesz skutecznie wzmacniać relacje z klientami, zwiększać sprzedaż i wyróżniać się na rynku dzięki aplikacji Stamply.',
				'Registration and Configuration': 'Rejestracja i konfiguracja',
				'Receive Stickers': 'Otrzymaj naklejki',
				'Register your business in a few simple steps. Access the intuitive administrative panel for easy configuration and personalization of the loyalty program.':
					'Zarejestruj swój biznes w kilku prostych krokach. Dostęp do intuicyjnego panelu administracyjnego umożliwi łatwą konfigurację i personalizację programu lojalnościowego.',
				'Receive personalized stickers with unique QR codes. Simply place them in your establishment so customers can easily install the app and start collecting points.':
					'Otrzymaj spersonalizowane naklejki z unikalnymi kodami QR. Wystarczy je umieścić w swoim lokalu, by klienci mogli łatwo zainstalować aplikację i zacząć zbierać punkty.',
				'Easy Customer Registration': 'Łatwa rejestracja klienta',
				'Your customers complete a quick registration in just one step. Every purchase means new points that they can exchange for attractive rewards.':
					'Twoi klienci dokonują szybkiej rejestracji w zaledwie jednym kroku. Każdy zakup to nowe punkty, które mogą wymieniać na atrakcyjne nagrody.',
				'Collect Points and Redeem': 'Zbieraj punkty i wymieniaj',
				'Customers use the app, scan QR codes, and accumulate points, which they can later exchange for attractive rewards.':
					'Klienci korzystają z aplikacji, skanując kody QR i gromadząc punkty, które później wymieniają na atrakcyjne nagrody.',
				'Analytics and Marketing': 'Analizy i marketing',
				'Receive reports and analytics that help understand customer preferences. Use the acquired data for effective marketing actions and notifications, increasing customer engagement.':
					'Otrzymuj raporty i analizy, które pomagają zrozumieć preferencje klientów. Wykorzystuj zdobyte dane do skutecznych działań marketingowych i powiadomień, zwiększając zaangażowanie klientów.',
				// pricing page
				'Find the perfect plan for': 'Znajdź idealny plan dla',
				'your business': 'swojego biznesu',
				"Discover our flexible pricing packages designed for diverse business needs. Choose a plan that will accelerate your company's growth and take your loyalty strategy to a new level of success.":
					'Odkryj nasze elastyczne pakiety cenowe, stworzone z myślą o różnorodnych potrzebach biznesowych. Wybierz plan, który przyspieszy wzrost Twojej firmy i wprowadzi Twoją strategię lojalności na nowy poziom sukcesu.',
				'Standard package': 'Pakiet standard',
				'Uncover the potential of our basic package, designed for small businesses. Collect points, build customer loyalty, and increase sales without unnecessary complications.':
					'Odkryj potencjał naszego podstawowego pakietu, stworzonego z myślą o małych biznesach. Zbieraj punkty, buduj lojalność klientów i zwiększ sprzedaż bez zbędnych komplikacji',
				'Included in the price': 'W cenie',
				'Mobile app for customers': 'Aplikacja mobilna dla klientów',
				'Push notifications': 'Powiadomienia Push',
				'Personalization of loyalty card': 'Personalizacja karty lojalnościowej',
				'Technical support': 'Wsparcie techniczne',
				Monthly: 'Miesięcznie',
				PLN: 'zł',
				'Get started': 'Zaczynamy',
				'Coming soon': 'Wkrótce',
				'Invoices available for easy company reimbursement': 'Wystawiamy faktury VAT',
				'Premium package': 'Pakiet Premium',
				'Explore the full potential of our Premium package, tailored to the needs of growing businesses. Maximize customer loyalty and benefit from advanced features.':
					'Odkryj pełen potencjał naszego pakietu Premium, dostosowanego do potrzeb rozwijających się biznesów. Maksymalizuj lojalność klientów i czerp korzyści z zaawansowanych funkcji',
				'Multilevel loyalty program': 'Wielopoziomowy Program Lojalnościowy',
				'Data analytics': 'Analizy Danych',
				'Marketing campaigns': 'Kampanie Marketingowe',
				'Priority technical support': 'Priorytetowe Wsparcie Techniczne',
				// faq page
				'Ready answers to your questions are waiting to help you on the road to business success with the Stamply app.':
					'Gotowe odpowiedzi na Twoje pytania czekają, aby ułatwić Ci drogę do sukcesu biznesowego z aplikacją Stamply.',
				'What is a loyalty program?': 'Co to jest program lojalnościowy',
				'A loyalty program is a marketing strategy that rewards loyal customers for their loyalty to the brand. In our case, it involves collecting stamps for purchases, positively impacting the shopping experience.':
					'Program lojalnościowy to strategia marketingowa, która nagradza stałych klientów za ich lojalność wobec marki. W naszym przypadku, to zbieranie pieczątek za zakupy, co wpływa korzystnie na doświadczenie zakupowe.',
				'Why is it worth having a loyalty program in my business?':
					'Dlaczego warto mieć program lojalnościowy w swojej firmie?',
				'A loyalty program helps increase customer engagement, build lasting relationships, and boost sales. Customers expect rewards, and a loyalty program is a key tool for acquiring and retaining customers.':
					'Program lojalnościowy pomaga zwiększyć zaangażowanie klientów, budować trwałe relacje i zwiększać sprzedaż. Klienci oczekują nagród, a program lojalnościowy jest kluczowym narzędziem do pozyskania i utrzymania klientów.',
				"What are customers' expectations from a loyalty program?":
					'Jakie są oczekiwania klientów wobec programu lojalnościowego?',
				'Customers expect attractive rewards, a simple points collection system, and benefits available only to program participants. Additionally, they expect quick and clear information about their account and available rewards.':
					'Klienci oczekują atrakcyjnych nagród, prostego systemu zbierania punktów, oraz korzyści dostępnych tylko dla uczestników programu. Dodatkowo, oczekują szybkich i klarownych informacji na temat swojego konta i dostępnych nagród.',
				'How does a mobile loyalty app benefit businesses?': 'Jakie są zalety mobilnej aplikacji lojalnościowej?',
				'A mobile app is convenient for customers! It allows them to collect points and redeem rewards directly through their phones. It is also an effective way to maintain interactions with customers, informing them about news and promotions through push notifications.':
					'Aplikacja mobilna to wygoda dla klientów! Umożliwia im zbieranie punktów i korzystanie z nagród bezpośrednio za pomocą telefonu. To również efektywny sposób na utrzymanie interakcji z klientami, informując ich o nowościach i promocjach poprzez powiadomienia push.',
				'How does the stamp collection app work?': 'Jak działa aplikacja do zbierania pieczątek?',
				'The app enables customers to collect stamps for every purchase. Upon reaching a specified number of stamps, the customer gains access to certain rewards. The app is intuitive and easy to use, translating into increased customer loyalty.':
					'Aplikacja umożliwia klientom zbieranie pieczątek za każdy zakup. Po osiągnięciu określonej liczby pieczątek, klient otrzymuje dostęp do określonych nagród. Aplikacja jest intuicyjna i łatwa w użyciu, co przekłada się na zwiększenie lojalności klientów.',
				"Can I customize the loyalty program for my business's specifics?":
					'Czy mogę dostosować program lojalnościowy do specyfiki mojego biznesu?',
				"Yes, our platform allows you to customize the loyalty program to the unique needs of your business. You can define stamp collection rules, promotional periods, and personalize rewards to better meet your customers' expectations.":
					'Tak, nasza platforma umożliwia dostosowanie programu lojalnościowego do unikalnych potrzeb Twojego biznesu. Możesz definiować zasady zbierania znaczków, okresy promocyjne oraz personalizować nagrody, aby lepiej odpowiadały oczekiwaniom Twoich klientów.',
				'What are the benefits of a loyalty program for small businesses?':
					'Jakie są korzyści z programu lojalnościowego dla małych firm?',
				"A loyalty program for small businesses enables building lasting relationships with customers, helps increase their value, and encourages more frequent purchases. It's a tool that will help you gain customer loyalty.":
					'Program lojalnościowy dla małych firm umożliwia budowanie trwałych relacji z klientami, pomaga w zwiększeniu ich wartości i zachęca do częstszych zakupów. To narzędzie, które pomoże Ci zyskać lojalność klientów.',
				'Does a loyalty program help in building a brand?': 'Czy program lojalnościowy pomaga w budowaniu marki?',
				'Yes, a loyalty program is an effective tool in building a brand. It gives customers an additional reason to remain loyal to your brand, while also increasing brand recognition among potential customers.':
					'Tak, program lojalnościowy jest skutecznym narzędziem w budowaniu marki. Daje klientom dodatkowy powód, aby pozostać wiernymi Twojej marce, jednocześnie zwiększając rozpoznawalność marki wśród potencjalnych klientów.',
				'Does a loyalty program impact acquiring new customers?':
					'Czy program lojalnościowy wpływa na zdobywanie nowych klientów?',
				'Yes, a loyalty program not only retains existing customers but also attracts new ones. Customers are more likely to choose a company offering attractive reward programs, translating into acquiring new customers.':
					'Tak, program lojalnościowy nie tylko utrzymuje obecnych klientów, ale także przyciąga nowych. Klienci są bardziej skłonni wybrać firmę, która oferuje atrakcyjne programy nagród, co przekłada się na zdobywanie nowych klientów.',
				'What are the trends in loyalty programs?': 'Jakie są trendy w dziedzinie programów lojalnościowych?',
				'Current trends include reward personalization, the use of mobile technologies, integration with social media, and sustainable and social aspects of loyalty programs. Our platform stays updated with these trends to meet market expectations.':
					'Obecnie trendy obejmują personalizację nagród, wykorzystanie technologii mobilnych, integrację z mediami społecznościowymi oraz zrównoważone i społeczne aspekty programów lojalnościowych. Nasza platforma jest na bieżąco z tymi trendami, aby sprostać oczekiwaniom rynku.',
				// navbar and footer
				Offer: 'Oferta',
				Features: 'Funkcjonalność',
				Pricing: 'Cennik',
				Product: 'Produkt',
				English: 'Angielski',
				Polish: 'Polski',
				'Try now': 'Wypróbuj',
				'Join to us': 'Dołącz do nas',
				'Download the app': 'Pobierz aplikację',
				'Original website': 'Oryginalna strona',
				Platform: 'Platforma',
				Contact: 'Kontakt',
				'About us': 'O nas',
				'Terms and conditions': 'Regulamin',
				'Privacy policy': 'Polityka prywatności',
				// contact page
				"Your voice is important to us, so we'd be happy to engage in a dialogue with you and together create an even better experience with Stamply.pl.":
					'Twój głos jest dla nas ważny, dlatego chętnie nawiążemy z Tobą dialog i wspólnie stworzymy jeszcze lepsze doświadczenie z Stamply.pl.',
				'Contact Us': 'Napisz do nas',
				'Email Address': 'Adres e-mail',
				'Send': 'Wyślij',
				Name: 'Imię',
				'Your Message': 'Twoja wiadomość',
				// not found page
				Error: 'Błąd',
				'Site not found': 'Strona nie znaleziona',

			},
		},
	},
	lng: getLanguageFromUrl(),
});

export default i18next;
