import { useParams } from 'react-router-dom';

function Restaurants() {
  const { category } = useParams();

  return (
    <div>
      <h1>Restaruant</h1>
      <h3>{category}</h3>
    </div>
  );
}

export default Restaurants;
