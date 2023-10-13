import PropTypes from 'prop-types';
// import api from '../../services/api';
// import { useEffect, useState } from 'react';

const FilterSection = ({ sectionTitle, apiInfo }) => {
    // const [filterOptions, setFilterOptions] = useState();

    // useEffect(() => {
    //     api
    //         .get(apiInfo)
    //         .then(response => setFilterOptions(response.data))
    //         .catch(error => console.error("Erro: " + error))

    //     console.log(filterOptions)
    // }, [apiInfo, filterOptions]);

    return(
        <div>
            <h5>{sectionTitle}</h5>
            <p>{apiInfo}</p>
            {/* {filterOptions.map(option => <p key={option.id}>{option.sigla}</p>)} */}
        </div>
    )
};

export default FilterSection;

FilterSection.propTypes = {
    sectionTitle: PropTypes.string,
    apiInfo: PropTypes.string
}

FilterSection.defaultProps = {
    sectionTitle: '',
    apiInfo: ''
}