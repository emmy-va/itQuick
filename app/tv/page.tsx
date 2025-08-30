'use client';

import { useState } from 'react';
import Card from '../components/Card';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import Button from '../components/Button';

export default function TVPage() {
  const [formData, setFormData] = useState({
    smartCardNumber: '',
    serviceProvider: '',
    package: '',
    amount: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const serviceProviders = [
    { value: 'dstv', label: 'DSTV' },
    { value: 'gotv', label: 'GOTV' },
    { value: 'startimes', label: 'Startimes' },
  ];

  const packages = {
    dstv: [
      { value: 'basic', label: 'Basic', amount: 24500 },
      { value: 'family', label: 'Family', amount: 16500 },
      { value: 'premium', label: 'Premium', amount: 24500 },
      { value: 'max', label: 'Max', amount: 24500 },
    ],
    gotv: [
      { value: 'basic', label: 'Basic', amount: 3600 },
      { value: 'family', label: 'Family', amount: 5400 },
      { value: 'max', label: 'Max', amount: 7200 },
    ],
    startimes: [
      { value: 'basic', label: 'Basic', amount: 1200 },
      { value: 'family', label: 'Family', amount: 2400 },
      { value: 'premium', label: 'Premium', amount: 3600 },
    ],
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Auto-fill amount when package is selected
    if (field === 'package' && value && formData.serviceProvider) {
      const selectedPackage = packages[formData.serviceProvider as keyof typeof packages]?.find(pkg => pkg.value === value);
      if (selectedPackage) {
        setFormData(prev => ({ ...prev, amount: selectedPackage.amount.toString() }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success message (in a real app, you'd handle the response)
    alert('TV subscription successful! Your service will be activated shortly.');
    
    setIsLoading(false);
    setFormData({ smartCardNumber: '', serviceProvider: '', package: '', amount: '' });
  };

  const getAvailablePackages = () => {
    if (!formData.serviceProvider) return [];
    return packages[formData.serviceProvider as keyof typeof packages] || [];
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card 
        title="TV Subscription" 
        subtitle="Subscribe to your favorite TV channels and packages"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Smart Card Number"
            type="text"
            placeholder="Enter your smart card number"
            value={formData.smartCardNumber}
            onChange={(value) => handleInputChange('smartCardNumber', value)}
            required
          />

          <FormSelect
            label="Service Provider"
            value={formData.serviceProvider}
            onChange={(value) => handleInputChange('serviceProvider', value)}
            options={serviceProviders}
            required
          />

          <FormSelect
            label="Package"
            value={formData.package}
            onChange={(value) => handleInputChange('package', value)}
            options={getAvailablePackages().map(pkg => ({ value: pkg.value, label: pkg.label }))}
            required
            disabled={!formData.serviceProvider}
          />

          <FormInput
            label="Amount (₦)"
            type="number"
            placeholder="Amount will be auto-filled based on package"
            value={formData.amount}
            onChange={(value) => handleInputChange('amount', value)}
            required
            disabled={!formData.package}
          />

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !formData.smartCardNumber || !formData.serviceProvider || !formData.package}
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
                'Subscribe Now'
              )}
            </Button>
          </div>
        </form>

        {/* Package Information */}
        {formData.serviceProvider && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Available Packages</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {getAvailablePackages().map((pkg) => (
                <div
                  key={pkg.value}
                  className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                    formData.package === pkg.value
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => handleInputChange('package', pkg.value)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{pkg.label}</span>
                    <span className="text-sm font-semibold text-blue-600">₦{pkg.amount.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Information */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h4 className="text-sm font-medium text-purple-900 mb-2">Important Information</h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Subscription will be activated within 24 hours</li>
            <li>• You will receive a confirmation email</li>
            <li>• Service charge: ₦150 per transaction</li>
            <li>• For support, contact us at support@quickbill.com</li>
          </ul>
        </div>

        {/* Smart Card Help */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-900 mb-2">Need Help Finding Your Smart Card Number?</h4>
          <p className="text-sm text-blue-800">
            Your smart card number is usually printed on your TV decoder or can be found on your previous subscription receipts. 
            It typically consists of 10-12 digits.
          </p>
        </div>
      </Card>
    </div>
  );
}
