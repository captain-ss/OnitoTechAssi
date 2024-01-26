import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Form from "./pages/Form";
import { Routes, Route } from "react-router-dom";
import NotfoundPage from "./pages/NotfoundPage";
import { Dataset } from "./pages/Dataset";
const queryClient = new QueryClient();

const dataSet = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$3,120",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
  {
    name: "Garrett Winters",
    position: "Director",
    salary: "$5,300",
    start_date: "2011/07/25",
    office: "Edinburgh",
    extn: "8422",
  },
];
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/table" element={<Dataset data={dataSet} />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
