'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, Bitcoin, DollarSign, LineChart, Package, History, Settings, LogOut, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Cryptocurrency', icon: Bitcoin, href: '/dashboard/cryptocurrency' },
  { name: 'Stocks', icon: LineChart, href: '/dashboard/stock' },
  { name: 'Forex', icon: DollarSign, href: '/dashboard/forex' },
  { name: 'Packages', icon: Package, href: '/dashboard/packages' },
  { name: 'Trades', icon: LineChart, href: '/dashboard/trades' },
  { name: 'Transactions', icon: History, href: '/dashboard/transactions' },
  { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false)
      }
    }

    handleRouteChange() // Run on initial render to close sidebar if on mobile

    window.addEventListener('resize', handleRouteChange)
    return () => window.removeEventListener('resize', handleRouteChange)
  }, [pathname])

  const handleMenuItemClick = (href: string) => {
    router.push(href)
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      <aside
        className={`bg-background text-foreground w-64 min-h-screen p-4 fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="mb-8 mt-16 lg:mt-0">
          <h1 className="text-2xl font-bold">xDareyCoinHub</h1>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    pathname === item.href ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                  }`}
                  onClick={() => handleMenuItemClick(item.href)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-muted"
            onClick={() => handleMenuItemClick('/login')}
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>
    </>
  )
}

