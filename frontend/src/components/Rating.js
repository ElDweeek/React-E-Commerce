
import { faStar as solidStar, faStarHalfAlt as solidStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Rating = (props) => {
  console.log(props)
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon icon={props.value >= 1 ? solidStar : props.value >= 0.5 ? solidStarHalf : regularStar} />
      </span>
      <span>
        <FontAwesomeIcon icon={props.value >= 2 ? solidStar : props.value >= 1.5 ? solidStarHalf : regularStar} />
      </span>
      <span>
        <FontAwesomeIcon icon={props.value >= 3 ? solidStar : props.value >= 2.5 ? solidStarHalf : regularStar} />
      </span>
      <span>
        <FontAwesomeIcon icon={props.value >= 4 ? solidStar : props.value >= 3.5 ? solidStarHalf : regularStar} />
      </span>
      <span>
        <FontAwesomeIcon icon={props.value >= 5 ? solidStar : props.value >= 4.5 ? solidStarHalf : regularStar} />
      </span>
      <span>
        {props.text || ''}
      </span>
    </div>
  )

}
export default Rating;



// import { faS, faR, faStarHalf, faStar, faregularstar } from '@fortawesome/free-solid-svg-icons'


// const Rating = (props) => {
//   return (
//     <div className="rating">
//       <span>
//         <i className={props.value >= 1 ? [faS,faStar] : props.value >= 0.5 ? [faR,faStarHalf] : [faR,faStar]}/>
//       </span>
//       <span>
//         <i className={props.value >= 2 ? [faS,faStar] : props.value >= 1.5 ? [faR,faStarHalf] : [faR,faStar]} />
//       </span>
//       <span>
//         <i className={props.value >= 3 ? [faS,faStar] : props.value >= 2.5 ? [faR,faStarHalf] : [faR,faStar]} />
//       </span>
//       <span>
//         <i className={props.value >= 4 ? [faS,faStar] : props.value >= 3.5 ? [faR,faStarHalf] : [faR,faStar]} />
//       </span>
//       <span>
//         <i className={props.value >= 5 ? [faS,faStar] : props.value >= 4.5 ? [faR,faStarHalf] : [faR,faStar]} />
//       </span>
//       <span>
//         {props.text || ''}
//       </span>
//     </div>
//   )

// }
// export default Rating;