import { Column, Grid } from "@carbon/react";
import FilterPanel from "../FilterPanel";
import { useState } from "react";
import ChartsPanel from "../ChartsPanel";

const AppContent = () => {
    const [selectedFilterValue, setSelectedFilterValue] = useState({});
    const [selectedFilterMultiValues, setSelectedFilterMultiValues] = useState([{}]);

    return(
        <Grid condensed fullWidth className="grid">
            <Column sm={2} md={2} lg={4} className="column">
                <FilterPanel selectedFilterValue={selectedFilterValue} setSelectedFilterValue={setSelectedFilterValue} selectedFilterMultiValues={selectedFilterMultiValues} setSelectedFilterMultiValues={setSelectedFilterMultiValues}/>
            </Column>
            <Column sm={2} md={6} lg={12}>
                <ChartsPanel selectedValue={selectedFilterValue} selectedMultiValues={selectedFilterMultiValues}/>
            </Column>
        </Grid>
    )
};

export default AppContent;