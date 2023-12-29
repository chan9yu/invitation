import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

type ErrorBoundaryProps = PropsWithChildren<{
	fallback?: ReactNode;
}>;

type ErrorBoundaryState = {
	hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false
		};
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log('### error', error);
		console.log('### errorInfo', errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback ?? <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}
