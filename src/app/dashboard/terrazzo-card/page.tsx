import React from "react";
import Group_VI from "./group-vi/group-vi";
import Group_VIII from "./group-viii/group-viii";
import Group_IX from "./group-ix/group-ix";
import Group_VII from "./group-vii/group-vii";

function TarrazzoCard() {
  return (
    <div>
      <div>
        <Group_VI />
      </div>
      <div>
        <Group_VII />
      </div>
      <div>
        <Group_VIII />
      </div>
      <div>
        <Group_IX />
      </div>
    </div>
  );
}

export default TarrazzoCard;
