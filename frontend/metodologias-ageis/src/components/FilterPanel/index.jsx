import PropTypes from 'prop-types';
import { Tile } from "@carbon/react";
import './style.scss'
import FilterSection from "../FilterSection";
import FilterSectionMulti from '../FilterSectionMulti';

const FilterPanel = ({ selectedFilterValue, setSelectedFilterValue, selectedFilterValues, setSelectedFilterValues}) => {
    return (
        <>
            <Tile className='tile'>
                <h4 className="title">Filtros</h4>
                <FilterSection sectionTitle='Métricas' sectionPlaceholder = "Selecione uma Métrica" apiInfo='metrica' selectedValue={selectedFilterValue} setSelectedValue={setSelectedFilterValue}/>
                <FilterSectionMulti sectionTitle='Relatórios' sectionPlaceholder = "Selecione os Relatórios" apiInfo='relatorio' selectedValues={selectedFilterValues} setSelectedValues={setSelectedFilterValues}/>
            </Tile>
        </>
    )
};

export default FilterPanel;

FilterPanel.propTypes = {
    selectedFilterValue: PropTypes.object,
    setSelectedFilterValue: PropTypes.func,
    selectedFilterValues: PropTypes.array,
    setSelectedFilterValues: PropTypes.func
};

FilterPanel.defaultProps = {
    selectedFilterValue: {},
    setSelectedFilterValue: () => {},
    selectedFilterValues: [],
    setSelectedFilterValues: () => {}
};
