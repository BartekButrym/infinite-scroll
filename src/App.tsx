import { ErrorBoundary } from 'react-error-boundary';
import { Fallback } from './ui/ErrorBoundary';
import { InfiniteScroll } from './components/InfiniteScroll';

function App() {
	return (
		<ErrorBoundary FallbackComponent={Fallback}>
			<InfiniteScroll />
		</ErrorBoundary>
	);
}

export default App;
