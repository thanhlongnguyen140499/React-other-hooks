import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return l;
  }, [deferredInput]);

  return list;
};

export default List;
