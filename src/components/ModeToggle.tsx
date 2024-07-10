import * as React from 'react'
import { Moon, Sun, SunMoon } from 'lucide-react'
import { Button } from '@/components/ui/button'

enum Theme {
  Light = 'theme-light',
  Dark = 'dark',
  System = 'system',
}

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<Theme>(Theme.Light)
  React.useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setThemeState(isDarkMode ? Theme.Dark : Theme.Light)
  }, [])
  React.useEffect(() => {
    const isDark = theme === Theme.Dark || (theme === Theme.System && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', isDark)
  }, [theme])

  const toggleTheme = React.useCallback(() => {
    setThemeState((prevTheme) => {
      switch (prevTheme) {
        case Theme.Light:
          return Theme.Dark
        case Theme.Dark:
          return Theme.System
        case Theme.System:
          return Theme.Light
        default:
          return Theme.Dark
      }
    })
  }, [])

  const defaultIconClass = 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all'
  const sunIconClass = theme === Theme.Light ? defaultIconClass : 'hidden'
  const moonIconClass = theme === Theme.Dark ? defaultIconClass : 'hidden'
  const sunMoonIconClass = theme === Theme.System ? defaultIconClass : 'hidden'

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun className={sunIconClass} />
      <Moon className={moonIconClass} />
      <SunMoon className={sunMoonIconClass} />
    </Button>
  )
}
