/** @format */

export interface User {
    id: number;
    username: string;
    email: string;
    role: 'admin' | 'collector' | 'farmer';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Farmer {
    id: number;
    name: string;
    phone: string;
    address: string;
    village: string;
    district: string;
    state: string;
    pincode: string;
    bankAccount: string;
    ifscCode: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Collector {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    assignedArea: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface MilkCollection {
    id: number;
    farmerId: number;
    collectorId: number;
    date: string;
    quantity: number;
    fat: number;
    snf: number;
    rate: number;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Payment {
    id: number;
    farmerId: number;
    amount: number;
    paymentDate: string;
    paymentMethod: 'cash' | 'bank_transfer' | 'cheque';
    status: 'pending' | 'completed' | 'failed';
    reference: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface DashboardStats {
    totalFarmers: number;
    totalCollectors: number;
    todayMilkCollection: number;
    totalPayments: number;
    monthlyMilkCollection: number;
    monthlyPayments: number;
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
    expiresIn: number;
  }
  
  export interface PageState {
    skip: number;
    take: number;
  }
  
  export interface FilterState {
    search: string;
    dateFrom?: string;
    dateTo?: string;
    status?: string;
  }
  
  