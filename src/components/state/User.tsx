import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loggIn, setLoggIn] = useState(false);
  const handleLogin = () => {
    setUser({
      name: "Cuong Tu",
      email: "cuongtd@gmail.com",
    });
    setLoggIn(true);
  };
  const handleLogout = () => {
    setUser(null);
    setLoggIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>LogIn</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>
        {loggIn
          ? `User Name is ${user?.name} and Email is ${user?.email}`
          : "You are not log in"}
      </div>
    </div>
  );
};
