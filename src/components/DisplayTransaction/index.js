import './index.css'

const DisplayTransaction = props => {
    const {eachTransaction} = props
    const creditedAmountStyle = eachTransaction.credited_amount ? { color: '#00FF00' } : {} 
    const creditedByStyle = eachTransaction.credited_amount ? { color: '#00FF00' } : {}
    const creditedTimeStyle = eachTransaction.credited_amount ? { color: '#00FF00' } : {}
    const debitedAmountStyle = eachTransaction.debited_amount ? { color: 'yellow' } : {}
    const debitedTimeStyle = eachTransaction.debited_amount ? { color: 'yellow' } : {}
    return (
        <tr key={eachTransaction.id}>
            <td style={creditedAmountStyle}>{eachTransaction.credited_amount}</td>
            <td style={creditedByStyle}>{eachTransaction.credited_by}</td>
            <td style={creditedTimeStyle}>{eachTransaction.credited_time}</td>
            <td style={debitedAmountStyle}>{eachTransaction.debited_amount}</td>
            <td style={debitedTimeStyle}>{eachTransaction.debited_time}</td>
            <td>{eachTransaction.Remaining_balance}</td>
        </tr>
    )
}

export default DisplayTransaction