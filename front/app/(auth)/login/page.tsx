import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"

export default function login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[550px] bg-white rounded-md px-10 shadow-md">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Clash</h1>
                <h1 className="text-2xl font-bold mt-2">Login</h1>
                <p>Welcome back</p>
                <form>
                    <div className="mt-4">
                        <Input type="email" label="Email" />
                    </div>
                    <div className="mt-4">
                        <Input type="password" label="Password" />
                        <div className="text-right">
                            <Link href="/forget-password" className="text-sm font-semibold text-slate-600">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button className="w-full bg-slate-800 text-white font-medium">Submit</Button>
                    </div>
                    <div className="text-center text-sm my-4">
                        <p>already have an account? {" "}<strong><Link href="/register" className="text-slate-800 font-semibold">Register</Link></strong></p>
                    </div>
                </form>
            </div>
        </div>
    )
}