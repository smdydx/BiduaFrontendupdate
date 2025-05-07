import { createContext, ReactNode, useContext } from "react";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: { username: string; email: string } | null;
  isLoading: boolean;
  login: (credentials: LoginData) => void;
  logout: () => void;
  register: (data: RegisterData) => void;
};

type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName?: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();

  // Simulated user state
  const user = null; // Replace with actual user state if needed
  const isLoading = false;

  // Simulated login function
  const login = (credentials: LoginData) => {
    console.log("Login called with:", credentials);
    toast({
      title: "Login successful",
      description: `Welcome back, ${credentials.username}!`,
    });
  };

  // Simulated logout function
  const logout = () => {
    console.log("Logout called");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  // Simulated register function
  const register = (data: RegisterData) => {
    console.log("Register called with:", data);
    toast({
      title: "Registration successful",
      description: `Welcome, ${data.username}!`,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}