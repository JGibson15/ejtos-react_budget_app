import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js


// Add code to import the other components here under

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {<div className='col-sm'>
                            <Budget />
                        </div>
                            /* Add Budget component here */
                        }        

                        {<div className='col-sm'>
                            <RemainingBudget />
                        </div>
                            /* Add Remaining component here*/
                        }        

                        {<div className='col-sm'>
                            <ExpenseTotal />
                        </div>
                            /* Add ExpenseTotal component here */
                        }        
                       
                        {<div className='col-sm'>
                            <ExpenseList />
                        </div>
                            /* Add ExpenseList component here */
                        }         

                        {<div className='col-sm'>
                            <ExpenseItem />
                        </div>
                            /* Add ExpenseItem component here */
                        }        

                        {<div className='col-sm'>
                            <AllocationForm />
                        </div>
                            /* Add AllocationForm component here under */
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
