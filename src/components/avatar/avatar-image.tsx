import Image, { type ImageProps } from "next/image";
import { cn } from "../lib/utils";

type AvatarSize = "xs" | "sm";

interface AvatarImageProps extends Omit<ImageProps, "width" | "height"> {
  size?: AvatarSize;
}

const avatarSize = {
  xs: "h-5 w-5",
  sm: "h-9 w-9",
};

export function AvatarImage({ src, alt, size='xs', ...rest }: AvatarImageProps) {
  return (
    <div className={cn('relative overflow-hidden border border-blue-200 rounded-full', avatarSize[size])}>
      <Image
        src={src}
        alt={alt}
        {...rest}
        fill
      />
    </div>
  );
}
