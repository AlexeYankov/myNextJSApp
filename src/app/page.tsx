import { router } from '@/shared/router';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default function IndexPage() {
  const headersList = headers();
  const id = headersList.get('id');

  if (id === null || id === undefined) {
    redirect(router.SIGN_IN);
  }
  redirect(router.SIGN_IN);
  // redirect(`${ROUTES.PROFILE}/${id}`);
}