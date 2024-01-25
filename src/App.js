import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./pages/Form";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Form />
      </div>
    </QueryClientProvider>
  );
}

export default App;
