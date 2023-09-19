---
marp: true
---

## Objectifs

Créer un formulaire HTML classique qui permet de saisir une adresse mail, un mot de passe, une date de naissance, de savoir si on souhaite ou non s'abonner à la newsletter et de noter sur une échelle de 1 à 10 notre connaissance d'Angular.

## Manipulation

1. Dans la vue app.component.html, créer un formulaire et ajouter la liste des champs :

```html{style="font-size: 14pt"}
<form>
  <label for="email">Adresse mail :</label>
  <input type="email" id="email" name="email" required>
  <br>
  <label for="password">Mot de passe :</label>
  <input type="password" id="password" name="password" required>
  <br>
  <label for="birthdate">Date de naissance :</label>
  <input type="date" id="birthdate" name="birthdate" required>
  <br>
  <label>
    <input type="checkbox" name="newsletter">
    Je souhaite m'abonner à la newsletter
  </label>
  <br>
  <label for="knowledge">Connaissez-vous Angular ? (1 à 10)</label>
  <input type="range" id="knowledge" name="knowledge" min="1" max="10">
  <br>
  <button type="submit">Soumettre</button>
</form>
```