import React from 'react';

// Bandeirinhas em SVG inline: não dependem de imagem externa nem de CDN,
// então carregam junto com o bundle e ficam nítidas em qualquer tamanho.

export function FlagBR({ className = 'flag-icon' }) {
  return (
    <svg className={className} viewBox="0 0 28 20" role="img" aria-label="Brasil">
      <defs>
        <clipPath id="flag-br-globe">
          <circle cx="14" cy="10" r="4.8" />
        </clipPath>
      </defs>
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2.2 25.4 10 14 17.8 2.6 10Z" fill="#fedf00" />
      <circle cx="14" cy="10" r="4.8" fill="#002776" />
      <path
        d="M6 12.6c4.6-2.2 10.4-1.6 14.6 1.2l-.5 1.6C16.2 12.6 10.4 12 6 14.1Z"
        fill="#ffffff"
        clipPath="url(#flag-br-globe)"
      />
    </svg>
  );
}

export function FlagES({ className = 'flag-icon' }) {
  return (
    <svg className={className} viewBox="0 0 28 20" role="img" aria-label="España">
      <rect width="28" height="20" fill="#c60b1e" />
      <rect y="5" width="28" height="10" fill="#ffc400" />
      <rect x="5" y="7.6" width="3.4" height="4.8" rx="0.6" fill="#c60b1e" />
      <rect x="5.9" y="6.4" width="1.6" height="1.6" rx="0.8" fill="#c60b1e" />
    </svg>
  );
}

export function FlagUS({ className = 'flag-icon' }) {
  const stripe = 20 / 13;
  const redStripes = [0, 2, 4, 6, 8, 10, 12];
  const stars = [
    [1.6, 1.4], [4.4, 1.4], [7.2, 1.4], [10, 1.4],
    [3, 3.4], [5.8, 3.4], [8.6, 3.4],
    [1.6, 5.4], [4.4, 5.4], [7.2, 5.4], [10, 5.4],
    [3, 7.4], [5.8, 7.4], [8.6, 7.4],
  ];

  return (
    <svg className={className} viewBox="0 0 28 20" role="img" aria-label="United States">
      <rect width="28" height="20" fill="#ffffff" />
      {redStripes.map((index) => (
        <rect key={index} y={index * stripe} width="28" height={stripe} fill="#b22234" />
      ))}
      <rect width="11.6" height={stripe * 7} fill="#3c3b6e" />
      {stars.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.62" fill="#ffffff" />
      ))}
    </svg>
  );
}

export const FLAG_BY_CODE = {
  pt: FlagBR,
  es: FlagES,
  en: FlagUS,
};
