import './category-container.styles.scss'

const CategoryContainer = ({ category: { id, title, imageUrl } }) => (
  <div key={id} className='category-container'>
    <div className='background-image' alt='' style={{
      backgroundImage: `url(${imageUrl})`
    }} />
    <div className='category-body-container'>
      <h2>{`${title}`}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryContainer;