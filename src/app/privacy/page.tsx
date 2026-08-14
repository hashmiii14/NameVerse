import { redirect } from 'next/navigation';

export default function PrivacyPageRedirect() {
  redirect('/privacy-policy');
}
