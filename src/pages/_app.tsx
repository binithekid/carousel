import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={archivo.className}>
      <Component {...pageProps} />
    </main>
  );
}
