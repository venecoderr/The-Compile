import { Link,  useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../assets/css/app.css'

const tabs = [
  {
    name: 'About Me',
    href: '/',
    current: false
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
    current: false
  },
  {
    name: 'Contact',
    href: '/contact',
    current: false
  },
  {
    name: 'Resume',
    href: '/resume',
    current: false
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function highlighter(tabs, active) {
  tabs.map((i) => {
    if(i.href === active){
      i.current = true
    } else {
      i.current = false
    }
  })

  return tabs
}

export default function Nav({ logo, active }) {
  const navigation = highlighter(tabs, active)

  return (
    <Disclosure as="nav" className="main-bg">
      {({ open }) => (
        <>
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section className="flex h-16 items-center justify-between">
              <section className="flex items-center">
                <section className="flex-shrink-0">
                  <img
                    className="h-16 w-16"
                    src={logo}
                    alt="Logo"
                  />
                </section>
                <section className="hidden md:block">
                  <section className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'active-link' : 'link',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </section>
                </section>
              </section>
              <section className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </section>
            </section>
          </section>
          <Disclosure.Panel className="md:hidden">
            <section className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current ? 'active-link' : 'link',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </section>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
