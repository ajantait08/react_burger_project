import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import OnlinePayment from './containers/online_payment/OnlinePayment';

function App() {
  return (
    <div className="App">
     <Layout>
       <OnlinePayment></OnlinePayment>
     </Layout>
    </div>
  );
}

export default App;
