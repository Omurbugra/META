// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full border-t border-border py-6 bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
                Website made by <span className="font-medium">Ömür Buğra Gündüz</span>
            </div>
        </footer>
    );
};

export default Footer;
