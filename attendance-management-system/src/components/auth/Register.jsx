import React from 'react'

export default function Register() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <h1 className="text-[#111517] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
              Create a new account
            </h1>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111517] text-left text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Your name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111517] text-left text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Your email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111517] text-left text-base font-medium leading-normal pb-2">Password</p>
                <input
                  placeholder="••••••••"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>
            <p className="text-[#647987] text-sm font-normal leading-normal pb-3 pt-1 px-4">
              By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
              We'll occasionally send you account-related emails.
            </p>
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1d8cd7] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Create Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
