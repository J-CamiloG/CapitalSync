"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BanknoteIcon, GrapeIcon as GrainIcon, LayoutDashboardIcon, MoreHorizontalIcon } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboardIcon,
        href: "/",
    },
    {
        title: "Préstamos",
        icon: BanknoteIcon,
        href: "/prestamos",
    },
    {
        title: "Inversiones Agrícolas",
        icon: GrainIcon,
        href: "/inversiones-agricolas",
    },
    {
        title: "Otros",
        icon: MoreHorizontalIcon,
        href: "/otros",
    },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <>
            {/* Sidebar para pantallas medianas y grandes */}
            <div className="hidden md:flex h-screen w-64 flex-col border-r border-gray-800 bg-zinc-900">
                <div className="p-4">
                <h2 className="mb-4 text-lg font-semibold text-gray-100">Mi Sistema</h2>
                <nav className="space-y-2">
                    {menuItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <Button
                        variant="ghost"
                        className={cn(
                            "w-full justify-start gap-2 text-gray-300 hover:text-gray-100 hover:bg-gray-800",
                            pathname === item.href && "bg-gray-800 text-gray-100"
                        )}
                        >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                        </Button>
                    </Link>
                    ))}
                </nav>
                </div>
            </div>

            {/* Barra de navegación inferior para móviles */}
            <div className="fixed bottom-0 left-0 right-0 border-t border-gray-800 bg-zinc-900 md:hidden">
                <nav className="flex justify-around p-2">
                {menuItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                    <Button
                        variant="ghost"
                        className={cn(
                        "flex flex-col items-center gap-1 px-2 text-gray-300 hover:text-gray-100",
                        pathname === item.href && "text-gray-100"
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        <span className="text-xs">{item.title}</span>
                    </Button>
                    </Link>
                ))}
                </nav>
            </div>
        </>
    )
}
