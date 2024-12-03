import { User } from '../types/auth';

export const mockUsers: User[] = [
  {
    id: 'CHO001',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@healthcare.com',
    role: 'CHO_ADMIN'
  },
  {
    id: 'MO001',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@healthcare.com',
    role: 'MO_ADMIN'
  },
  {
    id: 'PAT001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'PATIENT'
  },
  {
    id: 'GUEST001',
    name: 'Guest User',
    email: 'guest@healthcare.com',
    role: 'GUEST'
  }
];