import css from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

const TransactionHistory = ({itemsList}) => {
    return <table className={css.table}>
        <thead className={css.tableHead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody className={css.tableBody}>
            {itemsList.map(item => {
                return <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>;
            })}
        </tbody>
    </table>;
};

TransactionHistory.propTypes = {
    itemsList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;