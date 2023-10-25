import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Button2 from '@/components/ui/jagat/Button2'

export default function Home() {
  return (
    <p className="text-red-500 font-bold">Hello Notion Clone
    <Button variant="outline" >Hello Button</Button>
    <Button2 size="lg" variant="outline">Button 2</Button2>
    </p>
  )
}
