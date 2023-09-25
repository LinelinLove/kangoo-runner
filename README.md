# Kangou-jump
Project runner en JS

<h2>[<a href="linelinlove.github.io/kangoo-runner/">Démo</a>]</h2>

Contributeurs : 
<ul>
  <li><a href="https://github.com/OrBital1650">Lorys L.</a></li>
  <li><a href="https://github.com/LinelinLove">Chrisline L.</a></li>
  <li><a href="https://github.com/Myakii">Rosine Y.</a></li>
  <li><a href="https://github.com/ValentinMachefaux">Valentin M.</a></li>
  <li><a href="https://github.com/siraKLG">Sira K.</a></li>
  <li><a href="https://github.com/ImThari">Tharishanan M.</a></li>
</ul>

## Sommaire

- [Contexte](#contexte)
- [Fonctionnalités demandées](#fonctionnalités-demandées)
- [Le format de fichier](#le-format-de-fichier)
- [L'affichage](#laffichage)
- [Difficulté, vitesse d'avancement et score](#difficultés-vitesse-davancemement-et-score)
- [Contrôles](#contrôles)
- [Editer un niveau](#editer-un-niveau)
- [Bonus](#bonus)

# Contexte

Vous avez été missionné pour réaliser un prototype de jeu de type "Runner" avec les technologies du web : HTML, CSS et JavaScript.
Les jeux de type "Runner" mettent en scène un personnage avançant de plus en plus vite dans un niveau possédant des plate-formes, personnage que le joueur ne peut pas stopper : il ne reste plus qu'à éviter les obstacles.

# Fonctionnalités demandées

Votre jeu de runner devra disposer des fonctionnalités suivantes :
Pour la partie "Runner" :
◦ Charger un niveau à partir d'un fichier
◦ Afficher un personnage
◦ Faire avancer ce personnage à une certaine vitesse dans un niveau en deux dimensions
◦ Faire sauter ou s'accroupir ce personnage
◦ Décompter des points au fur et à mesure de l'avancement du personnage dans le niveau
◦ Afficher le score final en cas de victoire ou d'échec
◦ Changer la vitesse d'avancement du personnage dans le niveau
Pour la partie "Edition" :
◦ Créer un nouveau niveau
◦ Modifier un niveau existant
◦ Supprimer un niveau
◦ Placer des blocs au sein du niveau
◦ Sauvegarder le niveau dans un fichier

# Le format de fichier

Un niveau est stocké dans un fichier au format JSON. Ce format contient une liste de blocs de différents types, les uns à la suite des autres.
On retrouvera différents "blocs" :
◦ Une ligne droite (pas d'obstacle)
◦ Un obstacle au sol
◦ Un obstacle en hauteur

Chaque bloc mis bout à bout constitue le niveau. Une fois le fichier lu, l'interface du niveau apparaît, avec les lignes droites et les obstacles. C'est avec les informations de ce fichier que vous pourrez faire avancer le personnage dans le niveau, gérer les collisions pendant une partie et ainsi déterminer les conditions de fin de partie (victoire, défaire, score).
Pour mieux identifier les niveaux du jeu, il est recommandé d'enregistrer les niveaux dans un fichier ".jmpr". Exemple de nom de fichier de niveau : "Hello-World.jmpr".

Les champs sont les suivants :

title : Le titre du niveau (affiché dans l'interface)
creator : Le nom de la personne ayant créé le niveau (affiché dans l'interface)
difficulty : La difficulté ressentie par les joueurs, nombre de 1 à 5 (idem)
blocs : La liste des blocs, contenant pour chacun le "type" du bloc.
Type des blocs :
A : Ligne droite
B : Obstacle au sol
C : Obstacle en hauteur

# L'affichage

Dans un jeu de type "Runner", le personnage ne se déplace pas vraiment : c'est tout le niveau qui se déplace sous le personnage. Une fois le fichier de niveau chargé, placez le personnage dans un bord de l'écran, placez les blocs les uns à la suite dans l'interface, et faites dérouler l'ensemble des blocs sous le personnage à une vitesse vous semblant cohérente. Cette vitesse dépendra directement de la taille que représente chaque bloc à l'écran.
Concernant la représentation visuelle des blocs, vous pouvez les générer en HTML/JavaScript. Vous pouvez utiliser des images libres de droit sur internet, créer vos propres images ou même utiliser des blocs de couleurs unies. L'esthétique générale du jeu découlera de vos choix, mais le point le plus important reste que le jeu fonctionne.

# Difficulté, vitesse d'avancement et score

Le jeu propose différement niveaux de difficultés :
◦ Découverte
◦ Normal
◦ Perfectionnement
◦ Expertise
◦ Maîtrise
Ces niveaux de difficulté correspondent aux classiques "Facile" "Moyen" "Difficile" et ainsi de suite. Changer le niveau de difficulté du jeu, c'est changer la vitesse de défilement dans les niveaux. Associez à chaque niveau de difficulté un multiplicateur de la vitesse de défilement, qui se retrouvera pendant le jeu.
De plus, tous les "N" blocs, la vitesse augmentera graduellement dans le niveau. Ce nombre "N" est directement dépendant de la taille de vos blocs sur l'écran, choisissez cette valeur avec attention.
Le score est calculé par rapport aux nombres de blocs passés, au multiplicateur de vitesse actuelle et à des points accordés à chaque bloc. Pour ce projet, le nombre de points par bloc est imposé à 10 (dix).

# Contrôles

La partie "Runner" contiendra peu de possibilités concernant les contrôles :
◦ Eviter un obstacle en bas (sauter)
◦ Eviter un obstacle en haut (s'accroupir)
◦ Mettre en pause
◦ Pendant la pause, voici les choix disponibles :
◦ Reprendre (bouton ayant le focus par défaut)
◦ Recommencer
◦ Quitter le niveau
Pendant la fin de partie, voici les choix disponibles :
◦ Recommencer
◦ Quitter le niveau (bouton ayant le focus par défaut)

En plus de l'interface associée à ces différentes actions (popup, flou ou autres effets visuels), il faudra associer à chaque action un événement (touche ou souris). Cette association est laissée à votre réflexion. Vous pouvez également associer d'autres touches du clavier à différentes actions, comme déplacer le focus sur le bouton suivant ou précédent.
Qu'importe la solution que vous aurez choisi, il faudra permettre dans un menu "Paramètres" le changement des touches associées à chacune des actions : votre jeu doit permettre aux utilisateurs ayant des difficultés avec vos contrôles de les associer à quelque chose de plus simple.

# Editer un niveau

Un autre mode de jeu consiste à pouvoir éditer un niveau. Cet éditeur doit permettre d'ajouter les différents blocs (ligne droit, obstacle bas, obstacle haut) à la suite les uns des autres. Il serait souhaitable d'ajouter différentes fonctionnalités :
◦ Prévisualiser le niveau en cours de construction
◦ Supprimer un bloc (et ainsi décaler tous les suivants)
◦ Afficher le nombre de blocs total du niveau
◦ Afficher le score maximum du niveau dans chacune des difficultés
◦ Importer un niveau déjà existant
Une fois le niveau réalisé, il faudra permettre à l'utilisateur d'exporter son niveau dans un fichier ".jmpr" contenant le JSON du niveau.
L'éditeur permettra également de fournir les autres informations du niveau : nom, difficulté et auteur du niveau.

# Bonus

Voici quelques idées supplémentaires à implémenter dans le projet. Si certaines sont réalisées avec succès, un bonus pourra être appliqué sur votre note :

- Ajouter des blocs contenant des bonus :
  - Créez des bonus influençant les mécaniques de jeu. Voici ceux à ajouter :
  - Bonus "Terraformation" : remplace les N blocs suivants par des blocs "ligne droite" Bonus "Vitesse" : augmente la vitesse et donc le score, tout en rendant le jeu plus difficile
  - Bonus "Multiplicateur" : pour les N blocs suivants, le score de ces blocs est doublé Bonus "Bouclier" : en cas de collision avec un bloc, "perd" le bouclier mais la partie continue
  - Bonus "Score" : augmente le score de N points de manière fixe Ces bonus sont positionnés sur le niveau de manière déterminée, à l'avance (aucun aléatoire). Ils s'obtiennent sur le même principe de collision que les obstacles. Si un bonus est en bas, ne rien faire permet d'obtenir le bonus. Si un bonus est en haut, il faudra sauter au bon moment pour obtenir le bonus.
  Ajoutez ces blocs ("ligne droite+bonus X", "obstacle bas+bonus Y", ...) dans l'éditeur pour pouvoir les positionner sur le niveau. Dans le fichier ".jmpr", le type de ces blocs sont les suivants :

    A : Terraformation
    B : Vitesse
    C : Multiplicateur
    D : Bouclier
    E : Score
  
Il faudra également ajouter la position du bonus (haut ou bas), représenté dans le type par "1" (bas) ou "2" (haut). Ainsi, un bloc "ligne droite" avec un bonus "Vitesse" en bas aura pour type "AB1" (A pour ligne droite, B pour vitesse, un pour "en bas").
- Ajoutez une ambiance aux niveaux
La musique référencée devra être jouée en boucle pendant le niveau.
Une fois ceci réalisé, ajoutez des effets sonores à la fin de la partie, avec deux mélodies : une pour la victoire et une pour la défaite.
- Ajoutez une musique
