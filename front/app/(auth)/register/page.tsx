import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { Input } from "@heroui/input"

export default function register() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-md px-10 shadow-md">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Clash</h1>
                <h1 className="text-2xl font-bold mt-2">Register</h1>
                <p>Welcome back</p>
                <form>
                    <div className="mt-4">
                        <Input type="text" name="name" label="Name" />
                    </div>
                    <div className="mt-4">
                        <Input type="email" name="email" label="Email" />
                    </div>
                    <div className="mt-4">
                        <Input type="password" name="password" label="Password" />
                    </div>
                    <div className="mt-4">
                        <Input type="password" name="cpassword" label="Confirm Password" />
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-slate-800 text-white font-medium">Submit</Button>
                    </div>
                    <div className="text-center text-sm my-4">
                        <p>Don&apos;t have an account? {" "}<strong><Link href="/login" className="text-slate-800 font-semibold">Login</Link></strong></p>
                    </div>
                </form>
            </div>
        </div>
    )
}