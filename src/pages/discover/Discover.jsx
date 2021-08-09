import React, { useEffect } from "react";

export default function Discover() {
  useEffect(() => {
    document.title = "Discovery";
  });

  return (
    <div className="app-page rel">
      <h1 className="page-title s24 fontb c333">Discover</h1>
    </div>
  );
}
