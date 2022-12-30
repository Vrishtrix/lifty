import '../styles/globals.css';
import '@master/css';
import '@master/normal.css';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState } from 'react';

import type { AppProps } from 'next/app';

const MyApp = ({
	Component,
	pageProps,
}: AppProps<{
	initialSession: Session;
}>) => {
	const [supabaseClient] = useState(() => createBrowserSupabaseClient());

	return (
		<SessionContextProvider
			supabaseClient={supabaseClient}
			initialSession={pageProps.initialSession}
		>
			<Component {...pageProps} />
		</SessionContextProvider>
	);
};

export default MyApp;
