import { Column, Grid } from "@carbon/react";
import FilterPanel from "../FilterPanel";
import { useState } from "react";
import ChartsPanel from "../ChartsPanel";

const AppContent = () => {
    const [selectedFilterValue, setSelectedFilterValue] = useState({});

    return(
        <Grid condensed fullWidth className="grid">
            <Column sm={2} md={4} lg={4} className="column">
                <FilterPanel selectedFilterValue={selectedFilterValue} setSelectedFilterValue={setSelectedFilterValue} />
            </Column>
            <Column lg={12}>
                {/* <h2>{selectedFilterValue.sigla} - {selectedFilterValue.descricao}</h2> */}
                <ChartsPanel selectedValue={selectedFilterValue} />
            </Column>
        </Grid>
    )
};

export default AppContent;