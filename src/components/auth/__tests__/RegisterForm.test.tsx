import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegisterForm from '../RegisterForm';
import { useAuth } from '../../../hooks/useAuth';

vi.mock('../../../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

describe('RegisterForm', () => {
  it('submits the form with correct data', async () => {
    const mockRegister = vi.fn();
    (useAuth as any).mockReturnValue({ register: mockRegister });

    render(<RegisterForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/role/i), {
      target: { value: 'customer' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
        role: 'customer',
      });
    });
  });
});