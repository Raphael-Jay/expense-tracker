import React from 'react'
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpense,
  Transaction,
  TransactionList,
} from './components'

const App = () => {
  return (
    <div>
      <Header title='Expense Tracker' />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App
