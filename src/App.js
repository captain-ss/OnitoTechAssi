import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import DataSet from "./store/DataSetSlice/DataSet";
const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/table" element={<DataSet />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
