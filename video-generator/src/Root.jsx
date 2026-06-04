import React from 'react';
import { Composition } from 'remotion';
import { RecipeVideo } from './RecipeVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="RecipeVideo"
        component={RecipeVideo}
        durationInFrames={300} // 10 seconds at 30fps
        fps={30}
        width={1080}
        height={1920} // 9:16 Vertical for TikTok/Reels
        defaultProps={{
          recipe: {
            title: 'Tacos al Pastor',
            country: 'México',
            description: 'Deliciosos tacos de carne de cerdo adobada.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Tacos_al_pastor_en_taquer%C3%ADa.jpg'
          }
        }}
      />
    </>
  );
};
