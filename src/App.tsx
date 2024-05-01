import Header from './components/header';
import Intro from './components/intro';
import Tokenomics from './components/tokenomics';
import Demo from './components/demo';
import Title from './components/title';
import Taxes from './components/taxes';
import Footer from './components/footer';

function App() {
  return (
    <main>
      <Header />
      <div className="bg-wrapper">
          <Intro />
          <Tokenomics />
          <Demo />
          <Title />
          <Taxes />
      </div>
      <Footer />
    </main>
  );
}

export default App;
