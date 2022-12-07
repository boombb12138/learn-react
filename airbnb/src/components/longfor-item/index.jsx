import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
const LongForItem = memo((props) => {
  const { itemData } = props;
  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img className="cover" src={itemData.picture_url} alt=""></img>
          <div className="bg-cover"></div>
          <div className="city-info">
            <div className="city">{itemData.city}</div>
            <div className="price">{itemData.price}</div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

LongForItem.propTypes = { itemData: PropTypes.object };

export default LongForItem;
