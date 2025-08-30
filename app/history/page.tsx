'use client';

import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

interface Transaction {
  id: string;
  date: string;
  service: string;
  amount: number;
  status: 'success' | 'pending' | 'failed';
  reference: string;
  description: string;
}

export default function HistoryPage() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy transaction data
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2024-01-15',
      service: 'Mobile Recharge',
      amount: 500,
      status: 'success',
      reference: 'REF001234',
      description: 'MTN Recharge - 08012345678'
    },
    {
      id: '2',
      date: '2024-01-14',
      service: 'Electricity Bill',
      amount: 2000,
      status: 'success',
      reference: 'REF001235',
      description: 'Ikeja Electric - Meter: 12345678901'
    },
    {
      id: '3',
      date: '2024-01-13',
      service: 'Mobile Recharge',
      amount: 1000,
      status: 'success',
      reference: 'REF001236',
      description: 'Airtel Recharge - 08087654321'
    },
    {
      id: '4',
      date: '2024-01-12',
      service: 'Electricity Bill',
      amount: 1500,
      status: 'pending',
      reference: 'REF001237',
      description: 'Eko Electricity - Meter: 98765432109'
    },
    {
      id: '5',
      date: '2024-01-11',
      service: 'Mobile Recharge',
      amount: 200,
      status: 'failed',
      reference: 'REF001238',
      description: 'Glo Recharge - 08055556666'
    },
    {
      id: '6',
      date: '2024-01-10',
      service: 'Electricity Bill',
      amount: 3000,
      status: 'success',
      reference: 'REF001239',
      description: 'Ibadan Electric - Meter: 11223344556'
    },
    {
      id: '7',
      date: '2024-01-09',
      service: 'Mobile Recharge',
      amount: 500,
      status: 'success',
      reference: 'REF001240',
      description: '9mobile Recharge - 08099998888'
    },
    {
      id: '8',
      date: '2024-01-08',
      service: 'Electricity Bill',
      amount: 1200,
      status: 'success',
      reference: 'REF001241',
      description: 'Enugu Electric - Meter: 99887766554'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return '✓';
      case 'pending':
        return '⏳';
      case 'failed':
        return '✗';
      default:
        return '?';
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = filter === 'all' || transaction.status === filter;
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const successCount = filteredTransactions.filter(t => t.status === 'success').length;
  const pendingCount = filteredTransactions.filter(t => t.status === 'pending').length;
  const failedCount = filteredTransactions.filter(t => t.status === 'failed').length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-600">View all your past transactions and payments</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            Export to CSV
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <div className="text-2xl font-bold text-gray-900">{filteredTransactions.length}</div>
          <div className="text-sm text-gray-600">Total Transactions</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-green-600">₦{totalAmount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Amount</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600">{successCount}</div>
          <div className="text-sm text-gray-600">Successful</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by reference or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'success' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('success')}
            >
              Successful
            </Button>
            <Button
              variant={filter === 'pending' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('pending')}
            >
              Pending
            </Button>
            <Button
              variant={filter === 'failed' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter('failed')}
            >
              Failed
            </Button>
          </div>
        </div>
      </Card>

      {/* Transactions Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reference
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {transaction.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ₦{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      <span className="mr-1">{getStatusIcon(transaction.status)}</span>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                    {transaction.reference}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {transaction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-400 text-6xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No transactions found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </Card>
    </div>
  );
}
