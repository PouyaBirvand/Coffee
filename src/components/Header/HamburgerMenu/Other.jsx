import { useNavigate } from 'react-router-dom';
import { AboutIcon, BasketIcon } from '../../Icons';

const Others = () => {
  const navigate = useNavigate();

  const Other_icons = [
    {
      text: 'سفارش ها',
      icon: <BasketIcon />,
      onclick: () => {
        navigate('/cart', { replace: true });
      },
    },
    {
      text: 'درباره ما',
      icon: <AboutIcon />,
    },
  ];

  return (
    <>
      <p className="mt-1 pt-1 text-[0.8]">دیگر چیز ها</p>
      <ul className="flex gap-1 flex-col pl-5 border-b border-opacity-30 pb-2 mt-1 border-dark-cocoa">
        {Other_icons.map((item, index) => (
          <li key={index}>
            <a
              className="text-dark-cocoa text-[1.1rem] flex items-center cursor-pointer"
              onClick={item.onclick}
            >
              <span className="w-[2rem] h-[2rem] mr-7 flex items-center justify-center">
                {item.icon}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Others;
