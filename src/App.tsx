import React, { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PatientList from './pages/PatientList';
import PatientRegistration from './pages/PatientRegistration';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { UserRole } from './types/auth';

function App() {
  const [currentView, setCurrentView] = useState<string>('dashboard');

  const getViewRoles = (view: string): UserRole[] => {
    switch (view) {
      case 'dashboard':
        return ['CHO_ADMIN', 'MO_ADMIN', 'GUEST'];
      case 'list':
        return ['CHO_ADMIN', 'MO_ADMIN', 'GUEST'];
      case 'registration':
        return ['CHO_ADMIN', 'MO_ADMIN'];
      default:
        return ['CHO_ADMIN', 'MO_ADMIN', 'GUEST'];
    }
  };

  const renderView = () => {
    const allowedRoles = getViewRoles(currentView);
    const view = (() => {
      switch (currentView) {
        case 'dashboard':
          return <Dashboard />;
        case 'list':
          return <PatientList />;
        case 'registration':
          return <PatientRegistration />;
        default:
          return <Dashboard />;
      }
    })();

    return (
      <ProtectedRoute allowedRoles={allowedRoles}>
        {view}
      </ProtectedRoute>
    );
  };

  return (
    <AuthProvider>
      <Layout>
        <div className="flex h-full">
          <Sidebar currentView={currentView} onNavigate={setCurrentView} />
          <div className="flex-1 overflow-auto p-6">
            {renderView()}
          </div>
        </div>
      </Layout>
    </AuthProvider>
  );
}

export default App;