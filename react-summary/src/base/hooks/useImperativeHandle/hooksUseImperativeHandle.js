import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
//通过 useImperativeHandle 用于让父组件获取子组件内的索引
//useImperativeHandle 透传 Ref

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
}

const ChildInput = forwardRef(ChildInputComponent);

export default function hooksUseImperativeHandle() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}