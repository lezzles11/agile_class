import React from "react";
import FirstColumn from "./FirstColumn";
import FirstRow from "./FirstRow";
import SecondColumn from "./SecondColumn";

function Template() {
  return (
    <div>
      <FirstRow url="" title="" start="start" location="location" />
      <FirstColumn
        title1="title1"
        text1="text1"
        title2="title2"
        text2="text2"
        smalltitle1=""
        smalltext1=""
        smalltitle2=""
        smalltext2=""
      />
      <SecondColumn
        length=""
        effort=""
        price=""
        col2title1=""
        col2text1=""
        col2title2=""
        col2text2=""
        col2text3=""
        col2title3=""
        col2text4=""
        col2title4=""
      />
    </div>
  );
}

export default Template;
