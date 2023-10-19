import PropTypes from 'prop-types';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Dropdown, DropdownSkeleton, InlineNotification } from "@carbon/react";
import './style.scss'

const FilterSection = ({ sectionTitle, apiInfo, selectedValue, setSelectedValue }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);

    const getFilterInfo = (apiInfo) => {
        setLoading(true);
        api
            .get(`/${apiInfo}/all`)
            .then(response => {
                setFilterOptions(response.data);
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
            {loading && <DropdownSkeleton />}
            {error && <InlineNotification lowContrast hideCloseButton kind='error'title='Erro!' subtitle='Não foi possível carregar os dados'/>}
            <Dropdown id={`filter-${apiInfo}`} label='' items={filterOptions} itemToString={item => item ? `${item.sigla}: ${item.breveDescricao}` : ''} onChange={item => setSelectedValue(item.selectedItem)}/>
        </div>
    )
};

export default FilterSection;

FilterSection.propTypes = {
    sectionTitle: PropTypes.string,
    apiInfo: PropTypes.string,
    selectedValue: PropTypes.object,
    setSelectedValue: PropTypes.func
};

FilterSection.defaultProps = {
    sectionTitle: '',
    apiInfo: '',
    selectedValue: {},
    setSelectedValue: () => {}
};