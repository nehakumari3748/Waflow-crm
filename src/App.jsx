import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import Automation from "./pages/Automation";
import Templates from "./pages/Templates";
import Contacts from "./pages/Contacts";
import Analytics from "./pages/Analytics";

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