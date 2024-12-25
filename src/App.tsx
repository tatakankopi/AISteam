import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseList from './pages/Courses/CourseList';
import CourseDetail from './pages/Courses/CourseDetail';
import MaterialList from './pages/Materials/MaterialList';
import QuizList from './pages/Quiz/QuizList';
import ReportList from './pages/Reports/ReportList';
import MyLinkPrompt from './pages/Prompt/MyLinkPrompt';
import PromptList from './pages/Prompt/PromptList';
import EbookList from './pages/Ebook/EbookList';
import ForumList from './pages/Forum/ForumList';
import AnnouncementList from './pages/Announcements/AnnouncementList';
import StudentList from './pages/Students/StudentList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="ml-64">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<CourseList />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/materials" element={<MaterialList />} />
              <Route path="/quiz" element={<QuizList />} />
              <Route path="/reports" element={<ReportList />} />
              <Route path="/mylink" element={<MyLinkPrompt />} />
              <Route path="/prompts" element={<PromptList />} />
              <Route path="/ebooks" element={<EbookList />} />
              <Route path="/forum" element={<ForumList />} />
              <Route path="/announcements" element={<AnnouncementList />} />
              <Route path="/students" element={<StudentList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;