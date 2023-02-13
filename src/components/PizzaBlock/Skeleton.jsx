import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="140" cy="122" r="122" />
    <rect x="1" y="270" rx="10" ry="10" width="280" height="25" />
    <rect x="-1" y="320" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="421" rx="10" ry="10" width="110" height="45" />
    <rect x="128" y="420" rx="29" ry="29" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
