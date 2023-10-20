import PropTypes from 'prop-types';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { MultiSelect, SelectSkeleton, InlineNotification } from "@carbon/react";
import './style.scss'

const FilterSectionMulti = ({ sectionTitle, apiInfo, sectionPlaceholder, selectedValues, setSelectedValues }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);

    const getFilterInfo = (apiInfo) => {
        setLoading(true);
        api
            .get(`/${apiInfo}/all`)
            .then(response => {
                setFilterOptions(response.data);
                setSelectedValues(response.data);
                setLoading(false);
            })
            .catch(e => setError(true));
    }

    useEffect(() => {
        getFilterInfo(apiInfo);
    }, []);

    return(
        <div>
            <hr className='divider'></hr>
            <h5 className='sectionTitle'>{sectionTitle}</h5>
            {loading ? 
                <SelectSkeleton /> : 
                <MultiSelect id={`filter-${apiInfo}`} label={sectionPlaceholder} items={filterOptions} initialSelectedItems={filterOptions} itemToString={item => item ? `${item.sigla}` : ''} onChange={items => setSelectedValues(items.selectedItems)}  />
            }
            {error && <InlineNotification lowContrast hideCloseButton kind='error'title='Erro!' subtitle='Não foi possível carregar os dados'/>}
             
        </div>
    )
};

export default FilterSectionMulti;

FilterSectionMulti.propTypes = {
    sectionTitle: PropTypes.string,
    apiInfo: PropTypes.string,
    sectionPlaceholder: PropTypes.string,
    selectedValues: PropTypes.array,
    setSelectedValues: PropTypes.func
};

FilterSectionMulti.defaultProps = {
    sectionTitle: '',
    apiInfo: '',
    sectionPlaceholder: '',
    selectedValues: [],
    setSelectedValues: () => {}
};