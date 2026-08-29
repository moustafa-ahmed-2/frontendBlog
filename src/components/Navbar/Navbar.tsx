
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Menu as MenuIcon, Bell, X } from "lucide-react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
 
 const {user , logout} = useAuth();
 
 return (
  <Disclosure
    as="nav"
    className="fixed top-0 z-50 w-full border-b border-blue-100 bg-white/60 backdrop-blur-md"
  >
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-sky-700 hover:bg-sky-50 focus:outline-none">
                <span className="sr-only">Open main menu</span>

                {open ? (
                  <X className="size-6" />
                ) : (
                  <MenuIcon className="size-6" />
                )}
              </DisclosureButton>
            </div>

            {/* Logo + Desktop Navigation */}
            <div className="flex flex-1 items-center justify-center sm:justify-start">

              {/* Logo */}
              <Link to="/" className="flex shrink-0 items-center">
                <img
                  alt="Logo"
                  src="./Logo.jfif"
                  className="h-12 hidden md:flex w-auto object-contain sm:h-14 lg:h-16"
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center gap-1 lg:gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="rounded-lg px-2 py-2 text-sm font-medium text-sky-900 transition-colors duration-200 hover:bg-sky-50 hover:text-sky-700 lg:px-3"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center">

              {!user ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <Link
                    to="/login"
                    className="rounded-lg bg-gradient-to-r from-green-100 to-yellow-50 px-3 py-2 text-xs font-medium text-sky-900 shadow-sm transition hover:shadow-md sm:px-4 sm:text-sm"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="rounded-lg bg-gradient-to-r from-green-100 to-yellow-50 px-3 py-2 text-xs font-medium text-sky-900 shadow-sm transition hover:shadow-md sm:px-4 sm:text-sm"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <Menu as="div" className="relative ml-2">
                  <MenuButton className="relative flex rounded-full focus:outline-none">
                    <span className="sr-only">Open user menu</span>

                    <img
                      alt={user.name}
                      src={
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(user.name)
                      }
                      className="size-8 rounded-full border border-sky-200 bg-sky-100 shadow-sm sm:size-9"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white/90 py-2 shadow-lg ring-1 ring-sky-100 backdrop-blur-md"
                  >
                    <MenuItem>
                      <Link
                        to="/profile"
                        className="block rounded-md px-4 py-2 text-sm text-sky-700 transition hover:bg-sky-50 hover:text-sky-900"
                      >
                        Your Profile
                      </Link>
                    </MenuItem>

                    <MenuItem>
                      <button
                        onClick={logout}
                        className="block w-full rounded-md px-4 py-2 text-left text-sm text-rose-600 transition hover:bg-rose-50 hover:text-rose-800"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <DisclosurePanel className="border-t border-blue-100 bg-white/95 backdrop-blur-md sm:hidden">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={`block w-full rounded-lg px-3 py-2 text-left text-base font-medium transition ${
                  item.current
                    ? "bg-sky-100 text-sky-900"
                    : "text-sky-700 hover:bg-sky-50"
                }`}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </>
    )}
  </Disclosure>
);
}

