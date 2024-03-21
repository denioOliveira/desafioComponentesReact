import './styles.css';
import carImg from '../../assets/car-card.png';

export default function CardCatalog() {
  return (
    <>
      <div className='ct-cards-container'>
        <div className='ct-car-card ct-mg-bottom-25'>
          <div className='ct-car-card-img'>
            <img src={carImg} alt="Carro" />
          </div>
          <p className='ct-car-card-description'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </>
  );
}