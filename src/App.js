import CategoriesContainer from './components/categories-container/categories-container.component'

const App = () => {
  const category = [
    {
      id: 1,
      title: 'Hats', 
    },
    {
      id: 2,
      title: 'Jackets', 
    },
    {
      id: 3,
      title: 'Sneakers', 
    },
    {
      id: 4,
      title: 'Womens', 
    },
    {
      id: 5,
      title: 'Mens', 
    },
    
  ]

  return (
    <CategoriesContainer category={ category } />
  );
}

export default App;
