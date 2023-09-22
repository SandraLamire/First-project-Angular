// mettre https://api.quotable.io/random dans navigateur 
// pour voir une citation au hasard
// cliquer sur données brutes et les copier
// aller les coller dans https://transform.tools/json-to-typescript
// pour récupérer l'interface automatiquement créée et la coller ici
// sans oublier de la renommer (car interface root par défaut)
export interface Quote {
    _id: string
    content: string
    author: string
    tags: string[]
    authorSlug: string
    length: number
    dateAdded: string
    dateModified: string
  }