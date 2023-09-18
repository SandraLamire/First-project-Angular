# Objectifs

Créer un composant automatiquement.

# Manipulations

## Étape 1
Ouvrir un terminal et accéder au répertoire de votre projet

---

## Étape 2
Executer la commande `ng generate component nom-du-composant`

---

## Étape 3
Observer la création des fichiers et dossiers correspondants au composant :
- `nom-du-composant.component.ts`
- `nom-du-composant.component.html`
- `nom-du-composant.component.css`
- `nom-du-composant.component.spec.ts`

---

## Étape 4 : Utilisation du composant

Utilisez le composant dans votre application en ajoutant le sélecteur dans un autre template (par exemple `app.component.html`).

```html{style="font-size: 14pt"}
<app-nom-du-composant></app-nom-du-composant>
```