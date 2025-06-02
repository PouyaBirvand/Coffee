import { cloneElement } from 'react';
import {
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '../../Icons';

const SocialMedia = () => {
  const SocialMedia_icons = [
    {
      text: '09122345678',
      gradient: 'from-[#9CEC6D] to-[#0F9916]',
      icon: <WhatsAppIcon />,
    },
    {
      text: '@Coffee_Kohan',
      gradient: 'from-[#F7A153] to-[#DF3035]',
      icon: <InstagramIcon />,
    },
    {
      text: '@Coffee_Kohan',
      gradient: 'from-[#06CDD3] to-[#0960C6]',
      icon: <TelegramIcon />,
    },
    {
      text: '@Coffee_Kohan',
      gradient: 'from-[#9894EC] to-[#8616AD]',
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <>
      <p className="mt-2 text-[0.9rem]">شبکه های اجتماعی</p>
      <ul className="flex pr-7 flex-wrap  border-b border-opacity-30 mt-2 pb-4 border-dark-cocoa  gap-x-4 gap-y-3">
        {SocialMedia_icons.map((item, index) => (
          <li key={index}>
            <a className="text-white text-xs rounded-3xl flex items-center bg-dark-cocoa bg-opacity-60 px-2">
              <div
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${item.gradient}  flex items-center justify-center relative left-2 scale-[1.1]`}
              >
                {cloneElement(item.icon, {
                  className: 'w-6 h-6 text-white',
                })}
              </div>
              <div className="relative right-0">{item.text}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SocialMedia;
