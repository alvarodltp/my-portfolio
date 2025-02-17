import Home from './pages/Home';
import NavBar from './components/NavBar';
import { DarkModeProvider } from './hooks/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      <NavBar />
      <Home />
    </DarkModeProvider>
  );
}
