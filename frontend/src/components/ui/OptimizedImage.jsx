function toWebpSrc(src) {
  if (!src || src.startsWith('data:') || src.startsWith('blob:') || src.endsWith('.webp')) return src;
  if (src.startsWith('http://') || src.startsWith('https://')) return '';
  return src.replace(/\.(png|jpe?g)(\?.*)?$/i, '.webp$2');
}

function OptimizedImage({
  src,
  alt,
  className,
  width = 1200,
  height = 800,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  sizes,
  webpSrc,
  avifSrc,
  pictureClassName,
  ...props
}) {
  const resolvedWebp = webpSrc || toWebpSrc(src);
  const resolvedAvif = avifSrc || '';
  const img = (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      sizes={sizes}
    />
  );

  return (
    <picture className={pictureClassName || 'optimized-picture'}>
      {resolvedAvif && resolvedAvif !== src && <source srcSet={resolvedAvif} type="image/avif" sizes={sizes} />}
      {resolvedWebp && <source srcSet={resolvedWebp} type="image/webp" sizes={sizes} />}
      {img}
    </picture>
  );
}

export default OptimizedImage;
