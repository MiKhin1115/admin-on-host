import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingCart } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/access', label: 'Access Management', icon: Users },
    { path: '/orders', label: 'Orders', icon: ShoppingCart },
  ];

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#1f2937',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem',
      flexShrink: 0
    }}>
      <div style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid #374151'
      }}>
        Admin Portal
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                color: isActive ? 'white' : '#9ca3af',
                backgroundColor: isActive ? '#374151' : 'transparent',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
            >
              <Icon size={20} style={{ marginRight: '0.75rem' }} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
