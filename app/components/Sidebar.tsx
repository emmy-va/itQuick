'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const quickActions = [
    { name: 'Quick Recharge', href: '/recharge', icon: '📱', color: 'bg-green-500' },
    { name: 'Pay Electricity', href: '/electricity', icon: '⚡', color: 'bg-yellow-500' },
    { name: 'TV Subscription', href: '/tv', icon: '📺', color: 'bg-purple-500' },
    { name: 'View History', href: '/history', icon: '📊', color: 'bg-blue-500' },
    { name: 'Get Support', href: '/support', icon: '💬', color: 'bg-indigo-500' },
  ];

  return (
    <div className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Toggle Button */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {isCollapsed ? (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <h3 className={`font-semibold text-gray-700 mb-4 ${isCollapsed ? 'sr-only' : 'block'}`}>
          Quick Actions
        </h3>
        <div className="space-y-3">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              href={action.href}
              className={`flex items-center p-3 rounded-lg transition-all duration-200 hover:shadow-md ${
                pathname === action.href
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className={`w-8 h-8 rounded-full ${action.color} flex items-center justify-center text-white text-sm`}>
                {action.icon}
              </div>
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium text-gray-700">{action.name}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-semibold text-gray-700 mb-4">Recent</h3>
          <div className="space-y-2">
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <div className="font-medium">MTN Recharge</div>
              <div className="text-gray-400">₦500 - 2 hours ago</div>
            </div>
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <div className="font-medium">Ikeja Electric</div>
              <div className="text-gray-400">₦2,000 - 1 day ago</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
