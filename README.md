# Meet Abdulrahman

An illustrated, page-turning storybook portfolio: a 3D book (three.js) on a painted Amman rooftop at night, in English and Arabic.

- `index.html`: the page
- `book/src/`: source (`main.js` scene and book, `content.js` words and links, `scenes.js` fallbacks)
- `book/book.js`: the bundle the page loads
- `book/art/`, `book/ui/`: painted pages, cover, backdrop and badges

Build the bundle after editing `book/src`:

```
npm install
npm run build
```
