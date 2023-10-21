"use client"

import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card"
import { Sheet, SheetContent, SheetHeader, SheetTrigger, } from "./sheet";
import {  signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import {signIn} from 'next-auth/react'

const Header = () => {

    const { status, data } = useSession();

    const handleLoginClick = async ()=>{
        await signIn()
    }

    const handleLogoutClick = async () => {
        await signOut();
    }


    return <Card className="flex justify-between p-[1.875rem] items-center">
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant='outline'>
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side='left'>
                <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>

                {status === 'authenticated' && data?.user && (
                    <div className="flex flex-col">
                        <div className="flex item-center gap-2 py-4">
                            <Avatar>
                                <AvatarFallback>
                                    {data.user.name?.[0].toUpperCase()}
                                </AvatarFallback>

                                {data.user.image && (<AvatarImage src={data.user.image} />)}
                            </Avatar>

                            <div className="flex flex-col">
                                <p className="font-medium">{data.user.name}</p>
                                <p className="text-sn opacity-75">Boas compras!</p>
                            </div>

                        </div>

                        <Separator />
                    </div>
                )}
                <div className="mt-4 flex flex-col gap-2">

                    {status === 'unauthenticated' && <Button onClick={handleLoginClick} variant={"outline"} className="w-full justify-start gap-2"><LogInIcon size={16} /> Fazer login</Button>}


                    {status === 'authenticated' && <Button onClick={handleLogoutClick} variant={"outline"} className="w-full justify-start gap-2"><LogOutIcon size={16} /> Fazer logout</Button>}

                    <Button variant={"outline"} className="w-full justify-start gap-2"><HomeIcon size={16} /> Início</Button>

                    <Button variant={"outline"} className="w-full justify-start gap-2"><PercentIcon size={16} /> Ofertas</Button>

                    <Button variant={"outline"} className="w-full justify-start gap-2"><ListOrderedIcon size={16} /> Catálogo</Button>
                </div>

            </SheetContent>
        </Sheet>


        <h1 className="text-lg font-semibold"><span className="text-primary">DEV</span> Store </h1>

        <Button size="icon" variant='outline'>
            <ShoppingCartIcon />
        </Button>
    </Card>;
}

export default Header;