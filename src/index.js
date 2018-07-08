import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import MainComponent from './main-component/main-component';
import AsideComponent from './aside-component/aside-component';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MainComponent/>
            <AsideComponent/>
        </div>
    </Provider>,
    document.getElementById('wrapper')
);

//registerServiceWorker();
