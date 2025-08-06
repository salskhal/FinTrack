"use client";
import { useState, useEffect } from "react";
import { Transaction, DashboardSummary, User, DataState } from "@/types";
import {
  validateTransactions,
  validateDashboardSummary,
  validateUsers,
  getDefaultDashboardSummary,
} from "@/utils/validation";
import { sampleTransactions, dashboardSummary, sampleUsers } from "@/types";

// Simulate API delay for demonstration
const simulateApiDelay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Simulate random API failures for testing
const shouldSimulateError = () => Math.random() < 0.1; // 10% chance of error

// Simulate different types of errors
const getRandomError = () => {
  const errors = [
    "Network connection failed",
    "Server temporarily unavailable",
    "Request timeout",
    "Invalid response format",
    "Authentication failed",
  ];
  return errors[Math.floor(Math.random() * errors.length)];
};

export function useTransactions(): DataState<Transaction[]> & {
  refetch: () => void;
} {
  const [state, setState] = useState<DataState<Transaction[]>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchTransactions = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      await simulateApiDelay(800);

      if (shouldSimulateError()) {
        throw new Error(getRandomError());
      }

      // Simulate API response that might have invalid data
      const apiResponse = sampleTransactions;
      const validatedTransactions = validateTransactions(apiResponse);

      setState({
        data: validatedTransactions,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const refetch = () => {
    fetchTransactions();
  };

  return { ...state, refetch };
}

export function useDashboardSummary(): DataState<DashboardSummary> & {
  refetch: () => void;
} {
  const [state, setState] = useState<DataState<DashboardSummary>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchSummary = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      await simulateApiDelay(600);

      if (shouldSimulateError()) {
        throw new Error(getRandomError());
      }

      const validatedSummary = validateDashboardSummary(dashboardSummary);

      setState({
        data: validatedSummary,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      // Provide fallback data for summary to keep dashboard functional
      setState({
        data: getDefaultDashboardSummary(),
        isLoading: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const refetch = () => {
    fetchSummary();
  };

  return { ...state, refetch };
}

export function useUsers(): DataState<User[]> & { refetch: () => void } {
  const [state, setState] = useState<DataState<User[]>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchUsers = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      await simulateApiDelay(400);

      if (shouldSimulateError()) {
        throw new Error(getRandomError());
      }

      const validatedUsers = validateUsers(sampleUsers);

      setState({
        data: validatedUsers,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const refetch = () => {
    fetchUsers();
  };

  return { ...state, refetch };
}
