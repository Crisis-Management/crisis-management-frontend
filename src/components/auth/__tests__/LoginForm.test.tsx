import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../LoginForm';
import { useAuth } from '../../../hooks/useAuth';

// Mock useAuth hook
vi.mock('../../../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

describe('LoginForm', () => {
  it('submits the form with correct data', async () => {
    const mockLogin = vi.fn();
    (useAuth as any).mockReturnValue({ login: mockLogin, loading: false });

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  it('shows loading state when submitting', () => {
    (useAuth as any).mockReturnValue({ login: vi.fn(), loading: true });

    render(<LoginForm />);
    
    expect(screen.getByRole('button', { name: /sign in/i })).toBeDisabled();
  });
});