import CategoryContainer from '../category-container/category-container.component'

import './categories-container.styles.scss'

const CategoriesContainer = ({ category }) => (
  <div className='categories-container'>
    {category.map(({ id, title }) => (
      <CategoryContainer category={ {id, title} } />
      ))}
  </div>
)
  
export default CategoriesContainer;