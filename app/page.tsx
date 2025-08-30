import Link from 'next/link';
import Card from './components/Card';
import Button from './components/Button';

export default function Home() {
  const quickActions = [
    {
      title: 'Mobile Recharge',
      description: 'Recharge your mobile phone with any network provider',
      icon: '📱',
      href: '/recharge',
      color: 'bg-green-500',
      buttonText: 'Recharge Now'
    },
    {
      title: 'Electricity Bill',
      description: 'Pay your electricity bills quickly and securely',
      icon: '⚡',
      href: '/electricity',
      color: 'bg-yellow-500',
      buttonText: 'Pay Bill'
    },
    {
      title: 'TV Subscription',
      description: 'Subscribe to your favorite TV channels and packages',
      icon: '📺',
      href: '/tv',
      color: 'bg-purple-500',
      buttonText: 'Subscribe Now'
    },
    {
      title: 'Transaction History',
      description: 'View all your past transactions and payments',
      icon: '📊',
      href: '/history',
      color: 'bg-blue-500',
      buttonText: 'View History'
    },
    {
      title: 'Get Support',
      description: 'Contact our support team for assistance',
      icon: '💬',
      href: '/support',
      color: 'bg-indigo-500',
      buttonText: 'Contact Support'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to QuickBill! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your one-stop solution for mobile recharge and bill payments. 
            Fast, secure, and convenient.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/recharge">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Recharging
              </Button>
            </Link>
            <Link href="/electricity">
              <Button size="lg" variant="outline">
                Pay Electricity Bill
              </Button>
            </Link>
            <Link href="/tv">
              <Button size="lg" variant="outline">
                TV Subscription
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action) => (
          <Card key={action.title} className="text-center hover:shadow-md transition-shadow">
            <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
              {action.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{action.description}</p>
            <Link href={action.href}>
              <Button className="w-full">{action.buttonText}</Button>
            </Link>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <Card title="Why Choose QuickBill?" subtitle="Experience the difference with our platform">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
            <p className="text-gray-600 text-sm">Instant processing and confirmation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure</h4>
            <p className="text-gray-600 text-sm">Bank-grade security for all transactions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">User Friendly</h4>
            <p className="text-gray-600 text-sm">Simple and intuitive interface</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
