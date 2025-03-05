
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

type AuthAction =
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean };

interface AuthContextProps {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const AUTH_STORAGE_KEY = "woodcraft_auth";

// Mock user database
const mockUsers = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@example.com",
    password: "password123",
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available
  const initialState: AuthState = (() => {
    if (typeof window === "undefined") {
      return { user: null, isAuthenticated: false, isLoading: true };
    }

    try {
      const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
      if (storedAuth) {
        const { user } = JSON.parse(storedAuth);
        return { user, isAuthenticated: !!user, isLoading: false };
      }
    } catch (error) {
      console.error("Failed to parse auth from localStorage:", error);
    }

    return { user: null, isAuthenticated: false, isLoading: false };
  })();

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Save auth state to localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && !state.isLoading) {
      localStorage.setItem(
        AUTH_STORAGE_KEY,
        JSON.stringify({ user: state.user })
      );
    }
  }, [state.user, state.isLoading]);

  // Mock login functionality
  const login = async (email: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const { password, ...userWithoutPassword } = user;
        dispatch({ type: "LOGIN_SUCCESS", payload: userWithoutPassword });
        toast.success(`Welcome back, ${userWithoutPassword.name}!`);
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Mock register functionality
  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Check if user already exists
      if (mockUsers.some((u) => u.email === email)) {
        throw new Error("Email already in use");
      }

      // Create new user (in a real app, this would be an API call)
      const newUser = {
        id: mockUsers.length + 1,
        name,
        email,
        password,
      };

      mockUsers.push(newUser);

      const { password: _, ...userWithoutPassword } = newUser;
      dispatch({ type: "LOGIN_SUCCESS", payload: userWithoutPassword });

      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  // Logout functionality
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    toast.info("Logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
