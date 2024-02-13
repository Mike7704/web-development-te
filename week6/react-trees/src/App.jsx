import Header from "./components/Header";
import TreeCard from "./components/TreeCard";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <TreeCard
        treeName="Oak"
        location="Uk"
        imgLink="https://images.immediate.co.uk/production/volatile/sites/10/2023/06/2048x1365-Oak-trees-SEO-GettyImages-90590330-b6bfe8b.jpg?quality=90&resize=940,627"
      />
      <TreeCard
        treeName="Baobab"
        location="Africa"
        imgLink="https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/ad56c7fe-35bf-46c3-9900-67c2c2f4ae45/Green%20baobab%20at%20sunny%20day.%20Madagascar%20dreamstime_xxl_46207442%20(1).jpg?auto=compress%2Cformat&w=1200"
      />
      <Footer />
    </div>
  );
}
