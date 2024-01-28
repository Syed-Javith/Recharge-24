"use client"
import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/Button";

import Link from 'next/link';
const DialogBox = () => {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        setOpen(true)
    }, [])
    return (

        <AlertDialog open={open} onOpenChange={setOpen} >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>UnAuthorised</AlertDialogTitle>
                    <AlertDialogDescription>
                        You Have not logged in, Please Login and come to continue.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Link href={'/login'}>
                        <Button asChild>
                            <span>Login</span>
                        </Button>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default DialogBox
