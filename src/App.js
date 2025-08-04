import "./App.css";
import HomePage from "./Home";
import LoginPage from "./Login";
import CreateAccount from "./Create";
import FindJobsPage from "./FindJobs";
import CompanydetailsPage from "./Companydetails";
import JobBreakdownPage from "./Jobbreakdown";
import CareerTipsPage from "./CareerTips";
import ArticleDetailsPage from "./ArticleDetail";
import ErrorPage from "./ErrorPage";
import ResetPasswordForm from "./ResetPasswordForm";
import RecoveryEmailPage from "./RecoveryEmail";
import AboutYouFirstPage from "./AboutYouFirst";
import AboutYouSecondPage from "./AboutYouSecond";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/findjobs" element={<FindJobsPage />} />
          <Route path="/jobdetails/:id" element={<CompanydetailsPage />} />
          <Route path="/jobbreakdown/:id" element={<JobBreakdownPage />} />
          <Route path="/careertips" element={<CareerTipsPage />} />
          <Route path="/articledetails/:id" element={<ArticleDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/recoveryEmailPage" element={<RecoveryEmailPage />} />
          <Route path="/reset-password" element={<ResetPasswordForm />} />
          <Route path="/aboutyoufirst" element={<AboutYouFirstPage />} />
          <Route path="/aboutyousecond" element={<AboutYouSecondPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
