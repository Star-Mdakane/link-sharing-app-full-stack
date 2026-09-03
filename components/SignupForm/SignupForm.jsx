import Link from "next/link"
import { IoIosLock } from "react-icons/io"
import { PiEnvelopeSimpleFill } from "react-icons/pi"

const SignupForm = () => {
    return (
        <form className="w-full bg-white flex flex-col gap-10 md:p-10 md:rounded-xl"
        >
            <div>
                <h1 className="t text-[24px] md:text-[32px] font-bold text-text-sec">Create Account</h1>
                <p className="t text-[16px] text-text">Let’s get you started sharing your links!</p>
            </div>
            <div className="w-full flex flex-col gap-6">
                <label className="w-full flex flex-col gap-2 t text-[12px] text-text group">
                    <span className={``}>Email address</span>
                    <div className={`w-full h-14 p-4 gap-4 flex items-center justify-between rounded-lg border border-border group-focus-within:border-pri group-focus-within:shadow-main`}>
                        <div className="flex min-w-0 items-center gap-4">
                            <PiEnvelopeSimpleFill className="w-4 h-4 text-text" />
                            <input type="text" name="" id="" className="outline-none placeholder:text-text t text-[16px] flex-1 min-w-0" />
                        </div>
                        <span className={`text-error shrink-0 hidden md:block`}>Can&apos;t be empty</span>
                    </div>
                    <span className={`text-error shrink-0 md:hidden text-right`}>Can&apos;t be empty</span>
                </label>
                <label className="flex flex-col gap-2 t text-[12px] text-text group">
                    <span className={``}>Password</span>
                    <div className={`w-full h-14 p-4 gap-4 flex items-center justify-between rounded-lg border border-border group-focus-within:border-pri group-focus-within:shadow-main`}>
                        <div className="flex min-w-0 items-center gap-4">
                            <IoIosLock className="w-4 h-4 text-text" />
                            <input type="password" name="" id="" autoComplete="off" className="outline-none placeholder:text-text t text-[16px] flex-1 min-w-0" />
                        </div>
                        <span className={`text-error shrink-0 hidden md:block`}>Can&apos;t be empty</span>
                    </div>
                    <span className={`text-error shrink-0 md:hidden text-right`}>Can&apos;t be empty</span>
                </label>
                <label className="flex flex-col gap-2 t text-[12px] text-text group">
                    <span className={``}>Confirm password</span>
                    <div className={`w-full h-14 p-4 gap-4 flex items-center justify-between rounded-lg border border-border group-focus-within:border-pri group-focus-within:shadow-main`}>
                        <div className="flex min-w-0 items-center gap-4">
                            <IoIosLock className="w-4 h-4 text-text" />
                            <input type="password" name="" id="" autoComplete="off" className="outline-none placeholder:text-text t text-[16px] flex-1 min-w-0" />
                        </div>
                        <span className={`text-error shrink-0 hidden md:block`}>Can&apos;t be empty</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text">Password must contain at least 8 characters</span>
                        <span className={`text-error shrink-0 md:hidden text-right`}>Can&apos;t be empty</span>
                    </div>
                </label>
                <button type="submit" className="w-full h-14 bg-pri text-white t text-[16px] font-semibold rounded-lg">Create new account</button>
                <p className="text-text t text-[16px] text-center">Already have an account?{' '}
                    <Link className="text-pri" href="/login">Login</Link>
                </p>
            </div>
        </form>
    )
}

export default SignupForm