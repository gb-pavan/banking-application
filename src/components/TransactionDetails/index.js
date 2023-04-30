import DisplayTransaction from '../DisplayTransaction';
import './index.css'

const TransactionDetails = props => {
    const {customerData} = props
    return (
        <div className='transaction-details'>
        <table>
            <thead>
                <tr className='column-names'>
                    <th className='spacing'>Credited Amount</th>
                    <th className='spacing'>Credited By</th>
                    <th className='spacing'>Credited Time</th>
                    <th className='spacing'>Debited Amount</th>
                    <th className='spacing'>Debited Time</th>
                    <th>Account Balance</th>
                </tr>
            </thead>
            <tbody>
                {customerData.map(eachTransaction => (
                    <DisplayTransaction eachTransaction={eachTransaction} />                
                ))}
            </tbody>

        </table>

        </div>
        
    )
    
}

export default TransactionDetails