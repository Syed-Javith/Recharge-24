"use client"
import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
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
                    <AlertDialogTitle>UnAuthorised - No User found</AlertDialogTitle>
                    <AlertDialogDescription>
                        You Have not logged in, Please Login and visit back to buy tickets.
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
