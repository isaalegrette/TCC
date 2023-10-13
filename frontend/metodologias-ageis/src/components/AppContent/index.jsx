import { Column, Grid } from "@carbon/react";
import FilterPanel from "../FilterPanel";

const AppContent = () => {
    return(
        <Grid condensed className="grid">
            <Column sm={2} md={4} lg={4} className="column">
                <FilterPanel />
            </Column>
        </Grid>
    )
};

export default AppContent;