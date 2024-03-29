"use client";
import { useCookie } from "@/context/context";

export default function CookieClicker() {
  const { state, dispatch } = useCookie();

  return (
    <div>
      <button onClick={() => dispatch({ type: "+5" })}>MOAR cookies!</button>
      <p>Cookies: {state}</p>
      <button onClick={() => dispatch({ type: "-5" })}>LESS cookies!</button>
    </div>
  );
}
