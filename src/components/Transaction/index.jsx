const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <>
      <li key={transaction.id} className='minus'>
        {transaction.text}{' '}
        <span>
          {sign}
          {Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'>x</button>
      </li>
    </>
  )
}

export default Transaction
