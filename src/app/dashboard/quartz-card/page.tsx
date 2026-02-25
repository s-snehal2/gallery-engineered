import React from "react";
import Group_IX from "./group-ix/group-ix";
import Group_I from "./group-i/group-i";
import Group_IA from "./group-i-A/group-i";

function QuartzCard() {
  return (
    <div>
      <div>
        <Group_I />
      </div>
      <div>
        <Group_IA />
      </div>
      <div>
        <Group_IX />
      </div>
    </div>
  );
}

export default QuartzCard;
