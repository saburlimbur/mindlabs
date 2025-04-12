import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import AppLayouts from "./components/layouts/AppLayouts";
import Category from "./pages/Category";
import Questions from "./pages/Question";
import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CategoryQuestionByName from "./pages/category/_params";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log("PUBLISHABLE_KEY:", PUBLISHABLE_KEY);

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<AppLayouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route
                path="/questions/:category"
                element={<CategoryQuestionByName />}
              />
              <Route path="/questions" element={<Questions />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
            </Route>
          </Routes>
          <Toaster position="top-right" reverseOrder={false} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ClerkProvider>
    </BrowserRouter>
  );
}

export default App;
