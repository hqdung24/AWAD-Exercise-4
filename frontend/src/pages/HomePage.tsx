import { AppSidebar } from '@/components/app-sidebar';
import { SectionCards } from '@/components/section-cards';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useSession } from '@/hooks/useSession';
export default function HomePage() {
  // Try to resolve current session (this will call /users/me and trigger
  // a refresh flow if needed). While the session query is loading we
  // shouldn't redirect the user because the store is reset on reload.
  const { data: me, isLoading, isError } = useSession();

  // While checking session, render nothing (or a spinner) to avoid an
  // immediate redirect to /signin when the zustand store is still at its
  // initial state after a hard reload.
  if (isLoading || isError || !me) {
    return null;
  }
  console.log('user profile: ', me);
  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6"></div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
