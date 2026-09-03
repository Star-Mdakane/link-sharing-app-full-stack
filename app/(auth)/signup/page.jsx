import SignupForm from '@/components/SignupForm/SignupForm'
import Image from 'next/image'

const SignupPage = () => {
    return (
        <div className="w-full md:w-119 mx-auto h-screen md:h-auto flex flex-col gap-16 p-8 md:p-0 bg-white md:bg-light">
            <div className="w-full flex justify-center">
                <Image
                    src={"/images/logo-devlinks-large.svg"}
                    width={182.5}
                    height={40}
                    alt='logo'
                />
            </div>
            <SignupForm />
        </div>
    )
}

export default SignupPage