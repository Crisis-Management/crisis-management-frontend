import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useEmergency } from '../../hooks/useEmergency';
import { Button } from '../ui/Button';

export const SOSButton = () => {
  const [isActive, setIsActive] = useState(false);
  const { triggerSOS, cancelSOS } = useEmergency();

  const handleSOSClick = async () => {
    if (!isActive) {
      await triggerSOS();
      setIsActive(true);
    } else {
      await cancelSOS();
      setIsActive(false);
    }
  };

  return (
    <Button
      onClick={handleSOSClick}
      className={`
        fixed bottom-8 right-8 rounded-full p-6
        ${isActive ? 'bg-red-600 animate-pulse' : 'bg-primary'}
      `}
    >
      <AlertTriangle className="h-8 w-8" />
      {isActive ? 'Cancel SOS' : 'SOS Alert'}
    </Button>
  );
};