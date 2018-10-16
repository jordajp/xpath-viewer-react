# Logbook de mes explorations React.js


## Semantic-ui

J'ai rencontré des problèmes d'installation pour pouvoir utiliser semantic-ui avec react. C'est à vrai dire cohérent avec la [doc Semantic UI](https://semantic-ui.com/introduction/integrations.html) : "_Semantic UI React bindings are still in development, but are available for most components._"

Les soucis surviennent à l'installation du paquet semamtic-ui, qui est nécessaire si on souhaite construire un thème qui ne soit pas celui par défaut.

### Premier problème : yarn

La commande `yarn install semantic-ui` (voir la [doc](https://react.semantic-ui.com/usage)) foire lamentablement. C'est visiblement un problème connu, et avec npm, on arrive à installer le paquet en suivant [cette procédure](http://nephewapps.com/2018/02/25/theming-semantic-ui-with-create-react-app/).

### Second problème : pas de répertoire `build/` créé

Une fois semantic-ui installé, en suivant [la procédure](http://nephewapps.com/2018/02/25/theming-semantic-ui-with-create-react-app/), on tente de construire notre thème en lançant la commande `gulp build`. Problème : pas de message d'erreur, mais pas de répertoire `build/`, dans lequel est sencée être généré notre css.

C'est un [problème répertorié](https://github.com/Semantic-Org/Semantic-UI/issues/4757), mais pas réglé. Une manip à la main est nécessaire : il faut déplacer le fichier `semantic.json` dans le répertoire `semantic/`.

### Troisième problème : pas de fichier css créé

Là il faut modifier une task gulp : voir [ici](https://github.com/Semantic-Org/Semantic-UI/issues/6067#issuecomment-354995802).


### Conclusions

Il faut suivre la procédure [Theming Semantic UI with create-react-app](http://nephewapps.com/2018/02/25/theming-semantic-ui-with-create-react-app/) __en prenant en compte les commentaires du blog__.

### Liens

* [doc Semantic UI pour REACT](https://react.semantic-ui.com/)
* [Theming Semantic UI with create-react-app](http://nephewapps.com/2018/02/25/theming-semantic-ui-with-create-react-app/)
* [Running 'gulp build', but no output directory is created. ](https://github.com/Semantic-Org/Semantic-UI/issues/4757)
* [gulp build is not building semantic.min.css](https://github.com/Semantic-Org/Semantic-UI/issues/6067#issuecomment-354995802)

## `npm` ERR! Cannot read property 'match' of undefined

`rm package-lock.json` règle le problème.

## yarn vs npm

Certaines docs ou tutos utilise yarn pour leurs exemples. En pratique, quand yarn n'est pas capable d'installer un module (cf. ci-dessus), on se retrouve à utiliser npm, et là ça part en vrille... On se retrouve généralement avec des erreurs bizarres de fichiers non trouvés, et ça devient indemmerdable.

La solution à mon sens est de ne pas utiliser yarn.
