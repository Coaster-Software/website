'use client'
import Image from "next/image";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [


  { name: 'Product', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
]

const footer = {


  main: [
    { name: 'Product', href: '/' },
    { name: 'Docs', href: '/docs' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
  social: [
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="Coaster logo"
              src="/logo.svg"
              width={156}
              height={24} 
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-[16px] px-3 py-1 font-semibold rounded-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all duration-200">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="https://app.coaster.so"
          className="-mx-3 block bg-neutral-900 rounded-sm px-4 py-1.5 text-sm/6 font-semibold text-white hover:bg-neutral-800 transition-all duration-200">
          Sign in
        </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50 transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="https://app.coaster.so"
                  className="-mx-3 block bg-neutral-900 rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-neutral-800 transition-all duration-200"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    <div className="relative isolate pt-14">
        <div className="py-24 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-5xl font-bold tracking-tight text-neutral-900 sm:text-7xl">
              Break Free from Incident Chaos
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-neutral-600 sm:text-xl/8">
              When incidents strike, Coaster steps in—smart runbooks and integrations guide you. Resolve fast, recap sharp, and tame the chaos.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-neutral-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 transition-all duration-200"
                >
                  Start free trial
                </a>
                <a href="#" className="text-base font-semibold text-neutral-900 hover:text-neutral-700 transition-all duration-200">
                  Book a demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt="App screenshot"
                  src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="rounded-md shadow-2xl ring-1 ring-neutral-900/10"
                />
              </div>
            </div>

            {/* Bento Grid Section */}
            <div className="py-48">
              <div className="mx-auto max-w-7xl mb-12">
                <h2 className="max-w-2xl text-3xl font-medium leading-12 tracking-tight text-neutral-600 sm:text-4xl">
                  <strong className="text-neutral-900">Chaos rules</strong> when you lean on sloppy tools or no plan at all.
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Runbooks on Autopilot - Large card */}
                <div className="md:col-span-8 rounded-xl bg-gray-50 border border-gray-200 p-8 relative overflow-hidden group">
                  <div className="relative">
                    <div className="mt-6 max-w-xl">
                      <h3 className="text-[18px] font-semibold leading-8 text-neutral-950 inline">Runbooks on autopilot.</h3>
                      <p className="ml-2 text-[18px] leading-7 text-neutral-500 inline">
                        Incidents trigger runbooks loaded with steps and integrations. Slack pings, GitHub issues fire off—just follow the flow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Keep Everyone Together - Medium card */}
                <div className="md:col-span-4 rounded-xl rounded-xl bg-gray-50 border border-gray-200 p-8 relative overflow-hidden group">
                  <div className="relative">
                    <div className="mt-6">
                      <h3 className="text-[18px] font-semibold leading-8 text-neutral-950 inline">Keep everyone together.</h3>
                      <p className="ml-2 text-[18px] leading-7 text-neutral-500 inline">
                        A coaster-style timeline syncs you and your team.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Recap That Sticks - Medium card */}
                <div className="md:col-span-4 rounded-xl bg-gray-50 border border-gray-200 p-8 relative overflow-hidden group">
                  <div className="relative">
                    <div className="mt-6">
                      <h3 className="text-[18px] font-semibold leading-8 text-neutral-950 inline">Recap that sticks.</h3>
                      <p className="ml-2 text-[18px] leading-7 text-neutral-500 inline">
                        Post-incident, log the takeaway in seconds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Be Prepared - Medium card */}
                <div className="md:col-span-4 rounded-xl bg-gray-50 border border-gray-200 p-8 relative overflow-hidden group">
                  <div className="relative">
                    <div className="mt-6">
                      <h3 className="text-[18px] font-semibold leading-8 text-neutral-950 inline">Be prepared.</h3>
                      <p className="ml-2 text-[18px] leading-7 text-neutral-500 inline">
                        Run simulations to drill your team.
                      </p>
                    </div>
                  </div>
  
                </div>

                {/* Integrations United - Large card */}
                <div className="md:col-span-4 rounded-xl bg-gray-50 border border-gray-200 p-8 relative overflow-hidden group">
                  <div className="relative">
                    <div className="mt-6">
                      <h3 className="text-[18px] font-semibold leading-8 text-neutral-950 inline">Integrations United</h3>
                      <p className="ml-2 text-[18px] leading-7 text-neutral-500 inline">
                        Sync Coaster with Slack, GitHub, Sorry™ and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified How It Works Section - Inspired by Pointer.so */}
            <div className="py-24 sm:py-32 bg-neutral-50 rounded-2xl">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                  <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                    Incidents become runbooks
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 mb-6">
                      <span className="text-xl font-medium text-neutral-800">1</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Incident Triggers Runbook</h3>
                    <p className="text-neutral-600">When an incident occurs, Coaster activates the appropriate runbook.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 mb-6">
                      <span className="text-xl font-medium text-neutral-800">2</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Guided Resolution</h3>
                    <p className="text-neutral-600">Follow step-by-step instructions while integrations automatically fire off actions.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 mb-6">
                      <span className="text-xl font-medium text-neutral-800">3</span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Structured Recap</h3>
                    <p className="text-neutral-600">Document what happened and feed insights back into your runbooks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified Coaster Difference - Inspired by Getfernand.com */}
            <div className="py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                  <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
                    From chaos to control
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Reduced MTTR</h3>
                    <p className="text-neutral-600">With guided runbooks and automated actions, teams resolve incidents faster.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Team Alignment</h3>
                    <p className="text-neutral-600">Everyone stays on the same page with Coaster's shared timeline.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Learning Loop</h3>
                    <p className="text-neutral-600">Every incident makes your team stronger through structured recaps.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Integrations That Work</h3>
                    <p className="text-neutral-600">Automatically create GitHub issues, update status pages, and keep Slack channels informed.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Simulation Ready</h3>
                    <p className="text-neutral-600">Practice makes perfect. Run incident simulations using your actual runbooks.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Structured Process</h3>
                    <p className="text-neutral-600">Instead of chaotic fire drills, Coaster provides repeatable processes that guide your team.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Section */}
            <div id="pricing" className="py-24 sm:py-32 bg-neutral-50 rounded-2xl">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">Simple, transparent pricing</h2>
                  <p className="mt-6 text-lg leading-8 text-neutral-600">
                    Choose the plan that's right for your team. All plans include a 14-day free trial.
                  </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                  {/* Standard Plan */}
                  <div className="rounded-3xl p-8 ring-1 ring-neutral-900/10 sm:p-10 bg-white">
                    <h3 className="text-lg font-semibold leading-8 text-neutral-900">Standard</h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">Perfect for small teams getting started with incident management.</p>
                    <div className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-neutral-900">$29</span>
                      <span className="text-sm font-semibold leading-6 text-neutral-600">/month per user</span>
                    </div>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-600">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Unlimited runbooks
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Slack & GitHub integrations
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Incident history (30 days)
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Basic analytics
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                    >
                      Start free trial
                    </a>
                  </div>

                  {/* Pro Plan */}
                  <div className="rounded-3xl p-8 ring-1 ring-neutral-900 sm:p-10 relative bg-neutral-900">
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                      <span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-0.5 text-sm font-medium text-neutral-800">
                        Most popular
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-8 text-white">Pro</h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-300">For teams serious about incident management and reliability.</p>
                    <div className="mt-6 flex items-baseline gap-x-1">
                      <span className="text-4xl font-bold tracking-tight text-white">$79</span>
                      <span className="text-sm font-semibold leading-6 text-neutral-300">/month per user</span>
                    </div>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-neutral-300">
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Everything in Standard
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Advanced integrations (20+)
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Unlimited incident history
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Advanced analytics & reporting
                      </li>
                      <li className="flex gap-x-3">
                        <svg className="h-6 w-5 flex-none text-neutral-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                        </svg>
                        Priority support
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Start free trial
                    </a>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <p className="text-base text-neutral-600">
                    Need a custom plan for your enterprise? <a href="#" className="font-semibold text-neutral-900 hover:underline">Contact us</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl pt-32">
              <div className="relative isolate overflow-hidden bg-neutral-950 px-6 py-18 text-center shadow-2xl sm:rounded-3xl sm:px-12">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Ready to tame the chaos?
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-pretty text-lg/8 text-gray-300">
                Start your 14-day free trial today. No credit card required.
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Start free trial
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-white">
                   Book a demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white border-t border-neutral-200 py-10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {footer.main.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {footer.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; {new Date().getFullYear()} Drill Software Limited. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );
}
