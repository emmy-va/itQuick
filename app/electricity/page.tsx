'use client';

import { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import Button from '../components/Button';

export default function ElectricityPage() {
  const [formData, setFormData] = useState({
    meterNumber: '',
    amount: '',
    discoProvider: '',
    meterType: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const discoProviders = [
    { value: 'ikeja', label: 'Ikeja Electric' },
    { value: 'eko', label: 'Eko Electricity Distribution Company' },
    { value: 'ibadan', label: 'Ibadan Electricity Distribution Company' },
    { value: 'enugu', label: 'Enugu Electricity Distribution Company' },
    { value: 'jos', label: 'Jos Electricity Distribution Company' },
    { value: 'kaduna', label: 'Kaduna Electricity Distribution Company' },
    { value: 'kano', label: 'Kano Electricity Distribution Company' },
    { value: 'ph', label: 'Port Harcourt Electricity Distribution Company' },
  ];

  const meterTypes = [
    { value: 'prepaid', label: 'Prepaid Meter' },
    { value: 'postpaid', label: 'Postpaid Meter' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message (in a real app, you'd handle the response)
    alert('Payment successful! Your electricity will be restored shortly.');
    
    setIsLoading(false);
    setFormData({ meterNumber: '', amount: '', discoProvider: '', meterType: '' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card 
        title="Electricity Bill Payment" 
        subtitle="Pay your electricity bills quickly and securely"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormSelect
            label="Distribution Company"
            value={formData.discoProvider}
            onChange={(value) => handleInputChange('discoProvider', value)}
            options={discoProviders}
            required
          />

          <FormInput
            label="Meter Number"
            type="text"
            placeholder="Enter your meter number"
            value={formData.meterNumber}
            onChange={(value) => handleInputChange('meterNumber', value)}
            required
          />

          <FormSelect
            label="Meter Type"
            value={formData.meterType}
            onChange={(value) => handleInputChange('meterType', value)}
            options={meterTypes}
            required
          />

          {/* Quick Amount Buttons */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Amounts</h4>
            <div className="grid grid-cols-3 gap-2">
              {[500, 1000, 2000, 5000, 10000, 20000].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleInputChange('amount', amount.toString())}
                  className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors"
                >
                  ₦{amount.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <FormInput
            label="Amount (₦)"
            type="number"
            placeholder="Enter payment amount"
            value={formData.amount}
            onChange={(value) => handleInputChange('amount', value)}
            required
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
              size="lg"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Pay Bill Now'
              )}
            </Button>
          </div>
        </form>

        {/* Information */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-900 mb-2">Important Information</h4>
          <ul className="text-sm text-yellow-800 space-y-1">
            <li>• Payment will be processed within 24 hours</li>
            <li>• You will receive a confirmation email</li>
            <li>• Service charge: ₦100 per transaction</li>
            <li>• For support, contact us at support@quickbill.com</li>
          </ul>
        </div>

        {/* Meter Number Help */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Need Help Finding Your Meter Number?</h4>
          <p className="text-sm text-blue-800">
            Your meter number is usually printed on your electricity meter or can be found on your previous electricity bills. 
            It typically consists of 11-12 digits.
          </p>
        </div>
      </Card>
    </div>
  );
}
