import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./Pages/Dashboard";
import Inbox from "./Pages/Inbox";
import Automation from "./Pages/Automation";
import Templates from "./Pages/Templates";
import Contacts from "./Pages/Contacts";
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/inbox" element={<Inbox />} />

          <Route path="/automation" element={<Automation />} />

          <Route path="/templates" element={<Templates />} />

          <Route path="/contacts" element={<Contacts />} />

          <Route path="/analytics" element={<Analytics />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;