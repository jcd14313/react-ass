// Lib
import React from "react";
import { Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "./context/auth-context";
import { MainProvider } from "./context/main-context";

// Components
import ProtectedLayout from "./components/layout/protected-layout";
import HomeLayout from "./components/layout/home-layout";

// Pages
import LoginPage from "./pages/login-page";
import CreateStudentPage from "./pages/create-student-page";
import UpdateStudentPage from "./pages/update-student-page";
import StudentsPage from "./pages/students-page";
import NotFoundPage from "./pages/not-found";

// Styles
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <MainProvider>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="dashboard" element={<ProtectedLayout />}>
            <Route index element={<StudentsPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="students/new" element={<CreateStudentPage />} />
            <Route path="students/:id" element={<UpdateStudentPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
