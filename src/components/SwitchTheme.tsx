import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { classnames, height, transitionProperty, width } from 'tailwindcss-classnames'
import { Button } from '@/components/ui/button'

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export default function SwitchTheme() {
  const styleIcon = classnames(
    width('w-5'),
    height('h-5'),
    transitionProperty('transition-all'),
  )
  const [theme, setThemeState] = React.useState<Theme>(Theme.Dark)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme) {
      setThemeState(storedTheme)
    }
    else {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setThemeState(isDarkMode ? Theme.Dark : Theme.Light)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === Theme.Dark)
  }, [theme])

  const toggleTheme = React.useCallback(() => {
    setThemeState((prevTheme) => {
      const newTheme = prevTheme === Theme.Light ? Theme.Dark : Theme.Light
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }, [])

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === Theme.Light
        ? (
            <Sun className={styleIcon} />
          )
        : (
            <Moon className={styleIcon} />
          )}
    </Button>
  )
}
