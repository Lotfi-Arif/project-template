import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'universal-cookie';
import { useCookies } from 'react-cookie'
import router from 'next/router'

const navigation = [
  { name: 'Overview', href: '/', current: true },
  { name: 'Events', href: '/events', current: false },
  { name: 'FAQ', href: '/pages/FAQ', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const deleteUserFromCookie = () => {
    if (cookies.get('user')) {
      cookies.remove('user');
    }
  }

  const handleLogout = (e, href) => {
    e.preventDefault()
    deleteUserFromCookie()
    localStorage.clear()
    router.push(href)
  }

  const [cookie] = useCookies(["user"]);
  const cookies = new Cookies();

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href={'/'}>
                    <Image
                      className="block lg:hidden h-8 w-auto cursor-pointer"
                      src="/logo1.svg"
                      alt="ECS"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-slate-600 text-slate-50' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {
                !cookie.user ?
                  <div className='block'>
                    <button className='text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500'>
                      <Link href={'/login'}>
                        Login
                      </Link>
                    </button>
                    <button className='text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500'>
                      <Link href={'/register'}>
                        Register
                      </Link>
                    </button>
                  </div>
                  :
                  <div>
                  </div>
              }
              {
                cookie.user ?
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Notification dropdown */}
                    <Menu as="div" className="ml-3 !z-50 relative">
                      <div>
                        <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                          <button
                            type="button"
                            className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                          >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                There are no notifications yet.
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-slate-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-white ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={(e) => {handleLogout(e, '/')}}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div> :
                  <div> </div>}
            </div>
          </div>

          <Disclosure.Panel className="shadow-md sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button className='text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500'>
                <Link href={'/login'}>
                  Login
                </Link>
              </button>
              <button className='text-white p-2 m-2 items-center disabled:opacity-70 active:translate-y-0.5 active:border-b-transparent transition duration-200 text-center ease-in-out rounded-xl disabled:cursor-not-allowed font-medium focus:outline-none border-b-4 bg-sky-500'>
                <Link href={'/register'}>
                  Register
                </Link>
              </button>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-slate-600 text-white' : 'text-slate-600 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar