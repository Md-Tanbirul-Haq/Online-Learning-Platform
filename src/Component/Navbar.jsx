
"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const user_data = authClient.useSession()
    const user = user_data.data?.user
    console.log(user)

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16  items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">

                        <p className="font-bold">SkillSphere</p>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    <li>
                        <Link href="/"
                            className={pathname === "/" ? "text-blue-500 font-semibold" : ""}
                        >Home</Link>
                    </li>
                    <li>
                        <Link href="/Courses" className={pathname === "/Courses" ? "text-blue-500 font-semibold" : "font-medium"}>
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/Profile" className={pathname === "/Profile" ? "text-blue-500 font-semibold" : "font-medium"}>
                            My Profile
                        </Link>
                    </li>
                </ul>
                {
                    (!user && (
                        <div className="hidden items-center gap-4 md:flex">
                            <Link href="/Authentication/Log_in">Login</Link>
                            <Link href="/Authentication/Sign_up">
                                <Button className="w-full">Sign Up</Button>
                            </Link>
                        </div>
                    ))
                }


                {
                    (user && (<div className="hidden items-center gap-4 md:flex">
                        {/* <Link href="/Authentication/Log_in">Image</Link> */}
                        <Avatar>
                            <Avatar.Image alt={user?.name[0]} src={user?.image} />
                            <Avatar.Fallback>JD</Avatar.Fallback>
                        </Avatar>

                        <Link href="#">
                            <Button onClick={async () => {
                                await authClient.signOut()
                                alert("Log out Successfull.")
                            }} className="w-full">Log out</Button>
                        </Link>
                    </div>))
                }

            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li>
                            <Link href="/" className={pathname === "/" ? "text-blue-500 font-semibold" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/Courses" className={pathname === "/Courses" ? "text-blue-500 font-semibold" : "font-medium"}>
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/Profile" className={pathname === "/Profile" ? "text-blue-500 font-semibold" : "font-medium"}>
                                My Profile
                            </Link>
                        </li>



                        <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                            <Link href="/Authentication/Log_in" className="block py-2">
                                Login
                            </Link>
                            <Link href="/Authentication/Sign_up">
                                <Button className="w-full">Sign Up</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}