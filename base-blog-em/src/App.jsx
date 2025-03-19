import { Posts } from './Posts';
import './App.css';
import { QueryCLient, QueryCLientProvider } from '@tanstack/react-query';

const queryClient = -new QueryCLient();

function App() {
  return (
    <QueryCLientProvider client={queryClient}>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
    </QueryCLientProvider>
  );
}

export default App;
