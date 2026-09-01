"use client";

import React, { useEffect, useRef } from "react";

export interface MapDestination {
  id: number;
  title: string;
  country: string;
  lat: number;
  lng: number;
  price: string;
  color: string; // tailwind hex fallback
  active: boolean;
}

interface Props {
  destinations: MapDestination[];
  activeId: number | null;
  onPinClick: (id: number) => void;
}

export default function DestinationsMap({ destinations, activeId, onPinClick }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<any>(null);
  const markersRef = useRef<Record<number, any>>({});

  useEffect(() => {
    if (!mapRef.current) return;

    // Dynamically import leaflet (client-only)
    import("leaflet").then((L) => {
      // Avoid double init
      if (leafletRef.current) return;

      // Fix default icon paths broken by webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [15, 100],
        zoom: 3,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: true,
      });

      leafletRef.current = map;

      // OpenStreetMap tiles — dark mode applied via CSS filter (no API key needed)
      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: "abc",
          maxZoom: 19,
        }
      ).addTo(map);

      // Custom zoom control (bottom-right)
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Attribution bottom-left tiny
      L.control
        .attribution({ position: "bottomleft", prefix: false })
        .addTo(map);

      // Add markers for each destination
      destinations.forEach((dest) => {
        const isActive = dest.id === activeId;

        const markerHtml = `
          <div class="tm-marker ${isActive ? "tm-marker--active" : ""}" data-id="${dest.id}">
            <span class="tm-marker__pulse"></span>
            <span class="tm-marker__dot"></span>
            <div class="tm-marker__label">${dest.price}</div>
          </div>
        `;

        const icon = L.divIcon({
          html: markerHtml,
          className: "",
          iconSize: [40, 40],
          iconAnchor: [20, 20],
        });

        const marker = L.marker([dest.lat, dest.lng], { icon })
          .addTo(map)
          .on("click", () => onPinClick(dest.id));

        markersRef.current[dest.id] = marker;
      });

      // Fit bounds to show all markers
      const coords = destinations.map((d) => [d.lat, d.lng] as [number, number]);
      if (coords.length > 0) {
        map.fitBounds(L.latLngBounds(coords), { padding: [50, 50] });
      }
    });

    return () => {
      if (leafletRef.current) {
        leafletRef.current.remove();
        leafletRef.current = null;
        markersRef.current = {};
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update marker styles when activeId changes
  useEffect(() => {
    destinations.forEach((dest) => {
      const marker = markersRef.current[dest.id];
      if (!marker) return;
      const el = marker.getElement();
      if (!el) return;
      const inner = el.querySelector(".tm-marker");
      if (!inner) return;
      if (dest.id === activeId) {
        inner.classList.add("tm-marker--active");
      } else {
        inner.classList.remove("tm-marker--active");
      }
    });
  }, [activeId, destinations]);

  return (
    <>
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      {/* Custom marker styles */}
      <style>{`
        .tm-marker {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .tm-marker__pulse {
          position: absolute;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(16,185,129,0.25);
          animation: tm-ping 2s cubic-bezier(0,0,0.2,1) infinite;
        }
        .tm-marker--active .tm-marker__pulse {
          background: rgba(16,185,129,0.45);
          width: 36px;
          height: 36px;
        }
        .tm-marker__dot {
          position: relative;
          z-index: 1;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #10b981;
          border: 2.5px solid #fff;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.35), 0 4px 12px rgba(16,185,129,0.5);
          transition: transform 0.2s;
        }
        .tm-marker--active .tm-marker__dot {
          width: 18px;
          height: 18px;
          background: #059669;
          box-shadow: 0 0 0 4px rgba(16,185,129,0.5), 0 6px 16px rgba(16,185,129,0.6);
        }
        .tm-marker__label {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background: #059669;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 5px;
          border-radius: 5px;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .tm-marker--active .tm-marker__label,
        .tm-marker:hover .tm-marker__label {
          opacity: 1;
        }
        @keyframes tm-ping {
          0%   { transform: scale(0.8); opacity: 0.8; }
          70%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        /* Light mode: natural OSM tile colors */
        .leaflet-tile {
          filter: none;
        }
        /* Dark mode: invert tiles to dark slate palette */
        .dark .leaflet-tile {
          filter: invert(1) hue-rotate(180deg) brightness(0.85) contrast(0.88) saturate(0.6);
        }
        /* Map background matches theme */
        .leaflet-container {
          background: #f8fafc !important;
          border-radius: 1.5rem;
        }
        .dark .leaflet-container {
          background: #0f172a !important;
        }
        .leaflet-control-zoom {
          border: none !important;
          border-radius: 12px !important;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important;
        }
        .leaflet-control-zoom a {
          background: #1e293b !important;
          color: #94a3b8 !important;
          border: none !important;
          width: 32px !important;
          height: 32px !important;
          line-height: 32px !important;
          font-size: 16px !important;
          transition: background 0.15s, color 0.15s !important;
        }
        .leaflet-control-zoom a:hover {
          background: #10b981 !important;
          color: #fff !important;
        }
        .leaflet-bottom.leaflet-left .leaflet-control-attribution {
          background: rgba(15,23,42,0.7) !important;
          color: #475569 !important;
          font-size: 9px !important;
          padding: 2px 6px !important;
          border-radius: 6px !important;
          backdrop-filter: blur(6px);
        }
        .leaflet-bottom.leaflet-left .leaflet-control-attribution a {
          color: #10b981 !important;
        }
      `}</style>
      <div ref={mapRef} className="w-full h-full rounded-3xl" />
    </>
  );
}
