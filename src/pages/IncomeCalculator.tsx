import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { RotateCcw } from 'lucide-react';

const servicesList = [
  { id: 'aeps', name: 'AEPS (Txn ₹3500)', fixedIncome: 12 },
  { id: 'moneyTransfer', name: 'Money Transfer (₹5000 avg)', fixedIncome: 25 },
  { id: 'matm', name: 'mATM (₹3000 avg)', fixedIncome: 10 },
  { id: 'recharge', name: 'Recharge (₹100 avg)', fixedIncome: 1 },
  { id: 'billPayment', name: 'Bill Payment (₹500 avg)', fixedIncome: 1 },
  { id: 'aepsCashDeposit', name: 'AEPS Cash Deposit (₹5000 avg)', fixedIncome: 13 },
  { id: 'miniStatement', name: 'Mini Statement', fixedIncome: 1 },
  { id: 'bankAccount', name: 'Bank Account', fixedIncome: 20 },
  { id: 'insurance', name: 'Insurance (avg ₹1000)', fixedIncome: 5 },
  { id: 'panCard', name: 'PAN Card', fixedIncome: 5 },
  { id: 'otherServices', name: 'Other Services', fixedIncome: 5 },
  { id: 'newCreditCard', name: 'New Credit Card', fixedIncome: 750 },
];

const IncomeCalculator = () => {
  const [transactions, setTransactions] = useState<Record<string, number>>(
    servicesList.reduce((acc, service) => ({ ...acc, [service.id]: 0 }), {})
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTransactionChange = (id: string, value: string) => {
    const numValue = parseInt(value, 10);
    setTransactions(prev => ({
      ...prev,
      [id]: isNaN(numValue) ? 0 : numValue
    }));
  };

  const handleReset = () => {
    setTransactions(
      servicesList.reduce((acc, service) => ({ ...acc, [service.id]: 0 }), {})
    );
  };

  const calculateTotal = () => {
    return servicesList.reduce((total, service) => {
      return total + (transactions[service.id] * service.fixedIncome);
    }, 0);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
          >
            Income Calculator
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600"
          >
            Calculate your potential monthly income based on transaction volume
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white">
            <h2 className="text-lg font-bold text-slate-800">Banking & Financial Services</h2>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-primary bg-slate-50 hover:bg-blue-50 rounded-md transition-colors"
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>
          
          <div className="overflow-x-auto p-6">
            <table className="w-full text-left border-collapse min-w-[500px] border border-slate-200">
              <thead>
                <tr className="bg-slate-50/80 text-xs uppercase tracking-wider font-semibold text-slate-500">
                  <th className="px-6 py-4 border border-slate-200">Services</th>
                  <th className="px-6 py-4 text-center border border-slate-200">Transactions</th>
                  <th className="px-6 py-4 text-center border border-slate-200">Income (Fixed)</th>
                  <th className="px-6 py-4 text-right border border-slate-200">Total Income</th>
                </tr>
              </thead>
              <tbody>
                {servicesList.map((service) => (
                  <tr key={service.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-3 text-sm font-medium text-slate-700 border border-slate-200">{service.name}</td>
                    <td className="px-6 py-3 text-center border border-slate-200">
                      <input
                        type="number"
                        min="0"
                        value={transactions[service.id] || ''}
                        onChange={(e) => handleTransactionChange(service.id, e.target.value)}
                        className="w-24 px-3 py-2 bg-slate-50/50 border border-slate-200 rounded-xl text-center text-base text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-6 py-3 text-center text-sm font-medium text-emerald-600 border border-slate-200">
                      ₹{service.fixedIncome}
                    </td>
                    <td className="px-6 py-3 text-right text-sm font-bold text-primary border border-slate-200">
                      ₹{(transactions[service.id] * service.fixedIncome).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div>
              <h3 className="text-lg font-bold mb-1">Grand Total Monthly Income</h3>
              <p className="text-xs text-blue-100 opacity-90">Estimated based on the transaction volumes entered above.</p>
            </div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight">
              ₹{calculateTotal().toLocaleString()}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IncomeCalculator;
