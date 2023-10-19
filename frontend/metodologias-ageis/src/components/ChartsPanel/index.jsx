import PropTypes from 'prop-types';
import api from '../../services/api';
import './style.scss'
import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableHeader } from '@carbon/react';

const ChartsPanel = ({ selectedValue }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [chartData, setChartData] = useState([]);
    const tableHeaders = ['Relatório', 'Resposta', 'Valor (%)']

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
        console.log(chartData);
    }, [selectedValue])

    return (
        <div className='chartsPanel'>
            {Object.keys(selectedValue).length !== 0
                &&
                <>
                    <div>
                        <h3>{`${selectedValue.sigla}: ${selectedValue.descricao}`}</h3>
                    </div>
                    {/* <div>
                        <Table size='xl' useZebraStyles>
                            <TableHead>
                                <TableRow>
                                    {tableHeaders.map(header => <TableHeader id={header.key} key={header}>
                                        {header}
                                    </TableHeader>)}
                                </TableRow>
                            </TableHead>
                        </Table>
                    </div> */}
                </>}
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