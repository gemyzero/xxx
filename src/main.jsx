import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { RecoilRoot } from 'recoil'
createRoot(document.getElementById('root')).render(
<RecoilRoot>
<App />

</RecoilRoot>
)
