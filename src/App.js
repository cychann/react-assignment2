import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import './styles/global.css';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { AuthProvider } from 'provider/AuthProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
