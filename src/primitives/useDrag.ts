import { createSignal, onCleanup, onMount } from "solid-js";

export function useDrag(elementSelector: string) {
  const [isDragging, setIsDragging] = createSignal(false);
  const [previousMousePosition, setPreviousMousePosition] = createSignal({
    x: 0,
    y: 0,
  });
  let rotationX = -20;
  let rotationY = -45;

  const onMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging()) return;

    const deltaX = e.clientX - previousMousePosition().x;
    const deltaY = e.clientY - previousMousePosition().y;
    rotationX -= deltaY * 0.5;
    rotationY += deltaX * 0.5;

    const element = document.querySelector(elementSelector) as HTMLElement;
    if (element) {
      element.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }

    setPreviousMousePosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  onMount(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    onCleanup(() => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    });
  });

  return {
    isDragging,
    transformStyle: () => `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
    cursorStyle: () => (isDragging() ? "grabbing" : "grab"),
  };
}
