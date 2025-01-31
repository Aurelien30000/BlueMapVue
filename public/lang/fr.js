export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Cartes",
        button: "Cartes",
        tooltip: "Liste des cartes"
    },
    markers: {
        title: "Balises",
        button: "Balises",
        tooltip: "Liste des balises",
        marker: "balises | balises",
        markerSet: "Collection de balises | Collections de balises"
    },
    settings: {
        title: "Paramètres",
        button: "Paramètres"
    },
    goFullscreen: {
        button: "Plein Écran"
    },
    resetCamera: {
        button: "Réinitialiser la Caméra",
        tooltip: "Réinitialiser la Caméra et la Position"
    },
    updateMap: {
        button: "Mettre à jour la Carte",
        tooltip: "Nettoyer le Cache des Tuiles"
    },
    lighting: {
        title: "Lumière",
        dayNightSwitch: {
            tooltip: "Jour/Nuit"
        },
        sunlight: "Soleil",
        ambientLight: "Lumière Ambiante"
    },
    resolution: {
        title: "Résolution",
        high: "Haute (SSAA, x2)",
        normal: "Normale (Native, x1)",
        low: "Basse (Upscaling, x0.5)"
    },
    freeFlightControls: {
        title: "Contrôles du Vol Libre",
        mouseSensitivity: "Sensibilité de la Souris",
        invertMouseY: "Inverser l'Y de la Souris"
    },
    renderDistance: {
        title: "Distance de rendu",
        hiresLayer: "Couche haute définition",
        lowersLayer: "Couche basse définition"
    },
    theme: {
        title: "Thème",
        default: "Par Défaut (Système/Navigateur)",
        dark: "Sombre",
        light: "Clair"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Réinitialiser tous les Paramètres"
    },
    players: {
        title: "Joueurs",
        tooltip: "Liste des Joueurs"
    },
    compass: {
        tooltip: "Boussole / Pointe le Nord"
    },
    controls: {
        perspective: {
            button: "Perspective",
            tooltip: "Vue en Perspective"
        },
        flatView: {
            button: "Plate",
            tooltip: "Orthographique / Vue Plate",
        // },
        freeFlight: {
            button: "Vol Libre",
            tooltip: "Vol Libre / Mode Spectateur"
        }
    },
    language: {
        title: "Langue",
    },
    blockTooltip: {
        block: "Bloc",
        position: "Position",
        chunk: "Chunk",
        region: {
            region: "Région",
            file: "Fichier"
        },
        light: {
            light: "Lumière",
            sun: "Soleil",
            block: "Bloc",
        }
    },
    info: {
        title: "Info",
        button: "Info",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Contrôles de la Souris :</h2>
	<table>
		<tr><th>déplacement</th><td><kbd>clic-gauche</kbd> + mouvement</td></tr>
		<tr><th>zoom</th><td><kbd>molette</kbd> (scroll)</td></tr>
		<tr><th>rotation / inclinaison</th><td><kbd>clic-droit</kbd> + mouvement</td></tr>
	</table>
</p>
<p>
	<h2>Contrôles du Clavier :</h2>
	<table>
		<tr><th>déplacement</th><td><kbd>zqsd</kbd> / <kbd>flèches</kbd></td></tr>
		<tr><th>zoom</th><td>Pavé Numérique : <kbd>+</kbd>/<kbd>-</kbd> ou <kbd>Inser</kbd>/<kbd>Début</kbd></td></tr>
		<tr><th>rotation / inclinaison</th><td><kbd>Alt-Gauche</kbd> + <kbd>zqsd</kbd> / <kbd>flèches</kbd> ou <kbd>Suppr</kbd>/<kbd>Fin</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Contrôles du Toucher :</h2>
	<table>
		<tr><th>déplacement</th><td>toucher + mouvement</td></tr>
		<tr><th>zoom</th><td>toucher avec 2 doigts + pincement</td></tr>
		<tr><th>rotation / inclinaison</th><td>toucher avec 2 doigts + rotation / haut/bas</td></tr>
	</table>
</p>
<br><hr>
<p>
	Cette carte a été générée avec &#9829; par <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
}