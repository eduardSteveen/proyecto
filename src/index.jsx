import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import './style/Global.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const container = document.getElementById("root")

//@ts-ignore
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
)