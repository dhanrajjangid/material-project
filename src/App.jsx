import "./App.css";
import Header from "./components/Header";
import MaterialTable from "./components/MaterialTable";
import BasicTable from "./components/TableData";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid>
      <Header />
      <MaterialTable />
      <BasicTable />
    </Grid>
  );
}

export default App;
