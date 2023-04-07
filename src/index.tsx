import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';
import { persistor, StoreProvider } from 'app/providers/StoreProvider';
import { PersistGate } from 'redux-persist/integration/react';
import moment from 'moment';
moment.locale('ru');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StoreProvider>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </StoreProvider>
);