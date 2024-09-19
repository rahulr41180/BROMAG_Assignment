
import { Routes, Route } from "react-router-dom";
import { DominantManagementHomePage } from "./Pages/DominantManagementHomePage";
import { DominantManagementTotalOrderVeg } from "./Pages/DominantManagementTotalOrderVegPage";
import { DominantManagementTotalOrderNonVegPage } from "./Pages/DominantManagementTotalOrderNonVegPage";
import { DominantManagementTotalRepeatOrderPage } from "./Pages/DominantManagementTotalRepeatOrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<><DominantManagementHomePage /></>} />
      <Route path="/total-veg-order" element={<><DominantManagementTotalOrderVeg /></>} />

      <Route path="/total-non-veg-order" element={<><DominantManagementTotalOrderNonVegPage /></>} />
      <Route path="/total-repeat-order" element={<><DominantManagementTotalRepeatOrderPage /></>} />
    </Routes>
  );
}

export default App;