import CompanyForm from "./components/CompanyForm";
import Logo from "./assets/Logo.png";
function App() {
  const styles = {
    marginLeft: 60,
    marginTop: 60,
  };
  return (
    <div className="App">
      <img src={Logo} alt="Logo" style={styles} />
      <CompanyForm />
    </div>
  );
}

export default App;
