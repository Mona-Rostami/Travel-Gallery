import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Photo from "./components/photo";
import Massage from "./components/massege";
import Album from "./components/album";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Photo />
      <Gallery />
      <Album/>
      <Massage />
    </div>
  );
}
export default App;
