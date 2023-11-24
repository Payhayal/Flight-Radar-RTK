import { useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="/logo-f.png" />
        <h2>
          <span>Flight</span> <span>Radar</span>
        </h2>
      </div>

      <h4>
        {store.isLoading
          ? "Calculating the flights.."
          : `${store.flights.length} flights found`}
      </h4>
    </header>
  );
};

export default Header;
