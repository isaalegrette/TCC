import PropTypes from 'prop-types';
import { Tile } from "@carbon/react";
import './style.scss'
import FilterSection from "../FilterSection";

const FilterPanel = ({ selectedFilterValue, setSelectedFilterValue }) => {
    return (
        <>
            <Tile className='tile'>
                <h4 className="title">Filtros</h4>
                <FilterSection sectionTitle='Métricas' apiInfo='metrica' selectedValue={selectedFilterValue} setSelectedValue={setSelectedFilterValue}/>
            </Tile>
        </>
    )
};

export default FilterPanel;

FilterPanel.propTypes = {
    selectedFilterValue: PropTypes.object,
    setSelectedFilterValue: PropTypes.func
};

FilterPanel.defaultProps = {
    selectedFilterValue: {},
    setSelectedFilterValue: () => {}
};
