import { Disclosure, RadioGroup } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import mandiriImage from "/images/mandiri.png";
import bcaImage from "/images/bca.png";

const plans = [
  {
    name: "Bank Transfer ke Rek Bank Mandiri",
    title: "Virtual Account Mandiri",
    image: mandiriImage,
  },
  {
    name: "Bank Transfer ke Rek Bank BCA",
    title: "Virtual Account BCA",
    image: bcaImage,
  },
];

export const Accordion = () => {
  const [selectedBank, setSelectedBank] = useState(plans[0]);
  const [selectedVirtual, setSelectedVirtual] = useState(plans[0]);

  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>
                  <p className="text-sm">Bank Transfer (verifikasi manual)</p>
                  <p className="text-xs font-normal pt-1">
                    Pembayaran melalui Bank Transfer Mandiri atau BCA. Metode
                    bayar ini memerlukan verifikasi pembayaran manual melalui
                    Whatsapp
                  </p>
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <RadioGroup value={selectedBank} onChange={setSelectedBank}>
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
                  ${checked ? "bg-sky-700/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    <div className="flex justify-between gap-4">
                                      <img
                                        src={plan.image}
                                        alt=""
                                        className="object-cover object-center"
                                        loading="lazy"
                                      />
                                      {plan.name}
                                    </div>
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>
                  <p className="text-sm">
                    Virtual Account (verifikasi otomatis)
                  </p>
                  <p className="text-xs font-normal pt-1">
                    Pembayaran melalui virtual account berbagai bank. Metode
                    bayar ini akan diverifikasi secara otomatis.
                  </p>
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-10 w-10 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                <RadioGroup
                  value={selectedVirtual}
                  onChange={setSelectedVirtual}
                >
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.title}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                              : ""
                          }
                  ${checked ? "bg-sky-700/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex w-full items-center justify-between">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    <div className="flex justify-between gap-4">
                                      <img
                                        src={plan.image}
                                        alt=""
                                        className="object-cover object-center"
                                        loading="lazy"
                                      />
                                      {plan.title}
                                    </div>
                                  </RadioGroup.Label>
                                </div>
                              </div>
                              {checked && (
                                <div className="shrink-0 text-white">
                                  <CheckIcon className="h-6 w-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
