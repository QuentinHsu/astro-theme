interface StrokeTextProps {
  children: React.ReactNode
  className?: string
}

export default function StrokeText({ children, className }: StrokeTextProps): React.ReactElement {
  return (
    <span className={`${className}`}>
      <span className="dark:stroke-text-dark stroke-text-dark">{children}</span>
    </span>
  )
}
