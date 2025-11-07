import { createContext, useContext, useState, ReactNode } from "react";

interface DialogContextType {
  openPrivacyPolicy: () => void;
  closePrivacyPolicy: () => void;
  isPrivacyPolicyOpen: boolean;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  const openPrivacyPolicy = () => setIsPrivacyPolicyOpen(true);
  const closePrivacyPolicy = () => setIsPrivacyPolicyOpen(false);

  return (
    <DialogContext.Provider
      value={{
        openPrivacyPolicy,
        closePrivacyPolicy,
        isPrivacyPolicyOpen,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function useDialogs() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogs must be used within DialogProvider");
  }
  return context;
}
