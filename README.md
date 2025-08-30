# QuickBill - Recharge & Bill Payment App

A modern, responsive web application built with Next.js and Tailwind CSS for mobile recharge and electricity bill payments.

## Features

- **Mobile Recharge**: Recharge any network provider (MTN, Airtel, Glo, 9mobile)
- **Electricity Bill Payment**: Pay bills for various distribution companies
- **TV Subscription**: Subscribe to TV services (DSTV, GOTV, Startimes)
- **Transaction History**: View and filter all past transactions
- **Support System**: Contact form with business information
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Modern UI**: Clean, intuitive interface with smooth animations

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd itquick-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
itquick-app/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx      # Button component with variants
│   │   ├── Card.tsx        # Card container component
│   │   ├── FormInput.tsx   # Form input component
│   │   ├── FormSelect.tsx  # Form select component
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Sidebar.tsx     # Collapsible sidebar
│   ├── electricity/        # Electricity bill payment page
│   ├── history/           # Transaction history page
│   ├── recharge/          # Mobile recharge page
│   ├── tv/                # TV subscription page
│   ├── support/           # Support contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Pages

### Home (`/`)
- Welcome message and quick action buttons
- Feature highlights
- Quick access to main services

### Recharge (`/recharge`)
- Phone number input
- Amount selection with quick amount buttons
- Network provider dropdown
- Form validation and submission

### Electricity (`/electricity`)
- Distribution company selection
- Meter number input
- Meter type selection (Prepaid/Postpaid)
- Amount input with quick amount buttons

### TV (`/tv`)
- Smart card number input
- Service provider selection (DSTV, GOTV, Startimes)
- Package selection with auto-amount filling
- Interactive package display with pricing

### History (`/history`)
- Transaction table with filtering
- Search functionality
- Status indicators (Success, Pending, Failed)
- Statistics cards
- Export functionality (UI only)

### Support (`/support`)
- Contact form (Name, Email, Subject, Message)
- Business information
- Business hours
- Quick help section

## Components

### Button
- Multiple variants: primary, secondary, outline
- Different sizes: sm, md, lg
- Loading states and disabled states

### Card
- Consistent container styling
- Optional title and subtitle
- Rounded corners and subtle shadows

### FormInput & FormSelect
- Reusable form components
- Error handling
- Consistent styling

### Navbar
- Responsive navigation
- Mobile hamburger menu
- Active page highlighting

### Sidebar
- Collapsible sidebar
- Quick action buttons
- Recent transaction preview

## Styling

The app uses Tailwind CSS 4 with:
- Custom color scheme
- Responsive breakpoints
- Smooth transitions and hover effects
- Consistent spacing and typography
- Modern card-based design

## Responsive Design

- **Mobile**: Stacked layout with collapsible sidebar
- **Tablet**: Side-by-side layout with medium sidebar
- **Desktop**: Full layout with expanded sidebar

## Feature Development Checklist

### Core Features
- [x] Mobile Recharge System
- [x] Electricity Bill Payment
- [x] TV Subscription Service
- [x] Transaction History & Analytics
- [x] Support Contact System
- [x] Responsive Design (Mobile + Desktop)
- [x] Modern UI with Tailwind CSS

### Authentication & Security
- [ ] User authentication and accounts
- [ ] User profile management
- [ ] Password reset functionality
- [ ] Two-factor authentication (2FA)
- [ ] Session management
- [ ] Role-based access control

### Payment & Integration
- [ ] Real payment gateway integration
- [ ] Multiple payment methods (Card, Bank Transfer, USSD)
- [ ] Payment verification system
- [ ] Transaction receipts generation
- [ ] Payment failure handling
- [ ] Refund processing system

### Notifications & Communication
- [ ] SMS notifications
- [ ] Email notifications
- [ ] Push notifications
- [ ] Transaction alerts
- [ ] Service status updates
- [ ] Marketing communications

### Admin & Management
- [ ] Admin dashboard
- [ ] User management panel
- [ ] Transaction monitoring
- [ ] Service provider management
- [ ] Analytics and reporting
- [ ] System configuration

### Technical Improvements
- [ ] API endpoints for data management
- [ ] Database optimization
- [ ] Caching implementation
- [ ] Performance monitoring
- [ ] Error tracking and logging
- [ ] Automated testing

### User Experience
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Progressive Web App (PWA)
- [ ] Offline functionality
- [ ] Advanced search and filters

### Additional Services
- [ ] Data bundle subscriptions
- [ ] Cable TV services
- [ ] Additional TV providers
- [ ] Internet service payments
- [ ] Water bill payments
- [ ] Waste management payments
- [ ] Government services (Tax, License)

### Business Features
- [ ] Referral system
- [ ] Loyalty rewards program
- [ ] Bulk payment options
- [ ] Scheduled payments
- [ ] Payment reminders
- [ ] Business accounts
- [ ] Invoice generation

### Mobile & Integration
- [ ] Mobile app (React Native/Flutter)
- [ ] WhatsApp Business integration
- [ ] Social media integration
- [ ] Third-party service integrations
- [ ] Webhook support
- [ ] API documentation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@quickbill.com or create an issue in the repository.
