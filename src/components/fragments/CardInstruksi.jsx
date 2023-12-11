import { DocumentDuplicateIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const CardInstruksi = () => {
  const [accountNumber, setAccountNumber] = useState("137000299089");
  const [onCopy, setOnCopy] = useState(false);

  const handleCopy = () => {
    const duplicateData = `${accountNumber}`;
    navigator.clipboard.writeText(duplicateData);
    setAccountNumber(duplicateData);
    setOnCopy(true);

    setTimeout(() => {
      setOnCopy(false);
    }, 2000);
  };

  return (
    <>
      <section className="card w-full max-w-7xl">
        <div className="px-10 py-0  max-w-7xl">
          <div className="bg-white max-w-7xl h-96 rounded-t-2xl shadow-xl">
            <div className="px-[30px] py-[50px] grid grid-cols-2 gap-10">
              <div>
                <h1 className="font-bold text-xl">Waiting for payment</h1>
                <p className="pt-6 font-bold text-base">Payment Method:</p>
                <p className="pt-2 text-base text-[#6D7175]">
                  Bank Transfer (verifikasi manual)-Mandiri
                </p>
                <div className="flex flex-row gap-5">
                  <img
                    src="/images/mandiri.png"
                    alt=""
                    className="w-24 px-2 py-5"
                    loading="lazy"
                  />
                  <a className="pt-5 text-base text-[#6D7175]">
                    <div className="flex items-center">
                      No Rek. {accountNumber}
                      <p
                        className="tooltip"
                        data-tip={`${onCopy ? "copied" : "copy"} `}
                      >
                        <DocumentDuplicateIcon
                          className="h-6 w-6 pl-1 pb-2"
                          onClick={handleCopy}
                        />
                      </p>
                    </div>
                    <p>a.n. PT Widya Kreasi Bangsa</p>
                  </a>
                </div>

                <p className="pt-2 font-bold text-base">Your total payment:</p>
                <p className="pt-2 font-bold text-2xl">$141.92</p>
              </div>
              <div>
                <h1 className="font-bold text-xl">Payment instructions</h1>
                <div role="tablist" className="tabs tabs-bordered w-full pt-2">
                  <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab"
                    aria-label="ATM"
                  />
                  <div role="tabpanel" className="tab-content p-0 pt-8">
                    <a className="text-sm">
                      <p>1. Insert the card into the Mandiri ATM machine.</p>
                      <p>2. Select Language.</p>
                      <p>3. Enter your ATM PIN.</p>
                      <p>4. Select the other transactions menu.</p>
                      <p>
                        5. Select the &quot;Transfer menu&quot;, then select to
                        Mandiri.
                      </p>
                      <p>6. Enter the destination account number.</p>
                      <p>
                        7. Enter the nominal amount of money to be transferred.
                      </p>
                      <p>
                        8. The ATM screen will display your transaction data, if
                        the data is correct select &quot;YES&quot;.
                      </p>
                      <p>9. Done.</p>
                    </a>
                  </div>

                  <input
                    type="radio"
                    name="my_tabs_1"
                    role="tab"
                    className="tab"
                    aria-label="M-Banking"
                  />
                  <div role="tabpanel" className="tab-content p-0 pt-8">
                    <a className="text-sm">
                      <p>1. Open the Livin by Mandiri application.</p>
                      <p>2. Login to your account.</p>
                      <p>3. Select &quot;Transfer Rupiah&quot;.</p>
                      <p>4. Select &quot;Transfer to New Recipient&quot;.</p>
                      <p>
                        5. Select the Bank Name &quot;Bank Mandiri&quot; and
                        fill in the &quot;Account Number&quot; column.
                      </p>
                      <p>6. Click &quot;Continue&quot;.</p>
                      <p>
                        7. Confirm &quot;Check Recipient Details&quot; and Click
                        &quot;Continue&quot; .
                      </p>
                      <p>
                        8. Fill in the transfer amount then click
                        &quot;Finish&quot;.
                      </p>
                      <p>9. Fill in the &quot;Livin&quot; by Mandiri PIN.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 py-0 max-w-7xl">
          <div className="mt-0 bg-[#2B3E58] max-w-7xl rounded-b-2xl h-60">
            <div className="flex flex-col px-[20px] py-[50px]">
              <div className="flex flex-row justify-center pt-5">
                <h1 className="font-bold text-sm text-white">
                  Your payment will be processed after you complete the payment
                  process
                </h1>
              </div>

              <div className="flex flex-row justify-center pt-5">
                <button className="px-[20px] py-[18px] font-bold text-sm text-white bg-[#FCBC30] rounded-full">
                  <a href="#">Payment Confirmation</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardInstruksi;
