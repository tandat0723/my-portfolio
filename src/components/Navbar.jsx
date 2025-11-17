import { Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false)

    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 px-4 lg:px-0'>
            <div className='max-w-7xl mx-auto flex h-14 items-center'>
                <div className='md:mr-4 flex justify-between w-full'>
                    <a href='/' className='mr-6 flex items-center space-x-2'>
                        <h1 className='text-2xl font-bold gradient-text'>
                            juntran.dev
                        </h1>
                    </a>
                    <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                        <a href='#about' className='transition-colors hover:text-foreground/80 text-foreground/60'>Về tui</a>
                        <a href='#project' className='transition-colors hover:text-foreground/80 text-foreground/60'>Dự án</a>
                        <a href='#testimonials' className='transition-colors hover:text-foreground/80 text-foreground/60'>Kinh nghiệm</a>
                        <a href='#contact' className='transition-colors hover:text-foreground/80 text-foreground/60'>Liên hệ</a>
                    </nav>
                </div>
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className='inline-flex items-center justify-center rounded-md md:hidden'
                >
                    <span className="sr-only">Mở menu</span>
                    {mobileMenu ? (
                        <X className="h-6 w-6" aria-hidden='true' />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden='true' />
                    )}
                </button>
            </div>
            {mobileMenu && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Về tui</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Dự án</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Kinh nghiệm</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">Liên hệ</a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar