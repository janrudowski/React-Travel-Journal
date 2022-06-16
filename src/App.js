import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <div>
      <Nav />
      <div className='cards'>{cards}</div>
    </div>
  );
}
