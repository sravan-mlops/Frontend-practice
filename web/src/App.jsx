import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <ProfileCard
        name="Sravan G"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/100"
      />
      <Footer />
    </>
  );
}

export default App;
