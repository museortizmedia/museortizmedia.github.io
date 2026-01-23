import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

/**
 * Utility to merge tailwind classes safely
 */
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function Button({
    children,
    variant = 'solid',
    icon: Icon,
    onClick,
    className = "",
    type = "button",
    href,
    iconPosition = 'left',
    ...props
}) {
    const variants = {
        solid: "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30 hover:shadow-[var(--primary)]/50 hover:bg-[var(--primary)]/90",
        outline: "bg-transparent border-2 border-[var(--primary-background)] text-white hover:border-[var(--primary)] hover:bg-[var(--primary-background)]/5 shadow-lg shadow-[var(--primary-background)]/5"
    };

    const baseStyles = "px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3 active:scale-95 group overflow-hidden relative";

    const Component = href ? 'a' : 'button';

    // Helper to render icon correctly
    const renderIcon = () => {
        if (!Icon) return null;

        // If it's already a React element (like <Zap />)
        if (React.isValidElement(Icon)) {
            return Icon;
        }

        // If it's a string (like an emoji "📧")
        if (typeof Icon === 'string') {
            return <span>{Icon}</span>;
        }

        // If it's a component reference (like Zap)
        // We render it as a component
        const IconComponent = Icon;
        return <IconComponent size={18} />;
    };

    return (
        <Component
            type={href ? undefined : type}
            href={href}
            onClick={onClick}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <div className={cn(
                "relative z-10 flex items-center gap-2 group-hover:scale-105 transition-all",
                iconPosition === 'right' && "flex-row-reverse"
            )}>
                {renderIcon()}
                <span>{children}</span>
            </div>
        </Component>
    );
}
