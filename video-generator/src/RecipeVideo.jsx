import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const RecipeVideo = ({ recipe }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del título (Aparece y sube)
  const titleProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12 },
  });

  const titleTranslateY = interpolate(titleProgress, [0, 1], [100, 0]);
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1]);

  // Animación de la imagen de fondo (Zoom in lento)
  const scale = interpolate(frame, [0, 300], [1, 1.2]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#0F172A', overflow: 'hidden' }}>
      
      {/* Background Image */}
      <AbsoluteFill style={{ transform: `scale(${scale})` }}>
        <Img 
          src={recipe.imageUrl} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
        />
      </AbsoluteFill>

      {/* Gradient Overlay for readability */}
      <AbsoluteFill style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)'
      }} />

      {/* Content */}
      <AbsoluteFill style={{ padding: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        
        <div style={{
          transform: `translateY(${titleTranslateY}px)`,
          opacity: titleOpacity,
        }}>
          <h2 style={{ color: '#FF6B6B', fontSize: '60px', textTransform: 'uppercase', letterSpacing: '5px', marginBottom: '20px', fontWeight: '800', fontFamily: 'sans-serif' }}>
            {recipe.country}
          </h2>
          
          <h1 style={{ color: 'white', fontSize: '100px', fontWeight: 'bold', margin: '0 0 40px 0', lineHeight: 1.1, fontFamily: 'sans-serif', textShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
            {recipe.title}
          </h1>

          <p style={{ color: '#E2E8F0', fontSize: '50px', lineHeight: 1.4, maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            {recipe.description}
          </p>
        </div>

      </AbsoluteFill>

      {/* Call to Action at the bottom */}
      <AbsoluteFill style={{ justifyContent: 'flex-end', paddingBottom: '100px', alignItems: 'center' }}>
        <div style={{
          backgroundColor: '#FF6B6B',
          padding: '30px 60px',
          borderRadius: '50px',
          opacity: interpolate(frame, [200, 230], [0, 1]), // Aparece al final
          transform: `scale(${interpolate(spring({frame: frame - 200, fps}), [0, 1], [0.8, 1])})`
        }}>
          <span style={{ color: 'white', fontSize: '45px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
            📥 Descarga la receta en PDF (Link en Bio)
          </span>
        </div>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};
