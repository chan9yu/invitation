import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import ModalProvider from './contexts/ModalContext';
import './styles/global.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<ModalProvider>
				<App />
			</ModalProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
