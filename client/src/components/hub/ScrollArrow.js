import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const ScrollArrow = ({handleLeftScroll, handleRightScroll}) => {
  return ( 
    <>
      <div className="hero__container-left-scroll" 
           onClick={handleLeftScroll}>
        <ArrowBackIosIcon />
      </div>
      <div className="hero__container-right-scroll"
           onClick={handleRightScroll}>
        <ArrowForwardIosIcon />
      </div>
    </>
  );
}
 
export default ScrollArrow;