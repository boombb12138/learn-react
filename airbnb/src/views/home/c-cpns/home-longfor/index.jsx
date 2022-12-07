import ScrollView from "@/base-ui/scroll-view";
import SectionHeader from "@/components/section-header";
import LongForItem from "@/components/longfor-item";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforWrapper } from "./style";

const HomeLongFor = memo((props) => {
  const { infoData } = props;
  return (
    <LongforWrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <LongForItem itemData={item} key={item.city}></LongForItem>;
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongFor.propTypes = {};

export default HomeLongFor;
