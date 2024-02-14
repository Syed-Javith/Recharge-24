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
                    <AlertDialogTitle>Will be revealed soon !</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Link href={'/'}>
                        <Button asChild>
                            <span>Go Back</span>
                        </Button>
                    </Link>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default DialogBox
