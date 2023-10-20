import { Column, Grid } from "@carbon/react";
import FilterPanel from "../FilterPanel";
import { useState } from "react";
import ChartsPanel from "../ChartsPanel";

const AppContent = () => {
    const [selectedFilterValue, setSelectedFilterValue] = useState({});
    const [selectedFilterValues, setSelectedFilterValues] = useState([{}]);

    return(
        <Grid condensed fullWidth className="grid">
            <Column sm={2} md={2} lg={4} className="column">
                <FilterPanel selectedFilterValue={selectedFilterValue} setSelectedFilterValue={setSelectedFilterValue} selectedFilterValues={selectedFilterValues} setSelectedFilterValues={setSelectedFilterValues}/>
            </Column>
            <Column sm={2} md={6} lg={12}>
                <ChartsPanel selectedValue={selectedFilterValue} selectedValues={selectedFilterValues}/>
            </Column>
        </Grid>
    )
};

export default AppContent;