import { useModal } from '../../../context/ModalContext';
import { useAppContext } from '../../../context/AppContext';

const BackButton = ({ isCartPage, navigate, isExpanded, setIsExpanded }) => {
  const { handleBackClick } = useModal();
  const { orderDetails } = useAppContext();

  const handleClick = () => {
    if (isCartPage) {
      const isInCompletedView = Boolean(orderDetails?.success);
      handleBackClick(isInCompletedView);
      if (!isInCompletedView) {
        navigate('/', { replace: true });
      }
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <button
      aria-label="Arrow"
      className="focus:outline-none z-10"
      onClick={handleClick}
    >
      <lord-icon
        src="https://cdn.lordicon.com/vduvxizq.json"
        trigger="loop"
        delay="1000"
        colors="primary:#412f26"
        style={{
          width: '35px',
          height: '35px',
          transform: 'rotate(180deg)',
        }}
      />
    </button>
  );
};

export default BackButton;
