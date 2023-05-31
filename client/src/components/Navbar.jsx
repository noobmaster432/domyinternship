import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Internships", href: "#" },
  { name: "Online Training", href: "#about" },
  { name: "Resume Builder", href: "#events" },
  { name: "Virtual Internships", href: "#team" },
];

function Login(){
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="flex gap-2">
        <button className="inline-flex w-full justify-center rounded-md bg-white hover:bg-[#2c3895] hover:text-white px-4 py-2 text-[15px] font-semibold text-[#2c3895] shadow-sm ring-1 ring-inset ring-indigo-800">
          Login
        </button>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-[#2c3895] px-4 py-2 text-[15px] font-semibold text-white shadow-sm ring-1 ring-inset ring-indigo-800">
          Register
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
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
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 pr-12 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Employer
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 pr-12 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  Student
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto px-6 sm:px-12 lg:px-8 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="md:w-full md:h-12 h-10 w-full cursor-pointer"
                        src="https://www.internshipgate.com/static/media/logo.9ba6b2ae8699a0d6d3f1a62e26549f0e.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-baseline space-x-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`rounded-md px-3 py-2 text-base text-[#7a7589] font-[450] hover:font-semibold hover:text-violet-900`}
                        >
                          {item.name}
                        </a>
                      ))}
                      <Login/>
                    </div>
                  </div>

                  <div className="-mr-2 flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black hover:bg-slate-100 focus:outline-none ring-1 ring-white ring-offset-1 ring-offset-indigo-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-6">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={` block rounded-md px-3 py-2 text-base font-medium`}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <div className="flex justify-end px-4">
                    <Login />
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
