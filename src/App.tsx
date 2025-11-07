import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyNeedWebsite } from "./components/WhyNeedWebsite";
import { WebsiteTypes } from "./components/WebsiteTypes";
import { Process } from "./components/Process";
import { Features } from "./components/Features";
import { CaseStudies } from "./components/CaseStudies";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { CookieBanner } from "./components/CookieBanner";
import { DialogProvider, useDialogs } from "./components/DialogProvider";
import { PrivacyPolicyDialog } from "./components/PrivacyPolicyDialog";

function AppContent() {
  const { isPrivacyPolicyOpen, closePrivacyPolicy } = useDialogs();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyNeedWebsite />
        <WebsiteTypes />
        <div id="process">
          <Process />
        </div>
        <Features />
        <div id="cases">
          <CaseStudies />
        </div>
        <ContactForm />
      </main>
      <Footer />
      <CookieBanner />
      <Toaster position="top-right" />
      
      {/* Single Privacy Policy Dialog instance */}
      <PrivacyPolicyDialog 
        open={isPrivacyPolicyOpen} 
        onOpenChange={closePrivacyPolicy}
      />
    </div>
  );
}

export default function App() {
  return (
    <DialogProvider>
      <AppContent />
    </DialogProvider>
  );
}
