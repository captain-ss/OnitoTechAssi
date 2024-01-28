import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./pages/Form";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import { Dataset } from "./pages/Dataset";
const queryClient = new QueryClient();

function App() {
  const { tableData } = useSelector((state) => state.TableData);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/table" element={<Dataset data={tableData} />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
