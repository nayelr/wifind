
import React, { createContext, useContext, useState } from 'react';

interface ViewSettingsContextType {
  backgroundColor: 'dark' | 'light';
  scaleFactor: number;
  renderingQuality: 'high' | 'medium' | 'low';
  setBackgroundColor: (color: 'dark' | 'light') => void;
  setScaleFactor: (scale: number) => void;
  setRenderingQuality: (quality: 'high' | 'medium' | 'low') => void;
}

const ViewSettingsContext = createContext<ViewSettingsContextType | undefined>(undefined);

export const ViewSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [backgroundColor, setBackgroundColor] = useState<'dark' | 'light'>('dark');
  const [scaleFactor, setScaleFactor] = useState(1);
  const [renderingQuality, setRenderingQuality] = useState<'high' | 'medium' | 'low'>('high');

  return (
    <ViewSettingsContext.Provider value={{
      backgroundColor,
      scaleFactor,
      renderingQuality,
      setBackgroundColor,
      setScaleFactor,
      setRenderingQuality
    }}>
      {children}
    </ViewSettingsContext.Provider>
  );
};

export const useViewSettings = () => {
  const context = useContext(ViewSettingsContext);
  if (!context) {
    throw new Error('useViewSettings must be used within a ViewSettingsProvider');
  }
  return context;
};
