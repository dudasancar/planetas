import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { getPlanetsInformation } from "../../../services/ListPlanetsInformation";
import { Container } from "./styles";
import columns from "./columns";

const Table: React.FC = () => {
  const [listTablePlanets, setListTablePlanets] = useState([]);

  useEffect(() => {
    getPlanetsInformation()
      .then((response: any) => {
        setListTablePlanets(response);
        console.log(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <h1>Tabela Comparativa</h1>
      <MaterialTable
        columns={columns}
        data={listTablePlanets}
        options={{
          filtering: true,
          search: false,
          showTitle: false,
          toolbar: false,
          pageSize: 7,
          pageSizeOptions: [7, 10, 20],
          headerStyle: {
            backgroundColor: "#CDCDCD",
            color: "#334B48",
            fontSize: "16px",
          },
          rowStyle: {
            backgroundColor: "",
            // color: "#FFF",
          },
        }}
      />
    </Container>
  );
};

export default Table;
