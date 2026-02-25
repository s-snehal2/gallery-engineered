import React from "react";
import Group_I from "./group-i/group-i";
import Group_VA from "./group-v-a/group-v-a";
import Group_IV from "./group-iv/group-iv";
import Group_VB from "./group-v-b/group-v-b";

function MarbleCard() {
  return (
    <div>
      <div>
        <Group_I />
      </div>
      <div>
        <Group_IV />
      </div>
      <div>
        <Group_VA />
      </div>
      <div>
        <Group_VB />
      </div>
    </div>
  );
}

export default MarbleCard;
