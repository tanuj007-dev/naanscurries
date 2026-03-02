"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Standard icon fix for Leaflet in React/Webpack/Next.js
const customIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, zoom, {
                duration: 1.5,
            });
        }
    }, [center, zoom, map]);
    return null;
}

export default function LeafletMap({ locationData, activeCoords, zoom, onLocationClick }) {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-map-theme .leaflet-tile-pane {
                    filter: none !important;
                    mix-blend-mode: normal !important;
                    opacity: 1 !important;
                }
                .leaflet-container {
                    background: #f0f0f0 !important;
                }
                /* Style zoom controls */
                .leaflet-bar a {
                    background-color: white !important;
                    color: black !important;
                    border: 1px solid #ccc !important;
                }
                .leaflet-bar a:hover {
                    background-color: #f4f4f4 !important;
                }
            `}} />
            <MapContainer
                center={[9.93, -84.10]}
                zoom={11}
                style={{
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                }}
                scrollWheelZoom={false}
                className="custom-map-theme"
            >
                <ChangeView center={activeCoords} zoom={zoom} />
                <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                {locationData.map((loc, idx) => (
                    <Marker
                        key={idx}
                        position={loc.coordinates}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => onLocationClick(loc.coordinates),
                        }}
                    >
                        <Popup>
                            <div className="text-center font-ramillas">
                                <p className="font-bold text-[10px] uppercase">{loc.name.split(',')[0]}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}
