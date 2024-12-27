import './App.css';
import SidePanel from './components/side-panel/SidePanel';
import { LiveAPIProvider } from './contexts/LiveAPIContext';

const API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY as string;

if (typeof API_KEY !== 'string') {
  throw new Error('set VITE_APP_GEMINI_API_KEY in .env');
}

const host = 'generativelanguage.googleapis.com';
const uri = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

function App() {
  return (
    <LiveAPIProvider url={uri} apiKey={API_KEY}>
      <div className="flex h-screen w-screen">
        <SidePanel />
      </div>
    </LiveAPIProvider>
  );
}

export default App;
