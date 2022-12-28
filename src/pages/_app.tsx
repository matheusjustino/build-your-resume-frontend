import "../styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";

// CONTEXTS
import { CVProvider } from "../contexts/cv.context";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CVProvider>
			<Component {...pageProps} />
		</CVProvider>
	);
}
