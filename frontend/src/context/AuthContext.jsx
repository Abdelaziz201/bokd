import { createContext, useState, useEffect } from 'react';

// Create context with default values
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for user data on mount
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                // Normalize user data
                setUser({
                    ...parsedUser,
                    id: parsedUser.id || parsedUser._id,
                    role: parsedUser.role || 'user'
                });
            } catch (error) {
                console.error("Failed to parse user", error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // Normalize user data on login
        const normalizedUser = {
            ...userData,
            id: userData.id || userData._id,
            role: userData.role || 'user'
        };
        setUser(normalizedUser);
        localStorage.setItem('user', JSON.stringify(normalizedUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const value = {
        user,
        isAdmin: user?.role === 'admin',
        login,
        logout,
        loading
    };

    if (loading) {
        return <div>Loading...</div>; // Or your loading component
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};