import { useEffect } from 'react';

interface LumaRegistrationProps {
  eventId?: string;
  className?: string;
  variant?: 'button' | 'embedded';
}

export function LumaRegistration({ 
  eventId = 'evt-fGRX3jAL31GE7gI',
  className = '',
  variant = 'button'
}: LumaRegistrationProps) {
  useEffect(() => {
    // Load the Luma checkout script
    const script = document.getElementById('luma-checkout');
    if (!script) {
      const newScript = document.createElement('script');
      newScript.id = 'luma-checkout';
      newScript.src = 'https://embed.lu.ma/checkout-button.js';
      newScript.async = true;
      document.body.appendChild(newScript);
    } else {
      // Reinitialize if script already exists
      if (window.LumaCheckout) {
        window.LumaCheckout.unmount();
        window.LumaCheckout.mount();
      }
    }
  }, []);

  if (variant === 'embedded') {
    return (
      <div 
        id={`luma-${eventId}`}
        className={`relative ${className}`}
        data-luma-action="register"
        data-luma-event-id={eventId}
      />
    );
  }

  return (
    <a
      href={`https://luma.com/event/${eventId}`}
      className={` transition-colors duration-200 hover:brightness-90 inline-block text-center ${className}`}
      data-luma-action="checkout"
      data-luma-event-id={eventId}
    >
      Register for Event
    </a>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    LumaCheckout?: {
      mount: () => void;
      unmount: () => void;
    };
  }
}
