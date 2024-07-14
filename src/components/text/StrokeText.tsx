interface StrokeTextProps {
  children: React.ReactNode
  className?: string
}

export default function StrokeText({ children, className }: StrokeTextProps): React.ReactElement {
  return (
    <span className={`relative ${className}`}>
      <span className="absolute top-0 left-0 dark:stroke-text-dark stroke-text-dark">{children}</span>
    </span>
  )
}
