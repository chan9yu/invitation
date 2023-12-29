import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import ErrorBoundary from './components/common/ErrorBoundary';
import FullScreenMessage from './components/common/FullScreenMessage';
import ModalProvider from './contexts/ModalContext';
import './styles/global.scss';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ModalProvider>
					<ErrorBoundary fallback={<FullScreenMessage type="error" />}>
						<Suspense fallback={<FullScreenMessage type="loading" />}>
							<App />
						</Suspense>
					</ErrorBoundary>
				</ModalProvider>
			</QueryClientProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}
