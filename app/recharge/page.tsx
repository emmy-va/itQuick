'use client';

import { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import Button from '../components/Button';

export default function RechargePage() {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    amount: '',
    networkProvider: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const networkProviders = [
    { value: 'mtn', label: 'MTN Nigeria' },
    { value: 'airtel', label: 'Airtel Nigeria' },
    { value: 'glo', label: 'Glo Nigeria' },
    { value: '9mobile', label: '9mobile' },
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
    alert('Recharge successful! You will receive a confirmation SMS shortly.');
    
    setIsLoading(false);
    setFormData({ phoneNumber: '', amount: '', networkProvider: '' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card 
        title="Mobile Recharge" 
        subtitle="Recharge your mobile phone with any network provider"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="Enter phone number (e.g., 08012345678)"
            value={formData.phoneNumber}
            onChange={(value) => handleInputChange('phoneNumber', value)}
            required
          />

          <FormSelect
            label="Network Provider"
            value={formData.networkProvider}
            onChange={(value) => handleInputChange('networkProvider', value)}
            options={networkProviders}
            required
          />

          {/* Quick Amount Buttons */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Amounts</h4>
            <div className="grid grid-cols-3 gap-2">
              {[100, 200, 500, 1000, 2000, 5000].map((amount) => (
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
            placeholder="Enter recharge amount"
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
                'Recharge Now'
              )}
            </Button>
          </div>
        </form>

        {/* Information */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Important Information</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Recharge will be processed instantly</li>
            <li>• You will receive a confirmation SMS</li>
            <li>• Service charge: ₦50 per transaction</li>
            <li>• For support, contact us at support@quickbill.com</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
