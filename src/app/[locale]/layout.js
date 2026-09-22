import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IntlProvider } from '@/contexts/IntlContext';
import { getMessages } from '@/lib/i18n';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </IntlProvider>
  );
}
