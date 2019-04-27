import dva from 'dva';
import { createBrowserHistory } from 'history';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

// 1. Initialize
const app = dva({
  history: createBrowserHistory()
});
// const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
