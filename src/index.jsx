import { render } from 'preact';
import { LocationProvider, Router } from 'preact-iso';

import './style.css';

function Link({ href, label }) {
    const onClick = () => {
        document.body.classList.add('loading');
    };

    return (
        <a href={href} onClick={onClick}>
            {label}
        </a>
    );
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link href="/404" label="404" />
        </>
    );
}

function NotFound() {
    return (
        <>
            <h1>Not Found</h1>
            <Link href="/" label="Home" />
        </>
    );
}

function App() {
    const onRouteChange = () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 1000);
    }
    return (
        <LocationProvider>
            <loading-bar />
            <Router onRouteChange={onRouteChange}>
                <Home path="/" />
                <NotFound default />
            </Router>
        </LocationProvider>
    );
}

render(<App />, document.getElementById('app'));
