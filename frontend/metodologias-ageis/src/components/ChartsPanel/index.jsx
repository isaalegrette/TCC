import PropTypes from 'prop-types';
import api from '../../services/api';
import './style.scss'
import { useEffect, useState } from 'react';
import AnswersTable from '../AnswersTable';

const ChartsPanel = ({ selectedValue }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [chartData, setChartData] = useState([]);

    const getChartData = () => {
        setLoading(true);
        api
            .get(`/resposta/metrica/${selectedValue.id}`)
            .then(response => {
                setChartData(response.data);
                setLoading(false);
            })
            .catch(e => setError(true));
    }

    useEffect(() => {
        getChartData();
    }, [selectedValue])

    return (
        <div className='chartsPanel'>
            {Object.keys(selectedValue).length !== 0
                &&
                <>
                    <div className='title'>
                        <h3>{`${selectedValue.sigla}: ${selectedValue.descricao}`}</h3>
                    </div>
                    <div>
                        <AnswersTable loading={loading} tableData={chartData} />
                    </div>
                </>
            }
        </div>
    )
};

export default ChartsPanel;

ChartsPanel.propTypes = {
    selectedValue: PropTypes.object
}

ChartsPanel.defaultProps = {
    selectedValue: {}
}