import { AttributionsModal } from '@/components/AttributionsModal';

export function Footer() {
  const creator = 'Kelly Ripple';
  const currentYear = new Date().getFullYear();
  const copyright = `© ${currentYear} ${creator}`;

  return (
    <footer className="footer">
      <div>{copyright}</div>
      <AttributionsModal />
    </footer>
  );
}
