type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label = "Image coming soon",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-surface-soft text-sm text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}