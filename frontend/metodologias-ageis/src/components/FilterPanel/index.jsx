import { Tile } from "@carbon/react";
import './style.scss'
import FilterSection from "../FilterSection";

const FilterPanel = () => {
    return (
        <>
            <Tile>
                <h4 className="title">Filtros</h4>
                <FilterSection sectionTitle='Métricas' apiInfo='/metrica/all'/>
                <hr className="divider"></hr>
                <FilterSection sectionTitle='Relatórios' apiInfo='/relatorio/all'/>
            </Tile>
        </>
    )
};

export default FilterPanel;