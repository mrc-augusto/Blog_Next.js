import Image, { type ImageProps } from "next/image";

interface AvatarImageProps extends ImageProps {}

export function AvatarImage({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) {
  return (
    <Image
      className="rounded-full border border-blue-200"
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}
