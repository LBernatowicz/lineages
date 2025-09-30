import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeToggle/ThemeToggle";
import { TopBar } from "./components/TopBar/TopBar";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { TreePage } from "./pages/TreePage";
import { NotesPage } from "./pages/NotesPage";
import { SettingsPage } from "./pages/SettingsPage";

export default function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div 
          className="min-h-screen transition-colors duration-300"
          style={{
            backgroundColor: 'var(--sand-2)',
          }}
        >
          <TopBar />
          <NavMenu onCollapseChange={setIsNavCollapsed} />
          
          {/* Main content area - adjusted for NavMenu */}
          <div 
            className="transition-all duration-300" 
            style={{ 
              minHeight: 'calc(100vh - 36px)',
              marginLeft: isNavCollapsed ? '60px' : '240px',
              paddingTop: '36px', // TopBar height
            }}
          >
            <Routes>
              <Route path="/" element={<TreePage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}