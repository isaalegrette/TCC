import { Content } from '@carbon/react';
import './App.scss';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <AppHeader />
      <Content className='content'>
        <AppContent />
      </Content>
    </>
  )
}

export default App;
