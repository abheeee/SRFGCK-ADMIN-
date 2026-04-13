import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminToken", "demo-token");
      localStorage.setItem("adminName", "Admin User");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-3 sm:px-4 bg-gradient-to-br from-blue-50 to-indigo-100">

      <Card className="w-full max-w-sm sm:max-w-md shadow-lg rounded-xl">

        {/* Header */}
        <CardHeader className="text-center space-y-1 pb-3 sm:pb-4">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Admin Login
          </CardTitle>

          <CardDescription className="text-xs sm:text-sm">
            Enter your credentials to access the admin panel
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">

            {/* Username */}
            <div className="space-y-1.5">
              <Label htmlFor="username" className="text-sm">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-10 text-sm"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 text-sm"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <Alert variant="destructive">
                <AlertDescription className="text-xs sm:text-sm">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            {/* Button */}
            <Button type="submit" className="w-full h-10 text-sm">
              Login
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;