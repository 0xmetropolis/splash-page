'use client';

import { useState } from 'react';
import Image from 'next/image';
import cx from 'clsx';

export default function Projects({ items }) {
  const [active, setActive] = useState(null);

  const renderLogo = id => {
    let src = '';
    switch (id) {
      case 'metal':
        src = active === 'metal' ? '/metal-over.svg' : '/metal.svg';
        break;
      case 'oa':
        src = active === 'oa' ? '/oa-over.svg' : '/oa.svg';
        break;
      case 'pod':
        src = active === 'pod' ? '/pod-over.svg' : '/pod.svg';
        break;
    }

    return (
      <Image
        src={src}
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        className="max-w-[250px] md:max-w-none w-full h-auto"
        priority
      />
    );
  };

  return (
    <div className="flex flex-col gap-y-16 md:gap-y-20">
      {items.map(item => (
        <div key={item.id} className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-12">
            <a
              href={item.url}
              target="_blank"
              className="cursor-pointer flex items-center gap-x-10 block"
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}>
              {renderLogo(item.id)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                className={cx('transition-transform', {
                  'translate-x-2': active === item.id,
                  'md:translate-y-6': item.id === 'od'
                })}>
                <path
                  d="M11 10.5C10.1715 10.5 9.49997 11.1716 9.49997 12C9.49997 12.8284 10.1715 13.5 11 13.5V10.5ZM13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807611 1.97918 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807611 21.0711 0.807611 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
                  fill="#757C8D"
                />
              </svg>
            </a>
          </div>
          <p className={cx('transition-colors', { 'text-[#ABAFBA]': active === item.id })}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
