# Leasetudo
centralized platform to simplify subleasing for UMD students

## Tech Stack
* **Frontend:** Next.js, TailwindCSS
* **Backend:** Node.js, Espress, TypeScript
* **Database:** MongoDB
* **Cloud:** AWS

## Project Structure 

This is monorepo managed using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

```text
leasetudo/
|-- apps/
|   |-- frontend/ # Next.js application
|   +-- backend/ # Express.js API
|-- packages/
|   +-- types/ # Shared TypeScript types
+-- docs/ # Project documentation
```

### Prerequisites
* Node.js (v18 or later)
* npm
* MongoDB
