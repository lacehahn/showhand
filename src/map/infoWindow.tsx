import react, { useState } from 'react';
import styled from '@emotion/styled';
import { NearByData } from '../common/model';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

interface InfoWindowProps extends NearByData {
}

const InfoWindowBox = styled.div`
  position: relative;
  bottom: 150px;
  left: -45px;
  width: 300px;
  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 0px;
  font-size: 14px;
  z-index: 1000;
`

export default function InfoWindow(props: InfoWindowProps) {
  const { id, name, address, type, advanced1, advanced2, advanced3, distance } = props;
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  // Dynamic base path for images
  const basePath = router.basePath || '';
  const imagePath = imageError ? `${basePath}/photos/placeholder.png` : `${basePath}/photos/${id}.png`;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <InfoWindowBox>
      <img 
        src={imagePath} 
        alt="locationPhoto" 
        style={{ width: '300px', height: '200px' }} 
        onError={handleImageError}
      />
      <div style={{ padding: 10, textAlign: 'left' }}>
        <div style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</div>
        <div style={{ fontSize: 14, color: "black"  }}>
          <div>
            <span>{address}</span>
          </div>
          <div>
          { distance && <span style={{ fontSize: 12, color: "black"  }}>{`${(Math.floor(distance))}${t('メートル')}`}</span> }
          </div>
        </div>
        <div style={{ fontSize: 12, color: "grey" }}>
          <div>{t(type)}</div>
          {renderIfNonnullAndNonEmpty(advanced1)}
          {renderIfNonnullAndNonEmpty(advanced2)}
          {renderIfNonnullAndNonEmpty(advanced3)}
        </div>
      </div>
    </InfoWindowBox>
  );
};

function renderIfNonnullAndNonEmpty(str?: string) {
  return (
    <>
        {str && str.trim() !== '' && (
            <div>{str}</div>
        )}
    </>
);
}

/*<span style={{ color: "grey" }}>{rating} </span>
<span style={{ color: "orange" }}>
  {String.fromCharCode(9733).repeat(Math.floor(rating))}
</span>
<span style={{ color: "lightgrey" }}>
  {String.fromCharCode(9733).repeat(5 - Math.floor(rating))}
</span>
*/