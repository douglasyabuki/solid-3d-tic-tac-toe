import { createSignal, onCleanup, onMount } from "solid-js";

export function useDrag(elementSelector: string) {
  const [isDragging, setIsDragging] = createSignal(false);
  const [previousPosition, setPreviousPosition] = createSignal({ x: 0, y: 0 });

  let rotationX = -20;
  let rotationY = -45;

  const startDrag = (x: number, y: number) => {
    setIsDragging(true);
    setPreviousPosition({ x, y });
  };

  const updateDrag = (x: number, y: number) => {
    const deltaX = x - previousPosition().x;
    const deltaY = y - previousPosition().y;
    rotationX -= deltaY * 0.5;
    rotationY += deltaX * 0.5;

    const element = document.querySelector(elementSelector) as HTMLElement;
    if (element) {
      element.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }

    setPreviousPosition({ x, y });
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e: MouseEvent) => {
    if (
      e.target instanceof HTMLElement &&
      e.target.className.includes("scoreboard")
    ) {
      return;
    }
    startDrag(e.clientX, e.clientY);
  };
  const onMouseMove = (e: MouseEvent) =>
    isDragging() && updateDrag(e.clientX, e.clientY);
  const onMouseUp = () => endDrag();

  const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (
      touch.target instanceof HTMLElement &&
      touch.target.className.includes("scoreboard")
    ) {
      return;
    }
    startDrag(touch.clientX, touch.clientY);
  };
  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging()) return;
    const touch = e.touches[0];
    updateDrag(touch.clientX, touch.clientY);
  };
  const onTouchEnd = () => endDrag();
  const onContextMenu = (e: MouseEvent) => e.preventDefault();

  onMount(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("contextmenu", onContextMenu);

    onCleanup(() => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("contextmenu", onContextMenu);
    });
  });

  return {
    isDragging,
    transformStyle: () => `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`,
    cursorStyle: () => (isDragging() ? "grabbing" : "grab"),
  };
}
