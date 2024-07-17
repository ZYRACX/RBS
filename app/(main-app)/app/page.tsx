"use client"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Link from "next/link";

export default function Home(){

    const {data: session, status} = useSession()
    useEffect(() => {
        if (status !== "authenticated") {
            window.location.href = "/"  
        }
    }, [status])
    return <>
        <Card>
    <CardContent>
      <Typography variant="h5">Inventory</Typography>
      <Link href={"/app/inventory"}>
      <Button>See More</Button>
      </Link>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Typography variant="h5">Mission</Typography>
      <Link href={"/app/missions"}>
      <Button>See More</Button>
      </Link>
    </CardContent>
  </Card>
  <Card>
    <CardContent>
      <Typography variant="h5">Market</Typography>
      <Link href={"/app/market"}>
      <Button>See More</Button>
      </Link>
    </CardContent>
  </Card>
    </>
}