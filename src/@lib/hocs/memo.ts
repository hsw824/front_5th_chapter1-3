import { shallowEquals } from "../equalities";
import { ComponentType, createElement } from "react";
import { useRef } from "../hooks";

export function memo<P extends object>(
  Component: ComponentType<P>,
  _equals = shallowEquals,
) {
  return function WrapperComponent(props: P) {
    const prevProps = useRef<P | null>(null);
    const isInitialized = useRef(true);

    if (isInitialized.current) {
      prevProps.current = props;
      isInitialized.current = false;
      const element = createElement(Component, props);
      return element;
    }

    if (!_equals(prevProps.current, props)) {
      prevProps.current = props;
      isInitialized.current = false;
      const element = createElement(Component, props);

      return element;
    }

    return null;
  };
}
