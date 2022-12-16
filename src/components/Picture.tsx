import { Url } from '../types';

interface PictureProps {
  url: Url;
  inSwiper?: boolean;
}

const Picture = ({ url, inSwiper }: PictureProps) => {
  let sizes = {
    width: 255,
    height: 174,
  };

  if (inSwiper) {
    sizes = {
      width: 240,
      height: 140,
    };
  }

  return (
    <picture>
      {!inSwiper && (
        <>
          <source
            media="(min-width: 1024px)"
            type="image/jpeg"
            srcSet={url.large}
          />
          <source
            media="(min-width: 768px)"
            type="image/jpeg"
            srcSet={url.medium}
          />
        </>
      )}
      {inSwiper && (
        <source
          media="(min-width: 768px)"
          type="image/jpeg"
          srcSet={url.large}
        />
      )}
      <img
        className="w-full object-cover rounded-lg"
        width={sizes.width}
        height={sizes.height}
        src={url.small}
        alt="Movie preview"
      />
    </picture>
  );
};

export default Picture;
