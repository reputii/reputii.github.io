import Hero from "./components/sections/Hero/Hero";
import ProblemStatement from "./components/sections/ProblemStatement/ProblemStatement";
import HowItWorks from "./components/sections/HowItWorks/HowItWorks";
import CoreConcepts from "./components/sections/CoreConcepts/CoreConcepts";
import Faq from "./components/sections/Faq/Faq";
import TrustNotice from "./components/sections/TrustNotice/TrustNotice";
import CtaWaitlist from "./components/sections/CtaWaitlist/CtaWaitlist";
import Footer from "./components/Footer/Footer";

/**
 * Reputii 단독 사이트. 회사 산하 서비스가 아니라 Reputii 자체가 사이트
 * 루트(/)이므로 /about, /services, /contact 같은 회사용 페이지나 라우터가
 * 필요 없다 — plan.md의 7개 섹션을 이 한 페이지 안에 순서대로 배치한다.
 */
function App() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <CoreConcepts />
      <Faq />
      <TrustNotice />
      <CtaWaitlist />
      <Footer />
    </main>
  );
}

export default App;
