import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { AppRouter } from './router/app.routes';

export function App() {
  return (
    <>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
