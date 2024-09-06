import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Adsense = ({
  client, slot, format, responsive,
}) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format || 'auto'}
        data-full-width-responsive={responsive || 'true'}
      />
    </div>
  );
};

// Add prop validation with PropTypes
Adsense.propTypes = {
  client: PropTypes.string.isRequired,
  slot: PropTypes.string.isRequired,
  format: PropTypes.string,
  responsive: PropTypes.string,
};

Adsense.defaultProps = {
  format: 'auto',
  responsive: 'true',
};

export default Adsense;
