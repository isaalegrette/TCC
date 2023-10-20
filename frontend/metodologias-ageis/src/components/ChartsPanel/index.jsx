import PropTypes from 'prop-types';
import api from '../../services/api';
import './style.scss'
import { useEffect, useState } from 'react';
import AnswersTable from '../AnswersTable';
import AnswersByYearLineChart from '../Charts/AnswersByYearLineChart';

const ChartsPanel = ({ selectedValue, selectedValues }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chartData, setChartData] = useState([]);
    const [filteredData, setFilteredData] = useState([{}]);

    const getChartData = () => {
        setLoading(true);
        api
            .get(`/resposta/metrica/${selectedValue.id}`)
            .then(response => {
                console.log(response.data);
                console.log(selectedValues);

                const data = response.data;
                setFilteredData(data.filter(item => {
                    for (let i = 0; i < selectedValues.length; i++) {
                        if (selectedValues[i].id == item.relatorio.id) {
                            return true;
                        }
                    }
                    return false;
                }));
                console.log(filteredData);
                setChartData(filteredData);

                setLoading(false);
            })
            .catch(e => setError(true));
    }

    useEffect(() => {
        getChartData();
    }, [selectedValue, selectedValues]);

    return (
        <div className='chartsPanel'>
            {Object.keys(selectedValue).length === 0 && <p></p>}
            {Object.keys(selectedValue).length !== 0
                &&
                <>
                    <div className='title'>
                        <h3>{`${selectedValue.sigla}: ${selectedValue.descricao}`}</h3>
                    </div>
                    <div>
                        <AnswersByYearLineChart loading={loading} data={filteredData} />
                    </div>
                    <hr className='divider' />
                    <div>
                        <AnswersTable loading={loading} tableData={filteredData} />
                    </div>
                </>
            }
        </div>
    )
};

export default ChartsPanel;

ChartsPanel.propTypes = {
    selectedValue: PropTypes.object,
    selectedValues: PropTypes.array
}

ChartsPanel.defaultProps = {
    selectedValue: {},
    selectedValues: []
}