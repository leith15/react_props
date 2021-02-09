import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile.js";

function App() {
  const handleAlert = (name) => {
    alert(`hi I am ${name}`);
  };

  return (
    <div className="App">
      <Profile
        fullName="x"
        bio="X  is a............"
        Email="x@gmail.com"
        phoneNumber="93261666"
        handleAlert={handleAlert}
      >
        <img src="/ProfilPhoto.png" />
      </Profile>
    </div>
  );
}

export default App;
