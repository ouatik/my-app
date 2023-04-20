import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function MyApp({ Component, pageProps }) {
 const [queryClient] = useState(() => new QueryClient());

 return (
   <QueryClientProvider client={queryClient}>
     <Component {...pageProps} />
   </QueryClientProvider>
 );
}
