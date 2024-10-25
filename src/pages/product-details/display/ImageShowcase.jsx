import { useState } from 'react';
import List from '../../../components/list/List';

export default function ImageShowcase({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const shownImages = [...images];

  while (shownImages.length < 3) {
    shownImages.push(shownImages[0]);
  }

  function handleSelectImage(img) {
    setSelectedImage(img);
  }

  return (
    <figure className="flex gap-32">
      <figure className="">
        <List
          list={shownImages}
          keyFn={(_, index) => index}
          classes="flex-col gap-16 h-full"
          itemClasses="grow"
        >
          {(img) => (
            <button
              onClick={() => handleSelectImage(img)}
              className="block h-full w-[10vw]"
            >
              <img
                src={img}
                alt={name}
                className="h-full w-full rounded-xl object-cover"
              />
            </button>
          )}
        </List>
      </figure>
      <div className="h-full min-h-[40vh] w-[28vw] shadow-large">
        <img
          src={selectedImage}
          alt={name}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </figure>
  );
}
