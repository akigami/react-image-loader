ReactImg
========
React component for making your site images appear in a fade in.

# Install
```
yarn add @akigami/react-image-loader
```
_Note_: styled-components and react were added as peer dependencies.
If you don't have then you must install them as well.
```
yarn add @akigami/react-image-loader emotion react-emotion react
```
# Usage

```js
import Img from '@akigami/react-image-loader';

// Define which placeholder to show while the image is loading
// Can be any image file.
// There's already a default one in base64, but you'd like to change ;)
Img.globalPlaceholder = '/images/placeholder.png';

export default function ImageList({ list }) {
  return (
    <div className="image-grid">
      {list.map(item => (
        <ImageItemWrapper>
          <Img alt={item.title} src={item.url} />
          <p>My awesome image</p>
        </ImageItemWrapper>
      )}
    </div>
  );
}
```

Remember that Img is totally responsive, which means that it will fit accordingly
to the space given to it by its container.


## Options

```js
interface IProps {
  src: string,
  placeholder?: string,
  imgClasses?: string | string[],
  holderClasses?: string | string[],
  placeholderProps?: object,
  imageProps?: object,
  alt: string,
  fit?: 'inherit' | 'contain' | 'cover' | 'fill' | 'initial' | 'none' | 'unset',
  onClick?(name?: any): void,
};
```
