export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menü",
        tooltip: "Menü"
    },
    maps: {
        title: "Karten",
        button: "Karten",
        tooltip: "Kartenliste"
    },
    markers: {
        title: "Marker",
        button: "Marker",
        tooltip: "Markerliste",
        marker: "Marker | Marker",
        markerSet: "Markerset | Markersets"
    },
    settings: {
        title: "Einstellungen",
        button: "Einstellungen"
    },
    goFullscreen: {
        button: "Vollbildmodus"
    },
    resetCamera: {
        button: "Kamera zurücksetzen",
        tooltip: "Kamera & Position zurücksetzen"
    },
    updateMap: {
        button: "Karte aktualisieren",
        tooltip: "Leere den Karten-Cache"
    },
    lighting: {
        title: "Beleuchtung",
        dayNightSwitch: {
            tooltip: "Tag/Nacht"
        },
        sunlight: "Sonnenlicht",
        ambientLight: "Umgebungslicht"
    },
    resolution: {
        title: "Auflösung",
        high: "Hoch (SSAA, x2)",
        normal: "Normal (Nativ, x1)",
        low: "Niedrig (Hochskalieren, x0.5)"
    },
    freeFlightControls: {
        title: "Freie Kamera",
        mouseSensitivity: "Maus-Sensitivität",
        invertMouseY: "Maus Y umkehren"
    },
    renderDistance: {
        title: "Renderdistanz",
        hiresLayer: "Hires-Schicht",
        lowersLayer: "Lowres-Schicht"
    },
    theme: {
        title: "Farbmodus",
        default: "Standard (System/Browser)",
        dark: "Dunkel",
        light: "Hell"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Einstellungen zurücksetzen"
    },
    players: {
        title: "Spieler",
        tooltip: "Spielerliste"
    },
    compass: {
        tooltip: "Kompass / nach Norden ausrichten"
    },
    controls: {
        perspective: {
            button: "Perspectiv-Sicht",
            tooltip: "Perspectivische Sicht"
        },
        flatView: {
            button: "Flache Sicht",
            tooltip: "Orthographisch / Flache Sicht",
        },
        freeFlight: {
            button: "Freie Kamera",
            tooltip: "Freie Kamera / Beobachter Modus"
        }
    },
    language: {
        title: "Sprache",
    },
    blockTooltip: {
        block: "Block",
        position: "Position",
        chunk: "Chunk",
        region: {
            region: "Region",
            file: "Datei"
        },
        light: {
            light: "Licht",
            sun: "Sonne",
            block: "Block",
        }
    },
    info: {
        title: "Info",
        button: "Info",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Maussteuerung:</h2>
	<table>
		<tr><th>Bewegen</th><td><kbd>Linksklick</kbd> + ziehen</td></tr>
		<tr><th>Zoomen</th><td><kbd>Mausrad</kbd> (scrollen)</td></tr>
		<tr><th>Drehen / Schwenken</th><td><kbd>Rechtsklick</kbd> + ziehen</td></tr>
	</table>
</p>
<p>
	<h2>Tastatursteuerung:</h2>
	<table>
		<tr><th>Bewegen</th><td><kbd>wasd</kbd> / <kbd>Pfeiltasten</kbd></td></tr>
		<tr><th>Zoomen</th><td>Nummernblock: <kbd>+</kbd>/<kbd>-</kbd> oder <kbd>Einfg</kbd>/<kbd>Pos 1</kbd></td></tr>
		<tr><th>Drehen / Schwenken</th><td><kbd>Alt</kbd> + <kbd>wasd</kbd> / <kbd>Pfeiltasten</kbd> oder <kbd>Entf</kbd>/<kbd>Ende</kbd>/<kbd>Bild &uarr;</kbd>/<kbd>Bild &darr;</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Touchsteuerung:</h2>
	<table>
		<tr><th>Bewegen</th><td>berühren + ziehen</td></tr>
		<tr><th>Zoomen</th><td>mit zwei Fingern berühren + zusammen/auseinander ziehen</td></tr>
		<tr><th>Drehen / Schwenken</th><td>mit zwei Fingern berühren + drehen / hoch/runter ziehen</td></tr>
	</table>
</p>
<br><hr>
<p>
	Diese Map wurde mit &#9829; von <a href="https://bluecolo.red/bluemap">BlueMap</a> generiert.
</p>
		`
    }
}