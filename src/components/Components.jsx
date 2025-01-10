import React, {useContext} from "react";
import { makeContext } from "../context/context";

const Components = () => {
    const consumeContext = useContext(makeContext)
  return (
    <div>
        {consumeContext.count}
    </div>);
};

export default Components;
