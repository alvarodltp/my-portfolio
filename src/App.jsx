import Home from './pages/Home';
import Navbar from './components/Navbar';
import { DarkModeProvider } from './hooks/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      <Navbar />
      <Home />
    </DarkModeProvider>
  );
}
