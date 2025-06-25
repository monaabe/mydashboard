import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Team from "./page/team/Team";
import Dashboard from "./page/dashboard/Dashboard";
import Contacts from "./page/contacts/Contacts";
import Invoices from "./page/invoices/Invoices";
import Form from "./page/form/Form";
import Faq from "./page/faq/Faq";
import Geography from "./page/geography/Geography";
/*import PieChart from "./page/pieChart/PieChart";*/
import BarChart from "./page/barChart/BarChart";
import Calendar from "./page/calendar/Calendar";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="faq" element={<Faq />} />
      <Route path="line" element={<Geography />} />
    {/*  <Route path="pie" element={<PieChart />} />*/}
      <Route path="bar" element={<BarChart />} />
      <Route path="calendar" element={<Calendar />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
